"use client";
// import React, { useState } from 'react';
// import axios from 'axios';

// interface Image {
//     link: string;
//     title: string;
// }

// const Home: React.FC = () => {
//     const [query, setQuery] = useState('');
//     const [images, setImages] = useState<Image[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const fetchImages = async (searchQuery: string) => {
//         setLoading(true);
//         setError('');
//         try {
//             const response = await axios.get(`/api/images`, {
//                 params: { query: searchQuery },
//             });
//             setImages(response.data);
//         } catch (err) {
//             setError('Error fetching images');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         fetchImages(query);
//     };

//     return (
//         <div style={{ textAlign: 'center', padding: '20px' }}>
//             <h1>Image Search</h1>
//             <form onSubmit={handleSearch}>
//                 <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Search for images"
//                     style={{ padding: '10px', width: '300px' }}
//                 />
//                 <button type="submit" style={{ padding: '10px 20px' }}>Search</button>
//             </form>
//             {loading && <p>Loading...</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//                 {images.map((image, index) => (
//                     <div key={index} style={{ margin: '10px' }}>
//                         <img src={image.link} alt={image.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
//                         <p>{image.title}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

import React, { useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';

interface Image {
    id: string;
    urls: {
        small: string;
        full: string;
    };
    alt_description: string;
}

const Home: React.FC = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchImages = async (searchQuery: string) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`/api/images?query=${searchQuery}`);
            setImages(response.data);
        } catch (error) {
            setError('Error fetching images');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchImages(query);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Image Search</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Enter a search query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Search
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className={styles.images}>
                {images.map((image) => (
                    <div key={image.id} className={styles.image}>
                        <img src={image.urls.small} alt={image.alt_description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
