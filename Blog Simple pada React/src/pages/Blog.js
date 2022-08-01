import React from 'react';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Blog() {
    const [articles, setArticles]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(function () {
        document.title='Blog'

        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }
        getArticles();
    },[]);

    return(
        <section className='section'>
            <h1  className="section-title">Blog</h1>
            <p className="section-description">Ini adalahah artikelnya :</p>
            {!loading ? (
                <div className='articles'>
                    {articles.map(function (article) {
                        return (
                        <article key={article.id}  className='article'>
                            <h2 className='article-title'>
                                <Link to={`/blog/${article.id}`}>{article.title}</Link>
                            </h2>
                            <time className='article-time'>
                                {/* {article.publishedAt} */}
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </time>
                        </article>)
                    }) }
                </div>
            )
            :
            <div>Loading...</div>
            }
        </section>
    )
}

export default Blog;