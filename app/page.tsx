"use client";

import FoxLogo from "./components/FoxLogo";

import { useEffect } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

type LogoKey = "fox";

type Project = {
  personal?: boolean;
  emoji: string;
  tags: string[];
  title: string;
  desc: string;
  github?: string;
  repoLink: boolean;
  demo: string;
  demoLabel: string;
  university: boolean;
  logo?: LogoKey;
};

const projects: Project[] = [
  {
    personal: true,
    logo: "fox",
    emoji: "◉",
    tags: ["Next.js", "Laravel", "PHP"],
    title: "Coco Sato's Artist Portfolio",
    desc: "Personal portfolio built with Next.js, featuring a custom CMS backend in Laravel for easy content updates and project management. Used AWS for Simple Email Service to handle contact form submissions.",
    demo: "https://cocosato.co.uk/",
    repoLink: false,
    demoLabel: "Live",
    university: false,
  },
  {
    personal: true,
    emoji: "★",
    tags: ["Wordpress", "SQL", "PHP"],
    title: "Katie Paterson Artist Portfolio",
    desc: "Maintained and enhanced an existing Wordpress portfolio site for artist Katie Paterson, implementing custom themes and plugins to showcase her work effectively. Integrated SQL database optimizations to improve site performance and manage content efficiently.",
    demo: "https://katiepaterson.org/",
    repoLink: false,
    demoLabel: "Live",
    university: false,
  },
  {
    emoji: "∑",
    tags: ["University", "Research Project", "Python", "Arduino", "Teensy"],
    title: "Final Year Research Project",
    desc: "An experimental dissertation project exploring gesture-based musical interaction. This system uses a custom-built MIDI controller to translate human movement and tactile input into real-time sound manipulation, bridging physical performance with digital audio environments and enabling intuitive, expressive control for live and studio contexts.",
    github: "https://github.com/Cosmo19/Teensy-MIDI",
    repoLink: true,
    demo: "",
    demoLabel: "",
    university: true,
  },
  {
    emoji: "#",
    tags: ["University", "Project", "Android App", "Jetpack Compose", "Mapbox API", "Group Project"],
    title: "Raindar: Map-enabled Mobile Weather App",
    desc: "Designed and developed an Android weather application using Jetpack Compose, integrating OpenWeatherMap API for real-time data and utilising Mapbox API.",
    github: "https://github.com/jackgpalfrey/uni-ma-project",
    repoLink: true,
    demo: "",
    demoLabel: "",
    university: true,
  },
  {
    emoji: "\\",
    tags: ["University", "Project", "ML", "Python Tkinter", "Group Project"],
    title: "Feeding Dashboard: ML-powered Dietary Management App",
    desc: "A healthcare dashboard application was developed to support dietitian referrals in critical care using machine learning. It improves data analysis, decision-making, and efficiency. The system uses Random Forest for predictions, offers a user-friendly interface, and meets key requirements, though accuracy and scalability could be further enhanced.",
    github: "",
    repoLink: false,
    demo: "/downloads/Feeding_Dashboard_Project_Report.pdf",
    demoLabel: "Report",
    university: true,
  },
];

const logoComponents: Record<LogoKey, React.ComponentType<{ className?: string; speed?: number }>> = {
  fox: FoxLogo
};

type SkillCategory = {
  category: string;
  items: { name: string; icon: string }[];
};

export const skillIcons: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      { name: "Java", icon: "java" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Django REST", icon: "djangorest" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Vercel", icon: "vercel" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    category: "Embedded Systems",
    items: [
      { name: "Arduino", icon: "arduino" },
      { name: "Raspberry Pi", icon: "raspberrypi" },
      { name: "Embedded C", icon: "embeddedc" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Jira", icon: "jira" },
      { name: "Jupyter Notebook", icon: "jupyter" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "TEX", icon: "tex" },
    ],
  },
];

