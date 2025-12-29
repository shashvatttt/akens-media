import './Hero.css'

const Hero = () => {
    return (
        <section className="hero container section">
            <div className="hero-content fade-in">
                <h1 className="hero-headline">
                    We turn vision<br />
                    into authority.
                </h1>
                <p className="hero-subhead delay-200 slide-up">
                    AKENS MEDIA partners with founders to build brands that lead, not follow. We focus on clarity, strategy, and aesthetics.
                </p>
                <a href="#work" className="hero-cta delay-300 slide-up">View our work</a>
            </div>
            <div className="hero-image-container fade-in delay-200">
                <img src="/images/landing.jpg" alt="Akens Media" className="hero-image" />
            </div>
        </section>
    )
}

export default Hero
