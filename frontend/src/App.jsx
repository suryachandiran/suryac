import './App.css'

function LinkedInIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452H17.21V14.86c0-1.333-.024-3.046-1.857-3.046-1.86 0-2.144 1.452-2.144 2.952v5.686H9.073V9h3.106v1.561h.043c.433-.82 1.49-1.685 3.065-1.685 3.279 0 3.883 2.159 3.883 4.968v6.608zM5.337 7.433a1.804 1.804 0 110-3.609 1.804 1.804 0 010 3.609zM6.995 20.452H3.677V9h3.318v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.06.67-3.71-1.29-3.71-1.29-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.14 1.68 1.14.98 1.68 2.56 1.2 3.18.92.1-.71.38-1.2.68-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.41.11-2.95 0 0 .92-.29 3.01 1.12a10.47 10.47 0 0 1 5.48 0c2.09-1.41 3.01-1.12 3.01-1.12.6 1.54.22 2.67.11 2.95.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.14-5.02 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.51-5.57 7.51-10.43C23.01 5.24 18.27.5 12 .5Z" clipRule="evenodd"/>
    </svg>
  )
}

function LeetCodeIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#grad)" {...props}>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FFA116', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M17.85 20.94a1.5 1.5 0 0 1-1.41-1.04l-6.56-6.34 6.49-6.26a1.5 1.5 0 1 1 2.12 2.12l-4.41 4.27 4.47 4.32a1.5 1.5 0 0 1-1.06 2.57z" />
      <path d="M11.57 22.24a8.97 8.97 0 0 1-6.31-15.33l3.45-3.39a1.5 1.5 0 1 1 2.12 2.13L7.38 8.1a5.97 5.97 0 1 0 8.42 8.44l1.52 1.46a8.94 8.94 0 0 1-5.75 2.24z" />
    </svg>
  )
}

const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/suryachandiran',
  github: 'https://github.com/suryachandiran/suryac',
  leetcode: 'https://leetcode.com/u/k22cse150/',
}

function App() {
  return (
    <>
      <header className="nav">
        <a href="#" className="brand">Surya C</a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="btn" href="https://drive.google.com/file/d/1wqEjzH8XxXKAhQGML1CvA5KzK2xMdcBi/view" target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </header>

      <main>
        {/* 🏠 HOME Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Hey, I'm <span className="highlight">Surya</span> 👋</h1>
            <p className="about-text">
              A passionate <strong>Frontend Developer</strong> who loves transforming creative ideas into sleek, interactive, and high-performance web apps.  
              I focus on crafting pixel-perfect interfaces, optimizing performance, and delivering clean, scalable code.  
              <br /><br />
            </p>
            <ul className="socials">
              <li><a className="social" href={SOCIALS.linkedin}><LinkedInIcon /></a></li>
              <li><a className="social" href={SOCIALS.github}><GitHubIcon /></a></li>
              <li><a className="social" href={SOCIALS.leetcode}><LeetCodeIcon /></a></li>
            </ul>
          </div>
        </section>

        {/* 👨‍💻 ABOUT Section */}
        <section id="about" className="section about">
          <h2>About Me</h2>
          <p>
            I’m a Computer Science Engineer with a strong passion for building clean, intuitive, and efficient web interfaces.
            I enjoy designing engaging user experiences and turning complex ideas into simple, usable applications.
          </p>

          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
              <li>Figma</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <p>✅ Google UX Design Professional Certificate (7 Courses) — Coursera</p>
          </div>
        </section>

        {/* 💻 PROJECTS Section */}
        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="grid">
            <article className="card">
              <h3>Online Learning App</h3>
              <p>Personalized courses, interactive quizzes, and certifications with a responsive React UI.</p>
              <div className="card-actions">
                <a href="#" className="link">View</a>
                <a href="#" className="link">Code</a>
              </div>
            </article>
            <article className="card">
              <h3>Travel Booking App</h3>
              <p>Explore destinations, compare packages, and book easily — all in one seamless platform.</p>
              <div className="card-actions">
                <a href="#" className="link">View</a>
                <a href="#" className="link">Code</a>
              </div>
            </article>
            <article className="card">
              <h3>Food Delivery App</h3>
              <p>Modern UI for restaurant browsing, order tracking, and live delivery updates.</p>
              <div className="card-actions">
                <a href="#" className="link">View</a>
                <a href="#" className="link">Code</a>
              </div>
            </article>
            <article className="card">
              <h3>Dog Walking App</h3>
              <p>
                A user-friendly app connecting dog owners with trusted walkers.  
                Features include walk scheduling, GPS tracking, verified walkers, and secure in-app payments.
              </p>
              <div className="card-actions">
                <a href="#" className="link">View</a>
                <a href="#" className="link">Code</a>
              </div>
            </article>
          </div>
        </section>

        {/* ✉️ CONTACT */}
        <section id="contact" className="section contact">
          <h2>Get In Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name..." />
            <input type="email" placeholder="example@gmail.com" />
            <textarea placeholder="Your Message..." rows="5"></textarea>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Surya C. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
