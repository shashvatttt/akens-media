import './Services.css'

const services = [
    { title: "Branding & Identity", description: "Comprehensive visual systems that distinguish your business in a crowded market." },
    { title: "Digital & Social Design", description: "High-impact digital assets and social media content that drives engagement." },
    { title: "Packaging & Product Design", description: "Tactile brand experiences that create a lasting physical connection." }
]

const Services = () => {
    return (
        <section className="services section container">
            <h2 className="section-title">Our Expertise</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
