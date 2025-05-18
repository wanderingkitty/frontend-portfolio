import { useState } from 'react'
import Projects from './Projects'
import './MainPage.css'

function App() {
  const [showCV, setShowCV] = useState(false)

  return (
    <div className="app-container">
      <header className="hero">
        <nav className="navbar">
          <h3 className="logo">AlinaEricson<span className="dot">.</span></h3>
          <ul className="nav-links">
            <li><a href="#about">// about</a></li>
            <li><a href="#experience">// experience</a></li>
            <li><a href="#work">// work</a></li>
            <li><a href="#contact">// contact</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">ALINA ERICSON</h1>
          <p className="hero-subtitle">Frontend Developer | Intern @ Centiro | Based in Sweden</p>
          <button className="view-cv" onClick={() => setShowCV(!showCV)}>
            {showCV ? 'Hide CV' : 'View CV'}
          </button>
        </div>
        <div className="scroll-indicator"></div>
      </header>


      {showCV && (
        <section className="cv-section">
          <iframe
            src="/alina.pdf"
            title="Alina's CV"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </section>
      )}

      <section className="section about">
        <h2>About Me</h2>
        <p>I’m a frontend development student with hands-on experience from Centiro Solutions. I enjoy building responsive, user-friendly websites with React, TypeScript, and Angular.</p>
        <div className="skills">
          {['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React.js', 'Angular', 'Figma', 'UX design', 'CI/CD', 'Git', 'Azure DevOps', 'Agile methods', 'Deployment process', 'Back End-webbutveckling', 'C#'].map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section experience">
        <h2>Experience</h2>
        <p><strong>Intern – Centiro Solutions AB</strong><br />Nov 2024 – Present<br />
          Contributed to Angular/TypeScript codebase, improved UI, and worked in Agile team with Azure DevOps.
        </p>
      </section>

      <section className="section work">
        <Projects />
      </section>

      <section className="section contact">
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
