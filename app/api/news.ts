import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const NEWS_API_KEY = process.env.NEWS_API_KEY as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                apiKey: NEWS_API_KEY,
                pageSize: 10,
            },
        });

        res.status(200).json(response.data.articles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news' });
    }
}
