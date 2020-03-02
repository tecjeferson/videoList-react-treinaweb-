import { ApiService } from './ApiServices'

const endpoint = 'videos'

export const VideoService = {
    list() {
        return ApiService.get(endpoint)
    }
}