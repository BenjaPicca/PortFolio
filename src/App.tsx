import React, { useEffect } from "react";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  Link as LinkIcon,
  ArrowRight,
  MapPin,
  ExternalLink,
} from "lucide-react";
// ---------- ANIMATIONS HELPERS (scroll-reveal) ----------
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.25 },
});

const staggerParent = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, amount: 0.25 },
};

const itemUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ----------------------------------------------------
// DATOS PERSONALES
// ----------------------------------------------------
const DATA = {
  nombre: "Benjamín Piccagli",
  rol: "Back-End • Estudiante",
  bio: "Alumno de ORT Argentina. Me motiva construir soluciones con impacto social real. Soy curioso y proactivo: aprendo rápido y me adapto a distintos roles en el desarrollo de software.",
  ubicacion: "Buenos Aires, Argentina",
  email: "benjapiccagli@gmail.com",
  redes: {
    github: "https://github.com/BenjaPicca",
    linkedin: "https://www.linkedin.com/in/benjamin-piccagli-094b4b341/",
  },
};

// ----------------------------------------------------
// FONDO HERO (usa /public/hero.jpg)
// ----------------------------------------------------
function BrandBG() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url('/hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

// ----------------------------------------------------
// COMPONENTE PILL
// ----------------------------------------------------
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
      {children}
    </span>
  );
}