const contactLinks = [
  {
    href: "mailto:cosmo.elford@gmail.com",
    label: "email",
    value: "cosmo.elford@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
      </svg>
    ),
  },
  {
    href: "https://github.com/cosmo19",
    label: "github",
    value: "cosmo19",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/cosmo-elford",
    label: "linkedin",
    value: "cosmo-elford",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  }
];

// ── Hook ─────────────────────────────────────────────────────────────────────

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Tag({ children, university = false }: { children: string; university?: boolean }) {
  return (
    <span
      className="font-mono text-[0.65rem] px-2 py-0.5 rounded-md border inline-block"
      style={{
        background: university ? "rgba(123,94,167,0.1)" : "rgba(0,255,195,0.07)",
        color: university ? "#b39ddb" : "#00ffc3",
        borderColor: university ? "rgba(123,94,167,0.25)" : "rgba(0,255,195,0.2)",
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="anim mb-10">
      <p className="font-mono text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: "#6ee7c7" }}>{num}</p>
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-extrabold" style={{ color: "#e8e8f0" }}>{title}</h2>
        <div style={{ width: 32, height: 2, background: "#00ffc3", borderRadius: 99 }} />
      </div>
    </div>
  );
}

function ProjectCard({ p, delay }: { p: typeof projects[0]; delay: string }) {
  const Logo = p.logo ? logoComponents[p.logo] : null;

  return (
    <div
      className="anim flex flex-col p-5 rounded-2xl border transition-all duration-300 hover:cursor-pointer backdrop-blur-sm"
      style={{
        transitionDelay: delay,
        background: "rgba(255,255,255,0.03)",
        borderColor: p.university ? "rgba(123,94,167,0.2)" : "rgba(255,255,255,0.08)",
      }}
    >
      {p.emoji === "★" ? (
        <div className="flex mb-4">
          <span className="w-12 h-12 flex items-center justify-center text-6xl leading-none text-yellow-400">
            ★
          </span>
        </div>
      ) : Logo ? (
        <div className="flex mb-4">
          <Logo className="w-12 h-12" speed={2000} />
        </div>
      ) : (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-4"
          style={{
            background: "rgba(0,255,195,0.08)",
            border: "1px solid rgba(0,255,195,0.15)",
          }}
        >
          <span className="text-xl leading-none">
            {p.emoji}
          </span>
        </div>
      )}
      <div className="flex gap-1.5 flex-wrap mb-3">
        {p.tags.map((t) => <Tag key={t} university={p.university}>{t}</Tag>)}
      </div>
      <h3 className="text-base font-medium mb-2" style={{ color: "#e8e8f0" }}>{p.title}</h3>
      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#8888aa" }}>{p.desc}</p>
      <div className="flex gap-4 mt-auto">
        {p.repoLink && (
          <a href={p.github} target="_blank" className="font-mono text-xs transition-colors hover:opacity-70" style={{ color: p.university ? "#b39ddb" : "#00ffc3" }}>
            → GitHub
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" className="font-mono text-xs transition-colors hover:opacity-70" style={{ color: "#6a6a8a" }}>
            → {p.demoLabel}
          </a>
        )}
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  useScrollAnimation();

  return (
    <>
      <style>{`
        :root { --accent: #00ffc3; }
        body {
          background-color: #10101a;
          color: #c8c8e0;
          font-family: var(--font-syne), sans-serif;
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(0,255,195,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,195,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .anim { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .anim.visible { opacity: 1; transform: translateY(0); }
        .font-mono { font-family: var(--font-space-mono), monospace; }
        .nav-link { font-family: var(--font-space-mono), monospace; font-size: 0.72rem; color: #5a5a7a; transition: color 0.2s; }
        .nav-link:hover { color: #00ffc3; }
        .skill-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 1.25rem; }
        .contact-item { backdrop-filter: blur(6px); display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; text-decoration: none; color: #c8c8e0; transition: border-color 0.2s, background 0.2s; }
        .contact-item:hover { border-color: rgba(0,255,195,0.25); background: rgba(0,255,195,0.04); }
        .devicon { width: 32px; height: 32px; }
      `}</style>

      {/* Load devicons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="grid-bg min-h-screen">

        {/* ── Nav ── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
          style={{ background: "rgba(16,16,26,0.85)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="font-mono text-sm font-bold" style={{ color: "#00ffc3" }}></span>
          <div className="flex gap-8">
            {["about", "projects", "skills", "contact"].map((s, i) => (
              <a key={s} href={`#${s}`} className="nav-link">{s}</a>
            ))}
          </div>
        </nav>

        {/* ── Hero ── */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-8 max-w-5xl mx-auto pt-24">
          <div className="anim" style={{ transitionDelay: "0.05s" }}>
            <p className="font-mono text-[0.65rem] tracking-widest uppercase mb-5" style={{ color: "#6ee7c7" }}>// hello, world</p>
            <h1 className="text-6xl font-extrabold leading-tight mb-3" style={{ color: "#f0f0fa", letterSpacing: "-0.03em" }}>
              Cosmo Elford
            </h1>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "#5a5a7a" }}>
              Junior Software Engineer
            </h2>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: "#9090b0" }}>
              <span style={{ color: "pink" }}>First-class</span> Computer Science graduate.
              <br />
              Studied @ <span style={{ color: "#c8c8e0" }}>University of the West of England</span>
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#00ffc3", color: "#0a0a12" }}
              >
                View my work ↓
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#c8c8e0" }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-24 px-8 max-w-5xl mx-auto">
          {projects.some(p => p.personal) && (
            <>
              <SectionLabel num="02 / selected commercial projects" title="Commercial" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                {projects.filter(p => p.personal).map((p, i) => (
                  <ProjectCard key={p.title} p={p} delay={`${0.08 * i}s`} />
                ))}
              </div>
            </>
          )}

          <SectionLabel num="02a / selected university projects & research" title="University" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.filter(p => !p.personal).map((p, i) => (
              <ProjectCard key={p.title} p={p} delay={`${0.08 * i}s`} />
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-24 px-8 max-w-5xl mx-auto">
          <SectionLabel num="03 / selected skills" title="Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {skillIcons.map((group, idx) => (
              <div
                key={group.category}
                className="anim skill-card backdrop-blur-sm p-6 rounded-2xl"
                style={{ transitionDelay: `${0.05 * (idx + 1)}s` }}
              >
                {/* Category Title */}
                <p
                  className="font-mono text-[0.65rem] tracking-widest uppercase mb-5"
                  style={{ color: "#6ee7c7" }}
                >
                  {group.category}
                </p>

                {/* Icons */}
                <div className="grid grid-cols-4 gap-4">
                  {group.items.map(({ name, icon }) => (
                    <div key={name} className="flex flex-col items-center gap-2 group">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "2px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <i className={`devicon-${icon}-plain text-3xl`} />
                      </div>

                      <span
                        className="font-mono text-[0.7rem] text-center"
                        style={{ color: "white" }}
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24 pb-32 px-8 max-w-5xl mx-auto">
          <SectionLabel num="04 / contact" title="Get In Touch" />
          <p className="mb-10 text-base max-w-md" style={{ color: "#8888aa" }}>
            Open to internships, research collaborations, and interesting projects. Drop me a message.
          </p>
          <div className="anim grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg" style={{ transitionDelay: "0.1s" }}>
            {contactLinks.map(({ href, label, value, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div
                  className="w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(0,255,195,0.08)", border: "1px solid rgba(0,255,195,0.15)", color: "#00ffc3" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] mb-0.5" style={{ color: "#5a5a7a" }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: "#d0d0e8" }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer
          className="text-center py-8 font-mono text-xs"
          style={{ color: "white" }}
        >
          © 2026 Cosmo Elford
        </footer>

      </div>
    </>
  );
}
