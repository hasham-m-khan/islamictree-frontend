import {useApiService} from "~/composables/useApiService";

import type { Article } from '~/types/Article';

export const useArticleService = () => {
    const ENDPOINT = "articles"
    const { api } = useApiService();

    const getArticles = async (): Promise<Article[]> => {
        return await api.get(ENDPOINT);
    }

    const getArticle = async (id: string): Promise<Article> => {
        return await api.get(`${ENDPOINT}/${id}?includeTags=true`)
    }

    return {
        getArticles,
        getArticle,
    }
}