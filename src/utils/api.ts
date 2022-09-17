import axios from 'axios'

export class ApiError {
    httpStatus: number
    code: string
    message: string
    uri: string
    transactionId: string
    timestamp: string
    constructor(
        httpStatus: number,
        message: string,
        code: string,
        uri: string,
        transactionId: string,
        timestamp: string
    ) {
        this.message = message
        this.code = code
        this.httpStatus = httpStatus
        this.uri = uri
        this.transactionId = transactionId
        this.timestamp = timestamp
    }
}

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config: any) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers['x-onblok-auth-token'] = token
        }
    }

    return config
})

api.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        const apiError = new ApiError(400, 'Unknown Api Error', '400', 'not-found', '100', '')
        if (error.response) {
            apiError.code = error.response.data.code
            apiError.httpStatus = error.response.data.httpStatus
            apiError.message = error.response.data.message
            apiError.timestamp = error.response.data.timestamp
            apiError.transactionId = error.response.data.transactionId
            apiError.uri = error.response.data.uri
        }
        return Promise.reject(apiError)
    }
)
