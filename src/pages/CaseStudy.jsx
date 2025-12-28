import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './CaseStudy.css'
import chaatRealImg from '../assets/images/chaat_ka_chaska_real.jpg'
import shubhiRealImg from '../assets/images/eyes_of_shubhi_real.jpg'

const caseStudies = {
    "chaat-ka-chaska": {
        title: "Chaat Ka Chaska India",
        category: "Food Brand",
        social: "https://www.instagram.com/chaatkachaskaindia",
        intro: "Reimagining street food culture with a bold, modern identity that speaks to a new generation.",
        image: chaatRealImg,
        sections: [
            {
                title: "Challenge",
                content: "The brand lacked a consistent visual language to stand out in the crowded street food market. Their social presence was sporadic and didn't reflect the premium quality of their offering."
            },
            {
                title: "Solution",
                content: "We developed a cohesive visual identity that blends traditional vibrancy with modern minimalism. We created a suite of social media assets that established a recognizable brand voice."
            },
            {
                title: "Result",
                content: "The new identity drove immediate engagement on Instagram, creating a community of food lovers. Brand recognition increased, leading to higher footfall and franchise inquiries."
            }
        ]
    },
    "eyes-of-shubhi": {
        title: "Eyes of Shubhi",
        category: "Personal Brand",
        social: "https://www.instagram.com/eyesofshubhi1",
        intro: "Strategic personal branding for creator growth, focusing on authenticity and high-value positioning.",
        image: shubhiRealImg,
        sections: [
            {
                title: "Challenge",
                content: "Despite high-quality content, the creator struggled to define a clear niche and brand identity. This made it difficult to attract premium sponsorships and collaborations."
            },
            {
                title: "Solution",
                content: "We refined the visual direction to be more editorial and polished. We developed a content strategy that balanced personal storytelling with professional insights to build authority."
            },
            {
                title: "Result",
                content: "The refreshed brand positioned her as a premium creator. Engagement quality improved, attracting partnerships with lifestyle brands that aligned with her new aesthetic."
            }
        ]
    }
}

const CaseStudy = () => {
    const { slug } = useParams()
    const data = caseStudies[slug]

    if (!data) return <div className="container section">Project not found</div>

    return (
        <div className="case-study container">
            <div className="cs-header">
                <span className="cs-category">{data.category}</span>
                <h1 className="cs-title">{data.title}</h1>
                <p className="cs-intro">{data.intro}</p>
                {data.social && (
                    <a href={data.social} target="_blank" rel="noreferrer" className="cs-social-link">Visit Instagram ↗</a>
                )}
            </div>

            <div className="cs-image-container">
                <img src={data.image} alt={data.title} className="cs-hero-image" />
            </div>

            <div className="cs-content">
                {data.sections.map((section, index) => (
                    <div key={index} className="cs-section">
                        <h2 className="cs-section-title">{section.title}</h2>
                        <p className="cs-section-text">{section.content}</p>
                    </div>
                ))}
            </div>

            <div className="cs-footer">
                <Link to="/#work" className="cs-back-link">← Back to Work</Link>
            </div>
        </div>
    )
}

export default CaseStudy
