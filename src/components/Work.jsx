import { Link } from 'react-router-dom'
import './Work.css'
import chaatImg from '../assets/images/chaat_ka_chaska_real.jpg'
import shubhiImg from '../assets/images/eyes_of_shubhi_real.jpg'

const projects = [
    {
        id: 1,
        title: "Chaat Ka Chaska India",
        slug: "chaat-ka-chaska",
        category: "Food Brand",
        description: "Reimagining street food culture with a bold, modern identity that speaks to a new generation.",
        image: chaatImg
    },
    {
        id: 2,
        title: "Eyes of Shubhi",
        slug: "eyes-of-shubhi",
        category: "Personal Brand",
        description: "Strategic personal branding for creator growth, focusing on authenticity and high-value positioning.",
        image: shubhiImg
    }
]

const Work = () => {
    return (
        <section className="work section container">
            <h2 className="section-title">Selected Work</h2>
            <div className="work-list">
                {projects.map((project) => (
                    <div key={project.id} className="work-item">
                        <div className="work-image-container">
                            <Link to={`/work/${project.slug}`}>
                                <img src={project.image} alt={project.title} className="work-image" />
                            </Link>
                        </div>
                        <div className="work-content">
                            <span className="work-category">{project.category}</span>
                            <h3 className="work-title">{project.title}</h3>
                            <p className="work-description">{project.description}</p>
                            <Link to={`/work/${project.slug}`} className="work-link">View Case Study</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work
