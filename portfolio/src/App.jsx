import React, { useMemo } from "react";
import "./App.css";

/**
 * Update only this DATA object with your real details.
 */
const DATA = {
  name: "Dhananjay Kadam",
  role: "Java Backend Developer | Spring Boot | AWS | DevOps",
  location: "Pune, India",
  email: "dhananjaykadam1260@gmail.com",
  phone: "+91-8767348231",
  github: "https://github.com/dhananjaykadam1260-cell",
  linkedin: "https://linkedin.com/in/dhananjay-kadam-951511373",
  resumeUrl:
    "https://drive.google.com/file/d/1tqU-pg4gpXKizBEJ5uzgvejOiQIYjyzi/view?usp=sharing",

  summary:
    "Java Backend Developer experienced in building scalable applications using Spring Boot, REST APIs, and MySQL. I combine backend development with DevOps practices like Docker, Linux, and CI/CD, and I’m actively expanding my skills in AWS to create efficient, cloud-native solutions.",

  skills: {
    Backend: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "REST APIs"],
    Frontend: ["React", "Vite", "HTML", "CSS", "Bootstrap"],
    Database: ["MySQL", "PostgreSQL"],
    DevOps: ["Git", "Docker", "CI/CD", "Linux"],
    Tools: ["Postman", "VS Code", "IntelliJ", "Eclipse"],
  },

  // ✅ Live button removed, so only "code" link is used
  projects: [
    {
      title: "E-Commerce Backend API",
      desc: "REST API for products, cart, and orders with validations, layered architecture, and exception handling.",
      stack: ["Spring Boot", "MySQL", "JWT (optional)"],
      links: { code: "https://github.com/dhananjaykadam1260-cell" },
    },
    {
      title: "Gym Management System",
      desc: "Member registration, fees tracking, plans, attendance, and admin modules.",
      stack: ["Spring Boot", "Thymeleaf", "MySQL"],
      links: { code: "https://github.com/dhananjaykadam1260-cell" },
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio with clean sections, projects, and direct contact links.",
      stack: ["React", "Vite"],
      links: { code: "https://github.com/dhananjaykadam1260-cell" },
    },
  ],

  experience: [
    {
      company: "Project / Internship Experience",
      role: "Backend Developer (Project-based)",
      period: "2024 — 2026",
      points: [
      "Designed and implemented scalable REST APIs using Spring Boot following clean architecture principles.",
      "Enhanced backend reliability by implementing centralized exception handling and request validation.",
      "Built database-driven modules using MySQL, JPA, and Hibernate with optimized CRUD operations.",
      "Dockerized applications and explored CI/CD practices for automated build and deployment pipelines."
      ],
    },
  ],
};

const cx = (...c) => c.filter(Boolean).join(" ");

function Container({ children, className }) {
  return <div className={cx("container", className)}>{children}</div>;
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Button({ href, children, variant = "primary", target }) {
  const cls = cx(
    "btn",
    variant === "ghost" && "btn-ghost",
    variant === "primary" && "btn-primary"
  );

  if (href) {
    return (
      <a className={cls} href={href} target={target} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={cls} type="button">
      {children}
    </button>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <Container>
        <div className="section-head">
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

function Nav() {
  const links = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <Container className="nav-inner">
        <div
          className="brand"
          onClick={() => scrollTo("top")}
          role="button"
          tabIndex={0}
        >
          <span className="logo">DK</span>
          <span className="brand-text">Portfolio</span>
        </div>

        <nav className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className="nav-link"
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <Button href={DATA.resumeUrl} variant="ghost" target="_blank">
            Resume
          </Button>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <Container className="hero-grid">
        <div>
          <p className="kicker">Hi, I’m</p>
          <h1>{DATA.name}</h1>
          <p className="lead">{DATA.role}</p>

          <div className="meta">
            <span className="dot" />
            <span className="muted">{DATA.location}</span>
          </div>

          <p className="summary">{DATA.summary}</p>

          <div className="hero-actions">
            <Button href={`mailto:${DATA.email}`} variant="primary">
              Contact Me
            </Button>
            <Button href={DATA.github} variant="ghost" target="_blank">
              GitHub
            </Button>
            <Button href={DATA.linkedin} variant="ghost" target="_blank">
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <h3>Core Expertise</h3>
            <ul className="checks">
              <li>Develop scalable backend services with Spring Boot and REST APIs</li>
              <li>Implement secure database integration with validation and clean architecture</li>
              <li>Dockerize applications and explore cloud deployment using AWS</li>
              <li>Create modern UI dashboards with React and responsive design</li>
            </ul>

            <div className="divider" />

            <div className="quick">
              <div>
                <p className="muted small">Email</p>
                <p className="mono">{DATA.email}</p>
              </div>
              <div>
                <p className="muted small">Phone</p>
                <p className="mono">{DATA.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About" subtitle="">
      <div className="grid-2">
        <div className="card">
          <h3>Summary</h3>
          <p className="muted">
            Java Backend Developer experienced in building scalable applications
            using Spring Boot, REST APIs, and MySQL. I combine backend development
            with DevOps practices like Docker, Linux, and CI/CD, and I’m actively
            expanding my skills in AWS to create efficient, cloud-native
            solutions.
          </p>
        </div>

        <div className="card">
          <h3>Highlights</h3>
          <ul className="bullets">
            <li>
              Designed scalable REST APIs with Spring Boot, input validation, and
              centralized error handling
            </li>
            <li>
              Implemented full-stack features for Ecommerce and Gym Management
              platforms using modern development practices
            </li>
            <li>
              Containerized applications using Docker and managed code using Git
              workflows
            </li>
            <li>
              Actively learning AWS, CI/CD pipelines, and cloud-native DevOps
              methodologies
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tech I use to build and ship projects">
      <div className="grid-3">
        {Object.entries(DATA.skills).map(([group, items]) => (
          <div className="card" key={group}>
            <h3>{group}</h3>
            <div className="badges">
              {items.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Best projects (quality > quantity)">
      <div className="grid-3">
        {DATA.projects.map((p) => (
          <article className="card project" key={p.title}>
            <div className="project-top">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
            </div>

            <div className="badges">
              {p.stack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {/* ✅ Live button removed */}
            <div className="project-actions">
              <Button href={p.links.code} variant="ghost" target="_blank">
                Code
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="">
      <div className="stack">
        {DATA.experience.map((e) => (
          <div className="card" key={e.company + e.role}>
            <div className="row">
              <div>
                <h3>{e.role}</h3>
                <p className="muted">{e.company}</p>
              </div>
              <p className="mono muted">{e.period}</p>
            </div>

            <ul className="bullets">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s connect">
      <div className="card">
        <h3>Reach me</h3>
        <p className="muted">Fastest reply on email or LinkedIn.</p>

        <div className="contact-list">
          <a href={`mailto:${DATA.email}`} className="contact-item">
            <span className="mono">{DATA.email}</span>
            <span className="muted">↗</span>
          </a>

          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="mono">LinkedIn</span>
            <span className="muted">↗</span>
          </a>

          <a
            href={DATA.github}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="mono">GitHub</span>
            <span className="muted">↗</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-inner">
        <p className="muted small">
          © {new Date().getFullYear()} {DATA.name}. Built with React + Vite.
        </p>
        <div className="footer-links">
          <a href={DATA.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${DATA.email}`}>Email</a>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
