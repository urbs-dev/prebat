import { sveltekit } from '@sveltejs/kit/vite'
import replace from '@rollup/plugin-replace'
import { defineConfig } from 'vite'
import path from 'path'
import { config } from 'dotenv'

const result = config({ path: '../../.env'})
if (result.error) {
	config({ path: '../../../.env'})
}

const params = {
    plugins: [
        sveltekit(),
        replace({
            preventAssignment: true,
            values: {
                'BASE_URL': process.env.NODE_ENV === 'development' ? process.env.BASE_URL : 'https://cerema.urbs.fr',
                'STATIC_PATH': process.env.NODE_ENV === 'development' ? '' : '/prebat',
            }
        }),
    ],
    resolve: {
        alias: {
            $module: path.resolve('./src/module'),
        }
    },
}

export default params