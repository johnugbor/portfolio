import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Braces, Check,
  Code2, Linkedin, Mail, Menu, MoveUpRight, X, Zap
} from 'lucide-react'

type Project = {
  number: string
  name: string
  category: string
  description: string
  contribution: string
  stack: string[]
  status: string
  url?: string
  visual: string
  featured?: boolean
}

const projects: Project[] = [
  {
    number: '01', name: 'Autoby24', category: 'AUTOMOTIVE · MARKETPLACE',
    description: 'A vehicle marketplace connecting private sellers and dealers, supported by a multi-role platform and a growing set of automotive services.',
    contribution: 'Backend engineering and technical leadership. Led a team of developers and worked across APIs, data models, integrations, payments, and deployment workflows.',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'AWS'],
    status: 'LIVE PRODUCT', url: 'https://www.autoby24.ch', visual: 'autoby', featured: true,
  },
  {
    number: '02', name: 'OpenSpiderz', category: 'AI · WORKFLOW AUTOMATION',
    description: 'A visual workflow automation concept connecting everyday business tools and services into repeatable automated processes.',
    contribution: 'Built a working prototype with connected workflow nodes and integrations for email, messaging, and webhooks.',
    stack: ['AI Agents', 'Codex', 'GPT', 'Gmail', 'Outlook', 'Slack'],
    status: 'PROTOTYPE', url: 'https://github.com/johnugbor/OpenSpiderz',visual: 'spider',
  },
  {
    number: '03', name: 'Stylescope', category: 'FASHION TECH · GENERATIVE AI',
    description: 'An AI virtual try-on experience exploring how people can preview clothing and fashion looks through image-based AI workflows.',
    contribution: 'Product development across the application architecture, backend services, AI integration, and subscription/credit model.',
    stack: ['Python', 'Django REST', 'Gemini', 'Kotlin', 'RevenueCat'],
    status: 'IN DEVELOPMENT', url: 'https://github.com/johnugbor/stylescope', visual: 'stylescope',
  },
  {
    number: '04', name: 'Brate', category: 'DIGITAL GIFTING · COMMERCE',
    description: 'A digital gifting platform built around sharing meaningful gifts, vouchers, and positive experiences with people and communities.',
    contribution: 'Software product development. The platform direction includes digital gifts, social connection, and simple digital exchange.',
    stack: ['Product Engineering', 'Web Applications', 'Digital Commerce'],
    status: 'LIVE PRODUCT', url: 'https://brate.app', visual: 'brate',
  },

    {
    number: '05', name: 'Solala', category: 'CLIMATE TECH · AI',
    description: 'Solar assessment and proposal software designed to help installers evaluate properties, estimate system requirements, and prepare customer proposals remotely.',
    contribution: 'Founder and product engineer. Built the product concept and MVP, including solar potential assessment, load calculations, system sizing, and proposal workflows.',
    stack: ['React', 'Python', 'Django', 'Google Solar API', 'AI'],
    status: 'MVP',
    visual: 'solala',url: 'https://solalaenergy.com/', featured: true,
  },
  {
    number: '06', name: 'AutoAlly', category: 'AUTOMOTIVE · CONVERSATIONAL AI',
    description: 'An AI-assisted automotive diagnostics experience that brings OBD-II vehicle information into a conversational interface.',
    contribution: 'Built an Android application and Python backend, integrating Gemini for chat and voice-based vehicle troubleshooting.',
    stack: ['Android', 'Python', 'Gemini 2.0 Flash', 'OBD-II'],
    status: 'PROJECT',url:'https://github.com/johnugbor/AutoAlly', visual: 'autoally',
  },
  {
    number: '07', name: 'SignBridge Live', category: 'ACCESSIBILITY · MULTIMODAL AI',
    description: 'A communication concept exploring real-time interaction between spoken language and sign language.',
    contribution: 'Built for the Gemini Live Agent Challenge, using Gemini Live API to explore speech and sign-language communication.',
    stack: ['Gemini Live API', 'AI', 'Real-time Interaction'],
    status: 'HACKATHON PROJECT', visual: 'signbridge', url: 'https://github.com/johnugbor/SignBridge',
  }

]

