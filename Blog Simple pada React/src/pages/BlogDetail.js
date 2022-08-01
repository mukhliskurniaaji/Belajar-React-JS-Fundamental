import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';

function BlogDetail() {
   const [article, setArticle]=useState({});
   const [loading, setLoading]=useState(true);
   const params = useParams();
   const [notFound, setNotFound]=useState(false);
   

   useEffect(function () {
    document.title='Blog Detail'
    async function getArticle() {
        const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
        
        if (!request.ok) {
            return setNotFound(true);
        } // ketika request no=false, maka diset notFound
        
        const response = await request.json();

        setArticle(response);
        setLoading(false);
    }
    getArticle();
   },[params]);
   
   if (notFound) {
    return (<h1>Artikel tidak ditemukan</h1>)
   } // Ketika notFound, maka akan menjalankan return ini

   return (
    <section className="section">
        {!loading ? 
         <article className="article">
             <h1 className="article-title">{article.title}</h1>
             <time className="article-time">
                 {new Date(article.publishedAt).toLocaleDateString()}
             </time>
             <img src={article.imageUrl} alt={article.title} className='article-image' />
             <p className="article-summary">{article.summary}</p>
             <p>{article.newSite}</p>
        </article>
        :
        <i>Loading...</i>}
    </section>
)
}

export default BlogDetail;