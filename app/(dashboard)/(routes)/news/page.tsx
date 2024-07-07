"use client";
import React, { useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

const Home: React.FC = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchNews = async (searchQuery: string) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`/api/news?query=${searchQuery}`);
            setArticles(response.data);
        } catch (error) {
            setError('Error fetching news');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchNews(query);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>News Search</h1>
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
            <div className={styles.articles}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.article}>
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className={styles.image} />
                        )}
                        <h2 className={styles.articleTitle}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}
                            </a>
                        </h2>
                        <p className={styles.articleDescription}>{article.description}</p>
                        <p className={styles.articleDate}>{new Date(article.publishedAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
