import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createShortUrl = (longUrl: string) => {
    return api.post<{ shortUrl: string }>('/shorten', { longUrl });
};
