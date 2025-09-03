export const useApiService = () => {
    const config = useRuntimeConfig();

    const api = {
        async get<T>(endpoint: string): Promise<T> {
            return await $fetch(`${config.public.apiBase}${endpoint}`)
        },

        async post<T>(endpoint: string, data: any): Promise<T> {
            return await $fetch(`${config.public.apiBase}${endpoint}`, {
                method: 'POST',
                body: data
            })
        }
    }

    return {
        api
    }
}