import { useEffect } from "react";

function Home() {

    // memberikan nama title :
    useEffect(function () {
        document.title='Home'
    },[])
    return (
        <section className="section">
            <h1 className="section-title">Selamat datang di Website Mantab</h1>
            <p className="section-description">Halo gays, ini adalah website mantab pokonya. Jangan berharap banyak yak hehe.</p>
        </section>
    )
}

export default Home;