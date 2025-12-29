import './Contact.css'

const Contact = () => {
    return (
        <section className="contact section container">
            <div className="contact-box fade-in">
                <h2 className="contact-headline">Ready to shape your brand?</h2>
                <a href="mailto:hello@akensmedia.com" className="contact-link">hello@akensmedia.com</a>
                <div className="contact-footer">
                    <span>&copy; {new Date().getFullYear()} AKENS MEDIA</span>
                    <div className="contact-socials">
                        <a href="https://www.instagram.com/akensmedia/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="https://x.com/akensmedia" target="_blank" rel="noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
