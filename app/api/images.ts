// "use client";
// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// const GOOGLE_IMAGES_API_KEY = 'AIzaSyChcce9ShCxRAL4FVeP-JwcMqciWWEnhr8';
// const GOOGLE_IMAGES_CX = 'd540da792195f493e';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { query } = req.query;

//     if (!query) {
//         return res.status(400).json({ error: 'Query parameter is required' });
//     }

//     try {
//         const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
//             params: {
//                 key: GOOGLE_IMAGES_API_KEY,
//                 cx: GOOGLE_IMAGES_CX,
//                 q: query,
//                 searchType: 'image',
//                 num: 10,
//             },
//         });

//         res.status(200).json(response.data.items);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching images' });
//     }
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query: query,
                client_id: UNSPLASH_ACCESS_KEY,
                per_page: 10,
            },
        });

        res.status(200).json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images' });
    }
}
