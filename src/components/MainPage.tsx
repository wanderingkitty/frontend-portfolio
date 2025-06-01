import { useRef } from "react";
import Projects from "./Projects";
import "./MainPage.css";
// import ModelViewer from "./ModelViewer";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const mainRef = useRef(null);

  const scrollToSection = (selector: string): void => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-container">
      {/* Fixed Navigation Header */}
      <nav className="fixed-nav">
        <div className="fixed-nav-content">
          <button className="nav-logo" onClick={() => scrollToSection("#main")}>
            AlinaEricson
          </button>
          <div className="fixed-nav-links">
            <button
              className="fixed-nav-btn"
              onClick={() => scrollToSection("#about")}
            >
              <span className="nav-number">01</span> // about
            </button>
            <button
              className="fixed-nav-btn"
              onClick={() => scrollToSection("#experience")}
            >
              <span className="nav-number">02</span> // experience
            </button>
            <button
              className="fixed-nav-btn"
              onClick={() => scrollToSection("#work")}
            >
              <span className="nav-number">03</span> // work
            </button>
            <button
              className="fixed-nav-btn"
              onClick={() => scrollToSection("#contact")}
            >
              <span className="nav-number">04</span> // contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero секция с анимированным фоном */}
      <section ref={mainRef} className="hero-section" id="main">
        <div className="animated-bg"></div>
        {/* <ModelViewer /> */}
        <div className="hero-content">
          <h1 className="main-title">
            ALINA <br />
            ERICSON
          </h1>
          <p className="main-subtitle">
            Frontend Developer | Centiro Solutions AB | Based in Sweden
          </p>
        </div>
      </section>

      <section ref={aboutRef} className="section about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a frontend developer working with React and Angular at Centiro
          Solutions. When I'm not coding, you'll find me cycling, hiking, or
          playing World of Warcraft and FromSoftware games. <br />I read fantasy
          books and my cat supervises all my work from home days.
        </p>
        <div className="skills">
          {[
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Angular",
            "Figma",
            "UX design",
            "CI/CD",
            "Git",
            "Azure DevOps",
            "Agile methods",
            "Deployment process",
            "Backend",
            "C#",
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
      <hr className="with-dot" />
      <section
        ref={experienceRef}
        className="section experience"
        id="experience"
      >
        <h2>Experience</h2>
        <p>
          <strong>Intern – Centiro Solutions AB</strong>
          <br />
          Nov 2024 – Present
          <br />
          Contributed to Angular/TypeScript codebase, improved UI, CI/CD,
          working in Agile team with Azure DevOps.
        </p>
      </section>

      <section ref={workRef} className="section work" id="work">
        <Projects />
      </section>
      <hr className="with-dot" />

      <section ref={contactRef} className="section contact" id="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:alinaericson95@gmail.com">alinaericson95@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/alina-ericson-50549b273/">
            LinkedIn
          </a>{" "}
          | <a href="#">GitHub</a>
        </p>
      </section>

      <footer>
        <p>&copy; 2025 Alina Ericson</p>
      </footer>
    </div>
  );
}

export default App;
