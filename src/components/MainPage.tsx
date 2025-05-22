
import { useRef } from 'react'
import Projects from './Projects'
import './MainPage.css'

function App() {
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)
  const mainRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="app-container">
      {/* Fixed Navigation Header */}
      <nav className="fixed-nav">
        <div className="fixed-nav-content">
          <button className="nav-logo" onClick={() => scrollToSection(mainRef)} >AlinaEricson</button>
          <div className="fixed-nav-links">
            <button className="fixed-nav-btn" onClick={() => scrollToSection(aboutRef)}>
              <span className="nav-number">01</span> // about
            </button>
            <button className="fixed-nav-btn" onClick={() => scrollToSection(experienceRef)}>
              <span className="nav-number">02</span> // experience
            </button>
            <button className="fixed-nav-btn" onClick={() => scrollToSection(workRef)}>
              <span className="nav-number">03</span> // work
            </button>
            <button className="fixed-nav-btn" onClick={() => scrollToSection(contactRef)}>
              <span className="nav-number">04</span> // contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero секция с анимированным фоном */}
      <section ref={mainRef} className="hero-section" id='main'>
        <div className="animated-bg"></div>
        <div className="hero-content">
          <h1 className="main-title">ALINA <br />ERICSON</h1>
          <p className="main-subtitle">Frontend Developer | Centiro Solutions AB | Based in Sweden</p>

        </div>
      </section>
    
      <section ref={aboutRef} className="section about" id="about">
        <h2>About Me</h2>
        <p>I'm a frontend development student with hands-on experience from Centiro Solutions. I enjoy building responsive, user-friendly websites with React, TypeScript, and Angular.</p>
        <div className="skills">
          {['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React.js', 'Angular', 'Figma', 'UX design', 'CI/CD', 'Git', 'Azure DevOps', 'Agile methods', 'Deployment process', 'Back End-webbutveckling', 'C#'].map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section ref={experienceRef} className="section experience" id="experience">
        <h2>Experience</h2>
        <p><strong>Intern – Centiro Solutions AB</strong><br />Nov 2024 – Present<br />
          Contributed to Angular/TypeScript codebase, improved UI, and worked in Agile team with Azure DevOps.
        </p>
      </section>

      <section ref={workRef} className="section work" id="work">
        <Projects />
      </section>

      <section ref={contactRef} className="section contact" id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:alinaericson95@gmail.com">alinaericson95@gmail.com</a></p>
        <p><a href="https://www.linkedin.com/in/alina-ericson-50549b273/">LinkedIn</a> | <a href="#">GitHub</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Alina Ericson</p>
      </footer>
    </div>
  )
}

export default App