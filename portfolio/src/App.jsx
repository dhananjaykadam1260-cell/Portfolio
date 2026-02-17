import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

/**
 * Update only this DATA object with your real details.
 */
const DATA = {
  name: "Dhananjay Kadam",
  role: "Java Backend Developer",
  specialties: ["Java","Spring Boot", "AWS", "DevOps"],
  location: "Pune, India",
  email: "dhananjaykadam1260@gmail.com",
  phone: "+91-8767348231",
  github: "https://github.com/dhananjaykadam1260-cell",
  linkedin: "https://linkedin.com/in/dhananjay-kadam-951511373",
  resumeUrl:
    "https://drive.google.com/file/d/1tqU-pg4gpXKizBEJ5uzgvejOiQIYjyzi/view?usp=sharing",

  summary:
    "Java Backend Developer experienced in building scalable applications using Spring Boot, REST APIs, and MySQL. I combine backend development with DevOps practices like Docker, Linux, and CI/CD, and I'm actively expanding my skills in AWS to create efficient, cloud-native solutions.",

  skills: {
    Backend: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "REST APIs"],
    Frontend: ["React", "Vite", "HTML", "CSS", "Bootstrap"],
    Database: ["MySQL", "PostgreSQL"],
    DevOps: ["Git", "Docker", "CI/CD", "Linux", "Kubernetes"],
    Tools: ["Postman", "VS Code", "IntelliJ", "Eclipse"],
  },

  projects: [
    {
      title: "E-Commerce Backend API",
      desc: "Designed and developed RESTful APIs for products, cart, and order management implementing input validation, layered architecture (Controller–Service–Repository), centralized exception handling, JWT-based security, role-based access control, pagination, sorting, DTO pattern, and MySQL database integration using Spring Boot, Hibernate, and JPA.",
      stack: ["Spring Boot", "MySQL", "JWT"],
      links: { code: "https://github.com/dhananjaykadam1260-cell" },
      icon: "🛒",
    },
    {
      title: "Gym Management System",
      desc: "Built a Gym Management web application using JSP, Servlets, JDBC, and MySQL implementing member registration, plan management, fee tracking, attendance records, and admin dashboard. Applied MVC architecture, form validation, session management, and CRUD operations with efficient database integration.",
      stack: ["Spring Boot", "Thymeleaf", "MySQL"],
      links: { code: "https://github.com/dhananjaykadam1260-cell" },
      icon: "💪",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio with clean sections, projects, and direct contact links.",
      stack: ["React", "Vite"],
      links: { code: "https://github.com/dhananjaykadam1260-cell" },
      icon: "🎨",
    },
  ],

  experience: [
    {
      company: "Project / Internship Experience",
      role: "Java Backend Developer",
      period: "2025 — 2026",
      points: [
        "Designed and implemented scalable REST APIs using Spring Boot following clean architecture principles.",
        "Enhanced backend reliability by implementing centralized exception handling and request validation.",
        "Built database-driven modules using MySQL, JPA, and Hibernate with optimized CRUD operations.",
        "Dockerized applications and explored CI/CD practices for automated build and deployment pipelines.",
      ],
    },
  ],

  stats: [
    { label: "Projects", value: "4+" },
    { label: "Technologies", value: "10+" },
    { label: "Experience", value: "1+ Years" },
  ],
};

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const sections = useMemo(
    () => ["hero", "about", "skills", "projects", "experience", "contact"],
    []
  );

  // Mail link (Send Message button)
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio Contact - ${DATA.name}`);
    const body = encodeURIComponent(
      `Hi ${DATA.name},\n\nI saw your portfolio and would like to connect.\n\nThanks,`
    );
    return `mailto:${DATA.email}?subject=${subject}&body=${body}`;
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section detection
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    const updateMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("mousemove", updateMouse);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("mousemove", updateMouse);
    };
  }, [sections]);

  return (
    <div className="app">
      {/* Cursor Follower */}
      <div
        className="cursor-glow"
        style={{ left: `${mouse.x}px`, top: `${mouse.y}px` }}
      />

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <div
            className="navbar-brand"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("hero")}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("hero")}
          >
            <div className="brand-icon">DK</div>
            <span>Dhananjay</span>
          </div>

          <div className="navbar-links">
            {["about", "skills", "projects", "experience", "contact"].map(
              (id) => (
                <button
                  key={id}
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  onClick={() => scrollToSection(id)}
                >
                  {id}
                </button>
              )
            )}
          </div>

          <a
            href={DATA.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-resume"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-bg">
          <div className="hero-grid-pattern" />
          <div className="hero-gradient-orb orb-1" />
          <div className="hero-gradient-orb orb-2" />
          <div className="hero-gradient-orb orb-3" />
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="pulse-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{DATA.name}</span>
            </h1>

            <div className="hero-role">
              <span>{DATA.role}</span>
              <div className="role-divider" />
              <div className="specialties">
                {DATA.specialties.map((spec) => (
                  <span key={spec} className="specialty-tag">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <p className="hero-description">{DATA.summary}</p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("contact")}
              >
                <span>Let's Talk</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("projects")}
              >
                View Work
              </button>
            </div>

            <div className="hero-stats">
              {DATA.stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="window-title">backend-api.java</div>
              </div>

              <div className="window-content">
                <pre>
                  <code>
                    <span className="code-comment">
                      // Building scalable solutions
                    </span>
                    {"\n"}
                    <span className="code-keyword">@RestController</span>
                    {"\n"}
                    <span className="code-keyword">public class</span>{" "}
                    <span className="code-class">ApiController</span> {"{"}
                    {"\n  "}
                    <span className="code-keyword">@GetMapping</span>(
                    <span className="code-string">"/api/v1"</span>)
                    {"\n  "}
                    <span className="code-keyword">public</span> Response getData()
                    {" {"}
                    {"\n    "}
                    <span className="code-keyword">return</span>{" "}
                    <span className="code-keyword">new</span> Response();
                    {"\n  }"}
                    {"\n}"}
                  </code>
                </pre>
              </div>
            </div>

            <div className="floating-elements">
              <div className="float-card card-1">
                <div className="card-icon">☁️</div>
                <div className="card-text">AWS</div>
              </div>
              <div className="float-card card-2">
                <div className="card-icon">🐳</div>
                <div className="card-text">Docker</div>
              </div>
              <div className="float-card card-3">
                <div className="card-icon">🍃</div>
                <div className="card-text">Spring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Building Robust Backend Systems</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="card-number"></div>
              <h3>Who I Am</h3>
              <p>
                Java Backend Developer experienced in building scalable
                applications using Spring Boot, REST APIs, and MySQL. I combine
                backend development with DevOps practices like Docker, Linux,
                and CI/CD.
              </p>
            </div>

            <div className="about-card">
              <div className="card-number"></div>
              <h3>What I Do</h3>
              <ul className="feature-list">
                <li>Design scalable REST APIs with Spring Boot</li>
                <li>Implement full-stack features for complex platforms</li>
                <li>Containerize applications using Docker</li>
                <li>Explore AWS and cloud-native DevOps</li>
              </ul>
            </div>

            <div className="about-card">
              <div className="card-number"></div>
              <h3>My Approach</h3>
              <p>
                I focus on clean architecture, input validation, centralized
                error handling, and optimized database operations. Always
                learning, always improving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">Technologies I Work With</h2>
          </div>

          <div className="skills-grid">
            {Object.entries(DATA.skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <div className="skill-header">
                  <div className="skill-icon">
                    {category === "Backend" && "⚙️"}
                    {category === "Frontend" && "🎨"}
                    {category === "Database" && "💾"}
                    {category === "DevOps" && "🚀"}
                    {category === "Tools" && "🛠️"}
                  </div>
                  <h3>{category}</h3>
                </div>

                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {DATA.projects.map((p, idx) => (
              <article key={p.title} className="project-card">
                <div className="project-number">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="project-icon">{p.icon}</div>

                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <div className="project-stack">
                    {p.stack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    href={p.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Code
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Journey</div>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="timeline">
            {DATA.experience.map((exp) => (
              <div key={exp.role} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                    <div className="period">{exp.period}</div>
                  </div>

                  <ul className="timeline-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-content">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Let's Work Together</h2>
              <p className="contact-description">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="contact-methods">
                <a href={`mailto:${DATA.email}`} className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <div className="method-label">Email</div>
                    <div className="method-value">{DATA.email}</div>
                  </div>
                </a>

                <a href={`tel:${DATA.phone}`} className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-content">
                    <div className="method-label">Phone</div>
                    <div className="method-value">{DATA.phone}</div>
                  </div>
                </a>
              </div>

              <div className="social-links">
                <a
                  href={DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                <a
                  href={DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right side card */}
            <div className="contact-visual">
              <div className="contact-card">
                <div className="card-glow" />
                <div className="card-inner">
                  <div className="contact-avatar">DK</div>
                  <h4>{DATA.name}</h4>
                  <p>{DATA.role}</p>

                  <div className="location">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 1.5C5.51472 1.5 3.5 3.51472 3.5 6C3.5 9 8 14.5 8 14.5C8 14.5 12.5 9 12.5 6C12.5 3.51472 10.4853 1.5 8 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="8"
                        cy="6"
                        r="1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    {DATA.location}
                  </div>

                  {/* ✅ SEND BUTTON opens email to you */}
                  <a
                    className="btn btn-primary btn-full"
                    href={mailtoHref}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Send Message
                  </a>
                </div>
              </div>
            </div>
            {/* End right side card */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-brand">
                <div className="brand-icon">DK</div>
                <span>{DATA.name}</span>
              </div>
              <p>Building scalable backend solutions with modern technologies.</p>
            </div>

            <div className="footer-right">
              <div className="footer-links">
                <a href={DATA.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={`mailto:${DATA.email}`}>Email</a>
              </div>

              <div className="footer-copyright">
                © {new Date().getFullYear()} {DATA.name}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
