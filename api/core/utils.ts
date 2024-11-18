

export const PATH_TO_FILES = process.env.NODE_ENV === 'development' ? process.env.ROOT_PATH + 'prebat/data/' : process.env.ROOT_PATH + 'prebat/source/data/'

export const sessionAsPrivilege = (session) => {
    if (!session) return false
    if ( new Date(session?.licenses?.prebat.end_at) > new Date() || session?.roles?.GLOBAL_ADMIN) return true
    else return false
}