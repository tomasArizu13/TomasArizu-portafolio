const es = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Producto · UX · Estrategia",
    pill: "Abierto a roles de producto",
    headlineWords: ["Construyo", "productos", "que", "la", "gente", "realmente", "quiere", "usar."],
    headlineUnderlineIndex: 1,
    description: "Constructor de producto con formación en negocios y una base técnica sólida. Me atrae la parte más compleja —encontrar el problema real— y el oficio de darle forma a la solución hasta que se siente bien terminada.",
    spec: [
      { k: "Ahora", v: "QA Automation Engineer · Luno" },
      { k: "Educación", v: "Negocios Digitales · UdeSA" },
      { k: "Buscando", v: "Un rol de producto — PM / Analyst / Owner" }
    ],
    assertionsLabel: "verificaciones en curso",
    assertions: ["orientado a producto", "técnico", "validado antes de construir"],
    scrollCue: "Desplazate",
    scrollHint: "mové el mouse · clic para un pulso",
  },
  about: {
    title: "Sobre mí",
    subtitle: "Lo que construí, por qué me importa el producto, y cómo llegué acá",
    hi: "Hola, soy Tomas Arizu",
    content1: "Estudié Negocios Digitales en la Universidad de San Andrés — pero aprendí más construyendo. Lancé MVPs, validé ideas con usuarios reales antes de escribir una línea de código, y hoy mantengo saludable un producto multiplataforma como QA Automation Engineer en Luno. Ese rol me permite ver los productos desde adentro: qué se rompe, dónde se traban los usuarios y qué es lo que realmente importa entregar.",
    content2: "Lo que me atrae es el ciclo completo de producto — hablar con usuarios, encontrar el problema real, decidir qué vale la pena construir y cuidar los detalles hasta que se siente bien. Me muevo cómodo en ambos lados: puedo hablar de estrategia con stakeholders y leer el código junto a los devs.",
    content3: "Co-fundé OneBite, un club gastronómico premium, y validé la idea con más de 60 usuarios reales antes de construirlo.",
    keypoints: [
      "Descubrimiento y Validación de Producto",
      "QA y Testing Multiplataforma",
      "Construcción de MVPs",
      "Puente entre Stakeholders y Devs"
    ],
    download: "Descargar CV",
    skills: "Habilidades",
    skillGroups: [
      { category: "Producto", items: ["Descubrimiento y validación de usuarios", "Definición de features", "Priorización", "Prototipado", "Construcción de MVPs"] },
      { category: "Técnico / Testing", items: ["Playwright (TypeScript, POM)", "Maestro", "Diseño de casos de prueba", "Reporte de bugs", "Testing multiplataforma"] },
      { category: "Tecnologías", items: ["TypeScript/JavaScript", "React", "Next.js", "SQL (básico)", "Python (básico)", "Three.js / React Three Fiber", "Solana / web3"] },
      { category: "Herramientas", items: ["Linear", "Notion", "Jira", "Figma", "GitHub"] },
      { category: "Idiomas", items: ["Español (nativo)", "Inglés (C1 — Cambridge)"] }
    ]
  },
  howIThink: {
    title: "Cómo Pienso el Producto",
    subtitle: "Algunas ideas a las que vuelvo siempre que construyo producto",
    principles: [
      {
        title: "Empezar por el problema, no por la feature.",
        body: "Prefiero validar demanda con 60 encuestas antes que construir algo que nadie pidió. Todos los productos en los que trabajé empezaron con \"¿cuál es el problema real acá?\""
      },
      {
        title: "El usuario es lo único que importa.",
        body: "Mi trabajo en QA me entrenó para obsesionarme con la experiencia real — dónde se confunde la gente, dónde se rompe el flujo, qué hace que algo se sienta fácil."
      },
      {
        title: "Primero lanzar, después aprender.",
        body: "Prototipos antes que presentaciones. Me gusta poner algo real frente a la gente rápido y mejorar a partir de ahí."
      }
    ]
  },
  experience: {
    title: "Experiencia",
    subtitle: "Mi recorrido profesional y las experiencias que formaron mi expertise",
    items: [
      {
        title: "QA Automation Engineer",
        company: "Luno",
        location: "Remoto",
        period: "Ene 2026 – Presente",
        bullets: [
          "Aseguro la calidad de producto en tres plataformas: Creator Hub (creadores de contenido), Adapt (un asistente estilo ChatGPT) y Adium Pro (farmacéutica).",
          "Actúo como puente entre desarrollo, diseño y el cliente — detectando, documentando y priorizando issues, y traduciendo necesidades en qué resolver primero.",
          "Construí la automatización de tests desde cero (Playwright + Maestro), con cobertura multiplataforma.",
          "Aporto feedback sobre decisiones de producto y UX junto al Head of Product."
        ],
        technologies: ["Playwright", "Maestro", "TypeScript", "QA Multiplataforma"]
      },
      {
        title: "Operations Specialist (Pasantía)",
        company: "Globant · Disney Smart Parks",
        location: "Remoto",
        period: "Dic 2024 – Abr 2025",
        bullets: [
          "Integré Jira con dashboards de Smartsheet para dar visibilidad operativa, dando soporte a Program Management.",
          "Convertí datos operativos y de sensores en alertas accionables; documenté SOPs y handoffs entre equipos."
        ],
        technologies: ["Jira", "Smartsheet", "Gestión de Programas", "SOPs"]
      }
    ]
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Los más sólidos — problema, qué hice, y el resultado",
    liveDemo: "Ver Demo",
    viewDetails: "Ver Detalles",
    viewLive: "Ver Sitio",
    sourceCode: "Código Fuente",
    technologies: "Tecnologías Utilizadas:",
    problemLabel: "Problema",
    actionLabel: "Acción",
    outcomeLabel: "Resultado",
    items: [
      {
        id: 1,
        title: "Lendit — Gestor de Fondos de Crédito para PyMEs",
        problem: "Las PyMEs en Argentina tienen dificultades para acceder a capital de trabajo a través de canales de crédito tradicionales.",
        action: "Diseñé el prototipo web de punta a punta y lideré el pitch del demo-day para un gestor de fondos de crédito pensado para PyMEs, como proyecto de tesis de grado.",
        outcome: "Un prototipo funcional y un pitch que llevó el proyecto hasta el demo-day.",
        image: "/lendit.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        liveUrl: "https://lendit-next-arg.vercel.app",
        githubUrl: "https://github.com/tomasArizu13/PrototipoLendit"
      },
      {
        id: 2,
        title: "OneBite — Club Gastronómico Premium (Co-Fundador)",
        problem: "Quienes buscaban experiencias gastronómicas multisensoriales de alta gama no tenían una forma dedicada de descubrirlas o acceder a ellas.",
        action: "Identifiqué la oportunidad y validé la demanda con más de 60 encuestas a potenciales miembros antes de escribir una línea de código, y luego diseñé la estructura de membresía, los beneficios y la landing.",
        outcome: "Una landing en vivo en onebiteclub.com validada por una fuerte demanda en la encuesta — el club en sí nunca pasó de esa etapa.",
        image: "/onebiteclub-screenshot.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        liveUrl: "https://www.onebiteclub.com/"
      },
      {
        id: 3,
        title: "RealSync — Asistente de IA para Inmobiliarias",
        problem: "Los agentes inmobiliarios pierden impulso cuando no pueden responder a un lead de inmediato.",
        action: "Diseñé y construí la landing y la experiencia de demo de RealSync, un asistente de IA conversacional que califica leads y responde preguntas inmobiliarias al instante.",
        outcome: "Una demo funcional que muestra cómo un asistente siempre disponible podría integrarse al flujo de leads de una inmobiliaria.",
        image: "/realsync-screenshot.png",
        technologies: ["Next.js", "Tailwind CSS", "Vercel", "React"],
        liveUrl: "https://real-sync-phi.vercel.app/",
        githubUrl: "https://github.com/tomasArizu13/RealSync"
      }
    ]
  },
  education: {
    title: "Educación",
    subtitle: "De dónde salieron las bases",
    items: [
      {
        degree: "Negocios Digitales",
        institution: "Universidad de San Andrés (UdeSA)",
        period: "2021 – 2026"
      },
      {
        degree: "Programa de Desarrollo Full-Stack (formación)",
        institution: "Digital House",
        period: "2021 – 2023"
      },
      {
        degree: "Bachillerato Bilingüe",
        institution: "Colegio Cardenal Newman",
        period: "2008 – 2020"
      }
    ]
  },
  contact: {
    title: "Ahora",
    subtitle: "Qué estoy haciendo, y hacia dónde voy",
    letsConnect: "Ahora Mismo",
    letsConnectDesc: "Ya me recibí de Negocios Digitales en la UdeSA, y ahora trabajo como QA Automation Engineer — metido de lleno en el producto, aprendiendo todos los días y mirando siempre las cosas desde el lado del usuario. Busco un rol de producto — PM, Product Analyst o Product Owner — donde pueda ser dueño de resultados. Si estás construyendo algo interesante, me encantaría charlar.",
    emailLabel: "Email",
    emailValue: "tomasarizu13@gmail.com",
    linkedinLabel: "LinkedIn",
    linkedinValue: "linkedin.com/in/tomas-arizu",
    githubLabel: "GitHub",
    githubValue: "github.com/tomasArizu13",
    ctaTitle: "Hablemos",
    ctaDesc: "Email, LinkedIn o GitHub — lo que te resulte más fácil.",
    ctaButton: "Enviar Email"
  },
  footer: {
    copyright: "Todos los derechos reservados.",
    designed: "Diseñado por",
    portfolio: "tuportafolio.com"
  }
}

export default es; 