import { useEffect } from "react";

function Contact() {
    // memberikan nama title :
    useEffect(function () {
        document.title='Contact'
    },[])

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Hubungi Kami di :</p>
            <ul>
                <li className="contact-ul">WA : 087736188814</li>
                <li>Email : mukhlisk93@gmail.com</li>
                <li><a href="https://web.facebook.com/mukhlis.kurniaaji/">Facebook</a></li>
            </ul>
        </section>
    )
}

export default Contact;