const skills = [
  { title: 'Backend engineering', items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Redis'] },
  { title: 'Frontend & product', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Responsive UI', 'Product architecture'] },
  { title: 'AI & automation', items: ['OpenAI APIs', 'Google Gemini', 'AI agents', 'LLM integrations', 'Workflow automation', 'Prompt engineering'] },
  { title: 'Cloud & delivery', items: ['AWS', 'DigitalOcean', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Linux'] },
]

const experience = [
  {
    role: 'Backend Developer & Technical Lead',
    company: 'Autoby24 GmbH',
    place: 'Zurich, Switzerland · Remote',
    period: 'Professional experience',
    detail: 'Technical leadership and backend development for an automotive marketplace. Worked on API architecture, integrations, platform capabilities, and coordinating a team of engineers.',
  },
  {
    role: 'Software Engineer',
    company: 'Freelance · International clients',
    place: 'Remote',
    period: 'Professional experience',
    detail: 'Built backend services and business automation, including GPT-powered job posting and search workflows, messaging integrations, and payment-related functionality.',
  },
  {
    role: 'Software Engineering',
    company: 'Vatorcodes & other teams',
    place: 'Product and client work',
    period: 'Professional experience',
    detail: 'Contributed to software products and business systems. At Vatorcodes, work included improvements associated with a reported 53% reduction in support tickets.',
  },
]

function ProjectVisual({ type }: { type: string }) {
  const labels: Record<string, string> = {
    autoby: 'AUTOBY / VEHICLE MARKETPLACE',
    solala: 'SOLALA / SOLAR INTELLIGENCE',
    stylescope: 'STYLESCOPE / VIRTUAL TRY-ON',
    brate: 'BRATE / DIGITAL GIFTING',
    spider: 'OPENSPIDERZ / WORKFLOW STUDIO',
    autoally: 'AUTOALLY / VEHICLE AI',
    signbridge: 'SIGNBRIDGE / LIVE ACCESS',
    'solar-ai': 'SOLARSCOPE / ENERGY ANALYTICS',
  }
  return (
    <div className={`project-visual visual-${type}`}>
      <div className="visual-top"><span className="visual-dot" /><span className="visual-dot" /><span className="visual-dot" /><span className="visual-label">{labels[type]}</span></div>
      {type === 'autoby' && <div className="car-scene"><div className="car-glow" /><div className="car-shape"><i /><b /></div><div className="visual-caption">Find your next drive<span>Explore vehicles <ArrowUpRight size={12} /></span></div></div>}
      {type === 'solala' && <div className="solar-scene"><div className="sun" /><div className="roof"><div className="panel-grid">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div></div><div className="solar-stat"><small>EST. ANNUAL OUTPUT</small><strong>8,420 <em>kWh</em></strong><span>↑ Solar potential mapped</span></div></div>}
      {type === 'stylescope' && <div className="fashion-scene"><div className="fashion-card card-a"><span>YOUR PHOTO</span><div className="person-shape" /></div><div className="fashion-arrow"><ArrowRight /></div><div className="fashion-card card-b"><span>AI TRY-ON</span><div className="person-shape outfit" /></div></div>}
      {type === 'brate' && <div className="gift-scene"><div className="gift-orbit orbit-a" /><div className="gift-orbit orbit-b" /><div className="gift-box"><div className="gift-ribbon" /><div className="gift-bow">✳</div></div><span className="gift-note note-a">A little joy, sent</span><span className="gift-note note-b">for someone special</span></div>}
      {type === 'spider' && <div className="nodes-scene"><div className="node node-one"><Mail size={17} /> Gmail</div><div className="node node-two"><Zap size={17} /> Trigger</div><div className="node node-three"><Code2 size={17} /> Webhook</div><svg viewBox="0 0 360 170"><path d="M90 75 C130 75 120 125 165 125 S220 65 270 65" /><path d="M90 75 C135 75 125 35 165 35 S225 65 270 65" /></svg><div className="nodes-status">WORKFLOW ACTIVE <span /></div></div>}
      {type === 'autoally' && <div className="chat-scene"><div className="chat-bubble user-bubble">Why is my check engine light on?</div><div className="chat-bubble ai-bubble">Let's read your OBD-II codes and narrow it down.</div><div className="diagnostic"><span>DIAGNOSTIC SCAN</span><strong>P0301</strong><small>Misfire detected · Cylinder 1</small></div></div>}
      {type === 'signbridge' && <div className="sign-scene"><div className="sound-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="sign-hand">✋</div><div className="sign-caption">Communication without barriers.</div><div className="live-pill"><span /> LIVE SESSION</div></div>}
      {type === 'solar-ai' && <div className="analytics-scene"><div className="analytics-number"><small>SOLAR PERFORMANCE</small><strong>+24.8%</strong><span>Performance insight</span></div><div className="chart-bars">{[30, 48, 39, 65, 54, 80, 68, 96, 75, 100, 88, 115].map((h, i) => <i key={i} style={{ height: `${h}px` }} />)}</div><div className="chart-axis"><span>JAN</span><span>JUN</span><span>DEC</span></div></div>}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article className={`project-card ${project.featured ? 'featured' : ''}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}>
      <a className="project-cover" href={project.url || '#contact'} target={project.url ? '_blank' : undefined} rel="noreferrer" aria-label={`View ${project.name}`}>
        <ProjectVisual type={project.visual} />
        <span className="cover-open"><ArrowUpRight size={17} /></span>
      </a>
      <div className="project-info">
        <div className="project-meta"><span>{project.number} / 08</span><span className="project-status">{project.status}</span></div>
        <div className="project-heading"><div><p className="eyebrow">{project.category}</p><h3>{project.name}</h3></div>{project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Visit <ArrowUpRight size={14} /></a>}</div>
        <p className="project-description">{project.description}</p>
        <details className="contribution"><summary>My contribution <span>＋</span></summary><p>{project.contribution}</p></details>
        <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </motion.article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All work')
  const filters = ['All work', 'AI & automation', 'Platforms', 'Hackathons']
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All work') return true
    if (activeFilter === 'AI & automation') return ['Solala', 'Stylescope', 'OpenSpiderz', 'AutoAlly'].includes(p.name)
    if (activeFilter === 'Platforms') return ['Autoby24', 'Brate'].includes(p.name)
    return ['SignBridge Live', 'SolarScope AI'].includes(p.name)
  })
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">J<span>.</span></span><span>JOHN UGBOR<small>SOFTWARE / PRODUCT / AI</small></span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#expertise" onClick={closeMenu}>Expertise <span>03</span></a>
          <a href="#experience" onClick={closeMenu}>Experience <span>04</span></a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.div className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}><span className="availability-dot" /> ENGINEER / BUILDER / PROBLEM SOLVER</motion.div>
              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>I build software<br />products and <span>intelligent<br className="desktop-break" /> systems.</span></motion.h1>
              <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>I'm John — a software and product engineer working across backend systems, full-stack applications, and applied AI. I turn complex problems into useful products and intelligent workflows.</motion.p>
              <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
                <a href="#work" className="button button-primary">Explore my work <ArrowDownRight size={16} /></a>
                <a href="#contact" className="button button-ghost">Get in touch <ArrowUpRight size={15} /></a>
              </motion.div>
              <div className="hero-socials"><a href="https://www.linkedin.com/in/johnugbor" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={11} /></a><span /><a href="mailto:ugborjohn@gmail.com" target="_blank" rel="noreferrer"><Mail size={15} /> Contact</a></div>
            </div>
            <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .25 }}>
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
              <div className="art-core"><div className="core-inner"><Braces size={54} strokeWidth={1.1} /><span>BUILD / SHIP / ITERATE</span></div></div>
              <div className="floating-chip chip-top"><Code2 size={14} /> ENGINEERING</div>
              <div className="floating-chip chip-bottom"><Asterisk size={15} /> APPLIED AI</div>
              <div className="art-index">01 — 04<br /><span>AREAS OF FOCUS</span></div>
            </motion.div>
          </div>
          <div className="hero-bottom"><span>BASED IN NIGERIA · WORKING GLOBALLY</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span></div>
        </section>

        <section className="metrics-strip">
          <div className="metric"><strong>7<span>+</span></strong><p>YEARS IN SOFTWARE<br />DEVELOPMENT</p></div>
          <div className="metric"><strong>08</strong><p>PRODUCTS &<br />PROJECTS</p></div>
          <div className="metric"><strong>05</strong><p>ENGINEERS LED<br />AT AUTOBY24</p></div>
          <div className="metric metric-award"><strong><Zap size={26} /></strong><p>EMEA HACKATHON<br />REGIONAL WINNER</p></div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><p className="section-kicker">01 / SELECTED WORK</p><h2>Ideas made <span>real.</span></h2></div><p className="section-intro">A selection of products, experiments, and engineering work across marketplaces, AI, automation, and emerging technology.</p></div>
          <div className="filter-row">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
          <div className="projects-grid">{filteredProjects.map((project, i) => <ProjectCard key={project.name} project={project} index={i} />)}</div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div><p className="section-kicker">02 / A LITTLE ABOUT ME</p><h2>Engineering is how I turn <span>possibility into progress.</span></h2></div>
            <div className="about-copy"><p className="about-lead">I enjoy working at the intersection of engineering, product thinking, and practical problem-solving.</p><p>Over the years, I've worked on marketplace platforms, business systems, AI-powered applications, and automation tools. I move comfortably between backend architecture, frontend experiences, third-party integrations, and the product decisions that connect them.</p><p>I'm especially interested in building technology that makes complicated work simpler — whether that's helping a business automate a process, helping an installer design a solar system, or making a digital product easier to use.</p><div className="about-note"><span className="note-symbol">✳</span><span>Think clearly. Build deliberately. Ship useful things.</span></div></div>
          </div>
        </section>

        <section className="expertise-section section-wrap" id="expertise">
          <div className="section-heading"><div><p className="section-kicker">03 / WHAT I BRING</p><h2>Built across <span>the stack.</span></h2></div><p className="section-intro">A practical toolkit for taking products from architecture and implementation through deployment and iteration.</p></div>
          <div className="skills-grid">{skills.map((group, i) => <div className="skill-group" key={group.title}><div className="skill-number">0{i + 1}</div><h3>{group.title}</h3><div className="skill-items">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
          <div className="approach-row"><div><span className="approach-icon"><Braces size={19} /></span><div><strong>Architecture-minded</strong><p>Designing maintainable systems around real product needs.</p></div></div><div><span className="approach-icon"><Zap size={19} /></span><div><strong>AI-practical</strong><p>Applying AI where it improves a workflow or user experience.</p></div></div><div><span className="approach-icon"><Check size={19} /></span><div><strong>End-to-end ownership</strong><p>From problem definition to implementation and delivery.</p></div></div></div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap"><div className="section-heading"><div><p className="section-kicker">04 / EXPERIENCE</p><h2>Work shaped by <span>real problems.</span></h2></div><p className="section-intro">A snapshot of engineering, leadership, and client work. Dates and additional role details can be added as the timeline is finalized.</p></div>
            <div className="timeline">{experience.map((item, i) => <div className="timeline-item" key={item.company}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-main"><div className="timeline-top"><div><h3>{item.role}</h3><p>{item.company} <span>·</span> {item.place}</p></div><small>{item.period}</small></div><p className="timeline-detail">{item.detail}</p></div></div>)}</div>
            <div className="education-note"><span>EDUCATION</span><p>B.Eng. Electronics Engineering <i>—</i> University of Nigeria, Nsukka</p></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card"><div className="contact-glow" /><p className="section-kicker">05 / HAVE SOMETHING IN MIND?</p><h2>Let's build<br /><span>something meaningful.</span></h2><p className="contact-description">I'm interested in software engineering opportunities, product collaborations, and practical AI automation challenges.</p><div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/johnugbor" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a><a className="button button-ghost" href="mailto:ugborjohn@gmail.com" target="_blank" rel="noreferrer">Email<Mail size={15} /></a></div><div className="contact-stamp"><Asterisk size={18} /> OPEN TO GOOD PROBLEMS</div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a href="#home" className="brand footer-brand"><span className="brand-mark">J<span>.</span></span><span>JOHN UGBOR<small>SOFTWARE / PRODUCT / AI</small></span></a><p>Designed with intent. Built with curiosity.</p><div><a href="https://www.linkedin.com/in/johnugbor" target="_blank" rel="noreferrer">LINKEDIN <MoveUpRight size={11} /></a><a href="#home">BACK TO TOP ↑</a></div><small>© {new Date().getFullYear()} JOHN UGBOR</small></footer>
    </div>
  )
}

export default App
