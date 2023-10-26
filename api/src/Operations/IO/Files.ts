import Application from '@ioc:Adonis/Core/Application'
import Env from '@ioc:Adonis/Core/Env'
import * as fs from 'fs'
import archiver from 'archiver'

export default class Files
{
    public root = Application.appRoot
    public PATH_TO_FILES = (Application.appRoot + '/public/uploads/').replace('/source/', '/current/')
    public tempdir: string | null

    public toUrl(path: string)
    {
        return path.replace(this.PATH_TO_FILES, Env.get('BASE_URL') + '/prebat.api/uploads/')
    }

    public createTempdir()
    {
        if (this.tempdir) {
            return
        }
        const dirname = 'tmp_' + ( Math.random().toString(36).substring(2, 9) )
        this.tempdir = this.PATH_TO_FILES + dirname + '/'
        fs.mkdirSync(this.tempdir)
    }

    public appendFileToTempdir(filename: string, content: NodeJS.ArrayBufferView)
    {
        fs.writeFileSync(this.tempdir + filename, content)
    }

    public copy(source: string, destination: string)
    {
        fs.cpSync(source, destination)
        return destination
    }

    public readFileInTempdir(filename: string)
    {
        try {
            const data = fs.readFileSync(this.tempdir + filename, 'utf8')
            return data
        } catch (error) {
            throw error
        }
    }

    public async zipTempdir(zipname: string)
    {
        const outPath = this.PATH_TO_FILES + zipname + '.zip'
        try {
            fs.rmdirSync(outPath)
        } catch(err) {}
        const archive = archiver('zip', { zlib: { level: 9 }})
        const stream = fs.createWriteStream(outPath)

        archive.pipe(stream)
        archive.directory(this.tempdir, false)
        await archive.finalize()
        return this.toUrl(outPath)
    }

    public async removeTempdir()
    {
        if (!this.tempdir) return
        fs.rmdir(this.tempdir, { recursive: true }, (error) => {
            if (error) throw error
        })
    }
}