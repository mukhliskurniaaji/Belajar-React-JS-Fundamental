import { useEffect } from "react";

function Profile() {
    // memberikan nama title :
    useEffect(function () {
        document.title='Profile'
    },[])
    
    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-description">Halo gays, perkenalkan, namaku Mukhlis Kurnia Aji</p>
            <p className="section-description">Saya tinggal bersama orang tua di Sukoharjo.</p>
        </section>
    )
}

export default Profile;