
const PROD = {
    SERVICE_API: 'https://api.whipafrica.com/v1'
}

const DEV = {
    SERVICE_API: 'https://api.whipafrica.com/v1'
}

const env = 'development'

const MENV = () => {
    if(env === 'development') {
        return DEV
    }
    return PROD
}

export default MENV;
