import { toast } from 'react-toastify'
import { ApiError } from './api'

export const createApiErrorToast = (err: unknown) => {
    if (err instanceof ApiError) {
        toast(err.message, { type: 'error' })
    } else {
        toast('Error Request', { type: 'error' })
    }
}