// ----------------------------------------------------
// SECCIÓN PROYECTOS (SignAI + LEXI)
// ----------------------------------------------------
function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-10 text-center"
        {...fadeUp(0)}
      >
        Proyectos
      </motion.h2>

      <div className="space-y-20">
        {/* Proyecto 1: SignAI */}
        <motion.div
          className="grid gap-6 md:grid-cols-[1.6fr_1fr] items-start"
          variants={staggerParent}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Imagen / Media */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
            variants={itemUp}
          >
            <motion.img
              src="/signai.png"
              alt="SignAI demo"
              className="w-full h-64 md:h-[360px] object-cover"
              initial={{ scale: 1.03, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
              <Pill>Node.js</Pill>
              <Pill>Express</Pill>
              <Pill>Cloudinary</Pill>
              <Pill>JWT</Pill>
              <Pill>bcrypt.js</Pill>
              <Pill>Chunked Uploads</Pill>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div variants={itemUp}>
            <h3 className="text-xl md:text-2xl font-bold">SignAI</h3>
            <p className="mt-3 text-neutral-300">
              App de inclusión que traduce <strong>Lengua de Señas Argentina</strong> a
              texto y voz, derribando barreras de comunicación entre personas sordas
              y oyentes. Backend escalable, manejo de medios y autenticación segura.
            </p>

            <ul className="mt-4 space-y-2 list-disc pl-5 text-neutral-400">
              <li>API con <strong>Node.js</strong> + <strong>Express</strong>.</li>
              <li>Gestión multimedia con <strong>Cloudinary</strong> y <em>chunked uploads</em>.</li>
              <li>Autenticación con <strong>JWT</strong> y <strong>bcrypt.js</strong>.</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="https://drive.google.com/file/d/1M-tCN38GsVdwTVkZhBh9BGMC4DesxFyR/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition"
              >
                <ExternalLink className="w-4 h-4" /> Ver Demo
              </a>
              <a
                href="https://github.com/BenjaPicca/SignAI_Back-End"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition"
              >
                <Github className="w-4 h-4" /> Ver Repo
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Proyecto 2: LEXI */}
        <motion.div
          className="grid gap-6 md:grid-cols-[1.6fr_1fr] items-start"
          variants={staggerParent}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Imagen / Media */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
            variants={itemUp}
          >
            <motion.img
              src="/lexi.png"
              alt="LEXI demo"
              className="w-full h-64 md:h-[360px] object-cover"
              initial={{ scale: 1.03, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
              <Pill>C#</Pill>
              <Pill>Figma</Pill>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div variants={itemUp}>
            <h3 className="text-xl md:text-2xl font-bold">LEXI</h3>
            <p className="mt-3 text-neutral-300">
              <strong>LEXI</strong> es una app educativa que estimula el aprendizaje en chicos con
              <strong> dislexia</strong> mediante juegos interactivos y seguimiento de avances.
            </p>

            <ul className="mt-4 space-y-2 list-disc pl-5 text-neutral-400">
              <li>Construido con <strong>C#</strong>.</li>
              <li>UX/UI realizada en <strong>Figma</strong>.</li>
              <li>Juegos dinámicos e <strong>interactivos</strong>.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


// ----------------------------------------------------
// APLICACIÓN PRINCIPAL (oscuro fijo)
// ----------------------------------------------------
export default function App() {
  // Scroll suave a anclas
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur border-b border-neutral-800 bg-neutral-950/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-lg">Portfolio</a>
          <ul className="hidden md:flex gap-6 text-sm text-neutral-300">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO (2 columnas con foto a la derecha) */}
      <header className="relative overflow-hidden">
        <BrandBG />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-neutral-200">
              <MapPin className="w-3.5 h-3.5" /> {DATA.ubicacion}
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {DATA.nombre}
            </h1>
            <p className="mt-2 text-xl text-neutral-200">{DATA.rol}</p>
            <p className="mt-5 max-w-2xl text-neutral-300">{DATA.bio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:opacity-90"
              >
                Ver proyectos <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${DATA.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/30 text-white hover:bg-white/10"
              >
                <Mail className="w-4 h-4" /> Contacto
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-neutral-300">
              {DATA.redes.github && (
                <a href={DATA.redes.github} target="_blank" rel="noreferrer">
                  <Github />
                </a>
              )}
              {DATA.redes.linkedin && (
                <a href={DATA.redes.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
              )}
              {DATA.redes.web && (
                <a href={DATA.redes.web} target="_blank" rel="noreferrer">
                  <LinkIcon />
                </a>
              )}
            </div>
          </motion.div>

          {/* Imagen de perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/avatar.jpg"
              alt="Foto de Benjamín Piccagli"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-white/15 object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </header>

      {/* SOBRE MÍ (ampliado y con énfasis visual) */}
<section id="about" className="max-w-6xl mx-auto px-4 py-16">
  <motion.h2
    className="text-2xl md:text-3xl font-bold mb-6"
    {...fadeUp(0)}
  >
    Sobre mí
  </motion.h2>

  <motion.div
    className="grid md:grid-cols-2 gap-8"
    variants={staggerParent}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, amount: 0.25 }}
  >
    {/* Columna texto */}
    <motion.div className="space-y-5 text-neutral-300 leading-relaxed" variants={itemUp}>
      <p>
        Soy un <strong>desarrollador en formación</strong> con un fuerte
        enfoque en el <strong>desarrollo Back-End</strong> y la creación de
        <strong> soluciones tecnológicas con propósito</strong>. Me apasiona
        diseñar <strong>APIs limpias, seguras y eficientes</strong>, cuidando
        tanto la lógica interna como la experiencia del usuario final.
      </p>
      <p>
        Tengo un profundo interés por la <strong>accesibilidad digital</strong> y el impacto que la
        <strong> tecnología</strong> puede generar en la vida cotidiana de las personas.
        Busco que cada proyecto en el que participo aporte <strong>valor real</strong>,
        mejorando la comunicación, la inclusión y la autonomía de sus usuarios.
      </p>
      <p>
        Me caracterizo por mi <strong>curiosidad, adaptabilidad</strong> y
        <strong> compromiso con el aprendizaje continuo</strong>, cualidades que me impulsan a
        seguir explorando nuevas herramientas y buenas prácticas dentro del ecosistema
        <strong> JavaScript</strong> y el desarrollo multiplataforma.
      </p>
    </motion.div>

    {/* Columna lista */}
    <motion.ul
      className="space-y-2 text-neutral-400 list-disc pl-5"
      variants={itemUp}
    >
      <li>
        Manejo el desarrollo <strong>Back-End</strong> con <strong>Node.js</strong> y
        <strong> Express</strong>, creando APIs seguras, escalables y bien estructuradas.
      </li>
      <li>
        Implemento autenticación con <strong>JWT</strong>, encriptación con <strong>bcrypt.js</strong>
        y validación de usuarios con <strong>Google Auth</strong>.
      </li>
      <li>
        Trabajo con <strong>Cloudinary</strong> para gestión y optimización de medios.
      </li>
      <li>
        Código limpio, <strong>git-flow</strong> y documentación clara para entornos colaborativos.
      </li>
    </motion.ul>
  </motion.div>
</section>


      {/* PROYECTOS */}
      <ProjectsSection />

      {/* CONTACTO */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Contacto</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-2xl border border-neutral-800 hover:bg-neutral-900 transition"
          >
            📱 WhatsApp: +54 9 11 3326-0939
          </a>
          <a
            href={DATA.redes.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 rounded-2xl border border-neutral-800 hover:bg-neutral-900 transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Benjamín Piccagli.
      </footer>
    </div>
  );
}