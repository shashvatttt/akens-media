import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar container">
            <a href="/" className="navbar-brand">AKENS MEDIA</a>
            <div className="navbar-links">
                <a href="/#work">Work</a>
                <a href="/#services">Services</a>
                <a href="/#about">About</a>
                <a href="/#contact" className="navbar-cta">Start a Project</a>
            </div>
        </nav>
    )
}

export default Navbar
