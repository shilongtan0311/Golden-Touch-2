import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Gem,
  Hammer,
  Home,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Lightbulb,
    title: "Interior Design Consultation",
    text: "Professional guidance to define your lifestyle needs, space direction, design style, and renovation priorities before the project begins.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    text: "Practical layouts that improve movement, storage, comfort, and long-term usability for landed homes, condos, and commercial spaces.",
  },
  {
    icon: Layers3,
    title: "3D Design & Visualization",
    text: "Clear 3D visuals that help you understand the final look, materials, lighting mood, and design details before construction.",
  },
  {
    icon: Hammer,
    title: "Full House Renovation",
    text: "From wet works to carpentry, ceiling, lighting, flooring, painting, and final finishing, we coordinate the complete renovation journey.",
  },
  {
    icon: Home,
    title: "Custom Cabinetry",
    text: "Tailor-made cabinetry for kitchens, wardrobes, feature walls, bedrooms, study areas, display units, and storage systems.",
  },
  {
    icon: Gem,
    title: "Material Selection & Supply",
    text: "We help clients select suitable materials based on design direction, budget, durability, and long-term maintenance needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "Structured coordination between designers, contractors, suppliers, site teams, and clients to reduce stress and improve delivery control.",
  },
  {
    icon: ShieldCheck,
    title: "Construction Quality Supervision",
    text: "Site inspection and quality control to ensure design details are translated properly into real construction outcomes.",
  },
  {
    icon: Building2,
    title: "Commercial Interior Design",
    text: "Functional and brand-aligned design solutions for offices, retail spaces, hospitality concepts, and customer-facing environments.",
  },
  {
    icon: Award,
    title: "Design & Build Package",
    text: "A one-stop solution that integrates design, quotation, material planning, renovation, supervision, and final handover.",
  },
];

const process = [
  "Consultation",
  "Site Measurement",
  "Design Proposal",
  "3D Visualization",
  "Quotation & Material Confirmation",
  "Construction & Project Management",
  "Final Handover",
];

const portfolio = [
  {
    name: "Serene Bungalow Residence",
    type: "Bungalow",
    location: "Kuala Lumpur",
    style: "Modern Luxury",
    scope: "Interior Design · Full Renovation · Custom Cabinetry",
    description:
      "A calm, elegant home concept with warm tones, layered lighting, premium material combinations, and practical family living spaces.",
  },
  {
    name: "Semi-D Family Transformation",
    type: "Semi-D",
    location: "Selangor",
    style: "Contemporary Warm",
    scope: "Space Planning · 3D Design · Renovation Works",
    description:
      "A complete planning and renovation concept designed to upgrade comfort, storage, entertaining areas, and day-to-day functionality.",
  },
  {
    name: "Urban Condo Suite",
    type: "Condominium",
    location: "Kuala Lumpur",
    style: "Modern Minimalist",
    scope: "Interior Design · Cabinetry · Lighting Design",
    description:
      "A compact yet refined condominium design focused on clean lines, smart storage, natural textures, and a premium city-living feel.",
  },
  {
    name: "Signature Commercial Space",
    type: "Commercial",
    location: "Malaysia",
    style: "Corporate Premium",
    scope: "Commercial Interior · Project Coordination",
    description:
      "A business-facing space designed to improve brand impression, customer experience, internal flow, and operational practicality.",
  },
];

const whyChoose = [
  "Design-driven approach from concept to completion",
  "Strong execution capability and practical site understanding",
  "Experience with Chinese design and construction standards",
  "Malaysia local project coordination and material awareness",
  "Transparent communication throughout the renovation journey",
  "Better control over materials, workmanship, and project details",
  "One-stop interior design and renovation service",
];

const seoPages = [
  {
    page: "Home",
    title: "Golden Touch Space Design | Interior Design & Renovation Malaysia",
    description:
      "Golden Touch Space Design Sdn. Bhd. provides design-driven interior design, renovation, custom cabinetry, and project management services in Kuala Lumpur, Malaysia.",
  },
  {
    page: "About Us",
    title: "About Golden Touch Space Design Sdn. Bhd.",
    description:
      "Learn about Golden Touch Space Design, a Kuala Lumpur interior design and renovation company focused on practical luxury, quality execution, and client trust.",
  },
  {
    page: "Services",
    title: "Interior Design, Renovation & Design Build Services Malaysia",
    description:
      "Explore our interior design, space planning, 3D visualization, full renovation, custom cabinet, material selection, and project management services.",
  },
  {
    page: "Portfolio",
    title: "Interior Design Portfolio | Golden Touch Space Design Malaysia",
    description:
      "View bungalow, semi-D, condominium, luxury living room, modern kitchen, custom bedroom, and commercial interior design project concepts.",
  },
  {
    page: "Contact",
    title: "Contact Golden Touch Space Design | Book a Design Consultation",
    description:
      "Tell us about your dream space. Contact Golden Touch Space Design in Kuala Lumpur for interior design, renovation, and design-build consultation.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68b3c]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#1d1a17] md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-[#6f675e] md:text-lg">{description}</p>}
    </div>
  );
}

function GoldButton({ children, href = "#contact", variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-[#b68b3c] text-white shadow-lg shadow-[#b68b3c]/20 hover:bg-[#9a742f]"
      : "border border-[#d7c4a0] bg-white/70 text-[#2b2722] hover:border-[#b68b3c] hover:bg-[#fbf6ed]";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  );
}

function DecorativeInteriorCard({ label, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/40 bg-[#e9dfcf] shadow-2xl ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.95),transparent_28%),linear-gradient(135deg,#f6efe4_0%,#d8c5a7_45%,#2c2926_100%)]" />
      <div className="absolute left-8 top-8 h-32 w-20 rounded-t-full bg-white/50 backdrop-blur" />
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute right-8 top-10 h-40 w-28 rounded-3xl border border-white/50 bg-black/20" />
      <div className="absolute bottom-10 left-8 right-8 flex items-center justify-between rounded-2xl bg-white/80 p-4 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#b68b3c]">Golden Touch</p>
          <p className="mt-1 text-sm font-semibold text-[#1d1a17]">{label}</p>
        </div>
        <Sparkles className="h-5 w-5 text-[#b68b3c]" />
      </div>
    </div>
  );
}

export default function GoldenTouchWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[#f8f3eb] font-sans text-[#2b2722]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-[#f8f3eb]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d1a17] text-lg font-bold text-[#d9b56d]">GT</div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d1a17]">Golden Touch</p>
              <p className="text-xs tracking-[0.2em] text-[#8c7b65]">点金空间设计</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-[#4c453d] transition hover:text-[#b68b3c]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+60123456789" className="text-sm font-semibold text-[#4c453d] hover:text-[#b68b3c]">
              Call Us
            </a>
            <GoldButton href="#contact">Book Consultation</GoldButton>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-[#d7c4a0] p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#e8ddca] bg-[#f8f3eb] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[#4c453d]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-28 lg:pt-32">
          <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#dcc394]/30 blur-3xl" />
          <div className="absolute right-0 top-32 h-[460px] w-[460px] rounded-full bg-[#1d1a17]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dcc394] bg-white/60 px-4 py-2 text-sm font-medium text-[#6f675e] backdrop-blur">
                <Star className="h-4 w-4 fill-[#b68b3c] text-[#b68b3c]" />
                Design-Driven Interior Design & Renovation Malaysia
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[#1d1a17] md:text-7xl lg:text-8xl">
                Design-Driven Interiors. Quality Renovation.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#6f675e] md:text-xl">
                Golden Touch Space Design Sdn. Bhd. creates beautiful, practical, and buildable spaces for homes and commercial projects in Malaysia — from concept to completion.
              </p>
              <p className="mt-4 text-lg font-medium text-[#1d1a17]">点金空间设计｜匠造空间 · 创造价值</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <GoldButton href="#contact">Book a Consultation</GoldButton>
                <GoldButton href="#portfolio" variant="secondary">View Our Projects</GoldButton>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
                {[
                  ["RM200K–RM1.2M", "Ideal Project Range"],
                  ["One-Stop", "Design & Build"],
                  ["KL Based", "Malaysia Projects"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/70 bg-white/55 p-4 backdrop-blur">
                    <p className="text-lg font-semibold text-[#1d1a17]">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8c7b65]">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative min-h-[560px]"
            >
              <DecorativeInteriorCard label="Premium Living Concept" className="absolute right-0 top-0 h-[420px] w-[78%]" />
              <DecorativeInteriorCard label="Buildable Design Details" className="absolute bottom-0 left-0 h-[300px] w-[58%]" />
              <div className="absolute bottom-12 right-6 max-w-xs rounded-[1.7rem] border border-white/60 bg-white/85 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b68b3c]">Our Promise</p>
                <p className="mt-3 text-xl font-semibold leading-7 text-[#1d1a17]">
                  Beauty, function, material control, and quality execution in one complete journey.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68b3c]">About Us</p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1a17] md:text-5xl">
                  A more professional, design-driven renovation experience for Malaysia.
                </h2>
                <p className="mt-6 text-lg leading-9 text-[#6f675e]">
                  Golden Touch Space Design Sdn. Bhd. was created for clients who do not only need a contractor. They need a team that understands design, lifestyle, materials, project coordination, and final delivery.
                </p>
                <p className="mt-5 text-lg leading-9 text-[#6f675e]">
                  We help homeowners and business owners transform properties into beautiful, functional, and valuable spaces — with clear planning, practical design, reliable execution, and responsible supervision.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Mission", "To provide design-driven, practical, and high-quality interior design and renovation solutions for homeowners and business owners in Malaysia."],
                  ["Vision", "To become one of Malaysia’s most trusted interior design and renovation brands, known for design quality, project execution, and customer trust."],
                  ["Positioning", "Premium yet practical. We believe good design is valuable, buildable, and worth investing in."],
                  ["Tagline", "Crafting Spaces. Creating Value. 匠造空间 · 创造价值"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[2rem] border border-[#eee4d4] bg-[#fbf6ed] p-7">
                    <p className="text-xl font-semibold text-[#1d1a17]">{title}</p>
                    <p className="mt-4 leading-7 text-[#6f675e]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {["Design with Purpose", "Quality First", "Transparent Communication", "Responsibility in Execution", "Client-Centric Service", "Continuous Improvement"].map((value) => (
                <div key={value} className="rounded-3xl border border-[#eee4d4] bg-white p-5 text-center shadow-sm">
                  <CheckCircle2 className="mx-auto h-5 w-5 text-[#b68b3c]" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#1d1a17]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="What We Do"
              title="One-stop interior design, renovation, and project execution."
              description="From the first idea to the final handover, our team integrates design thinking, material planning, renovation coordination, and quality control."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.03 }}
                    className="group rounded-[2rem] border border-[#eadfcd] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#fbf1df] text-[#b68b3c] group-hover:bg-[#b68b3c] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1d1a17]">{service.title}</h3>
                    <p className="mt-4 leading-7 text-[#6f675e]">{service.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#1d1a17] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b56d]">Our Process</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  A clear renovation journey reduces stress and protects quality.
                </h2>
                <p className="mt-6 text-lg leading-9 text-white/70">
                  Renovation should not depend on guesswork. We guide clients through a structured process so design decisions, budget direction, material confirmation, site coordination, and final delivery are easier to control.
                </p>
                <div className="mt-8">
                  <GoldButton href="#contact">Start Your Project</GoldButton>
                </div>
              </div>

              <div className="grid gap-4">
                {process.map((step, index) => (
                  <div key={step} className="flex gap-5 rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d9b56d] text-sm font-bold text-[#1d1a17]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {index === 0 && "We understand your property, lifestyle, budget direction, design expectations, and renovation goals."}
                        {index === 1 && "Our team reviews the site condition, measurements, possibilities, and key limitations before design begins."}
                        {index === 2 && "We prepare a design direction that balances beauty, function, budget, and buildability."}
                        {index === 3 && "3D visuals help you see the atmosphere, materials, lighting, and key details before confirming the work."}
                        {index === 4 && "We align quotation, materials, scope, details, and expectations before moving into construction."}
                        {index === 5 && "Our team coordinates site work, suppliers, timelines, inspections, and project communication."}
                        {index === 6 && "Final checks and handover help ensure the completed space is ready for real living and use."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Portfolio"
              title="Project concepts for homes, lifestyle spaces, and commercial environments."
              description="Showcase your completed projects here. The structure below is ready for real case studies, photos, floor plans, and before-after content."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {portfolio.map((project, index) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="overflow-hidden rounded-[2.2rem] border border-[#eadfcd] bg-[#fbf6ed] shadow-sm"
                >
                  <div className="relative h-64 overflow-hidden bg-[#e4d5bf]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.95),transparent_22%),linear-gradient(135deg,#f6ead8,#c4a777_48%,#22201e)]" />
                    <div className="absolute bottom-6 left-6 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b68b3c] backdrop-blur">
                      {project.type}
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b65]">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.style}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-[#1d1a17]">{project.name}</h3>
                    <p className="mt-3 text-sm font-medium text-[#b68b3c]">{project.scope}</p>
                    <p className="mt-4 leading-7 text-[#6f675e]">{project.description}</p>
                    <a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-[#1d1a17] hover:text-[#b68b3c]">
                      Discuss a similar project <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="showroom" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative min-h-[520px]">
                <DecorativeInteriorCard label="Showroom Experience Centre" className="absolute left-0 top-0 h-[460px] w-[85%]" />
                <div className="absolute bottom-0 right-0 max-w-sm rounded-[2rem] border border-white/70 bg-white/90 p-7 shadow-2xl backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b68b3c]">Experience Before You Decide</p>
                  <p className="mt-4 text-xl font-semibold leading-8 text-[#1d1a17]">
                    See material combinations, lighting atmosphere, smart-home ideas, and lifestyle scenes in person.
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68b3c]">Showroom</p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1a17] md:text-5xl">
                  Visit our showroom and experience the design possibilities.
                </h2>
                <p className="mt-6 text-lg leading-9 text-[#6f675e]">
                  Our showroom is designed to help clients understand renovation in a more direct and visual way. Instead of only choosing materials, you can experience real-life design concepts, lighting moods, space atmosphere, cabinet details, smart-home ideas, and lifestyle settings.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {["Material combinations", "Lighting atmosphere", "Lifestyle scenes", "Smart-home ideas", "Cabinet details", "Design consultation"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-[#b68b3c]" />
                      <span className="text-sm font-semibold text-[#1d1a17]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-9">
                  <GoldButton href="#contact">Book a Showroom Visit</GoldButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="We design with beauty, but we deliver with responsibility."
              description="A good interior design company should not only create attractive visuals. It should make sure the design can be built, controlled, and delivered with quality."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-[1.7rem] border border-[#eadfcd] bg-[#fbf6ed] p-5">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b68b3c] text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-lg font-medium leading-8 text-[#1d1a17]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1d1a17] py-16 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b56d]">Ready to begin?</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Tell us about your dream space.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Our team will guide you from concept to completion — with design, quotation, materials, renovation, and project supervision aligned clearly.
                </p>
              </div>
              <GoldButton href="#contact">Contact Our Team</GoldButton>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68b3c]">Contact Us</p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1a17] md:text-5xl">
                  Book a consultation with Golden Touch Space Design.
                </h2>
                <p className="mt-6 text-lg leading-9 text-[#6f675e]">
                  Tell us about your dream space. Our team will guide you from concept to completion.
                </p>

                <div className="mt-9 space-y-4">
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <Phone className="h-5 w-5 text-[#b68b3c]" />
                    <div>
                      <p className="text-sm text-[#8c7b65]">Phone</p>
                      <p className="font-semibold text-[#1d1a17]">+60 12-345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <Mail className="h-5 w-5 text-[#b68b3c]" />
                    <div>
                      <p className="text-sm text-[#8c7b65]">Email</p>
                      <p className="font-semibold text-[#1d1a17]">hello@goldentouchspace.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <MapPin className="h-5 w-5 text-[#b68b3c]" />
                    <div>
                      <p className="text-sm text-[#8c7b65]">Location</p>
                      <p className="font-semibold text-[#1d1a17]">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <MessageCircle className="h-5 w-5 text-[#b68b3c]" />
                    <div>
                      <p className="text-sm text-[#8c7b65]">Consultation</p>
                      <p className="font-semibold text-[#1d1a17]">WhatsApp appointment available</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="rounded-[2.5rem] border border-[#eadfcd] bg-white p-6 shadow-xl md:p-9">
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    ["Name", "text"],
                    ["Phone Number", "tel"],
                    ["Email", "email"],
                    ["Property Type", "text"],
                    ["Location", "text"],
                    ["Estimated Renovation Budget", "text"],
                    ["Preferred Design Style", "text"],
                  ].map(([label, type]) => (
                    <label key={label} className={label === "Preferred Design Style" ? "md:col-span-2" : ""}>
                      <span className="mb-2 block text-sm font-semibold text-[#1d1a17]">{label}</span>
                      <input
                        type={type}
                        placeholder={label}
                        className="w-full rounded-2xl border border-[#e6d9c3] bg-[#fbf8f2] px-4 py-3 text-sm outline-none transition focus:border-[#b68b3c] focus:bg-white"
                      />
                    </label>
                  ))}
                  <label className="md:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-[#1d1a17]">Message</span>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your property, timeline, design expectations, and renovation needs."
                      className="w-full resize-none rounded-2xl border border-[#e6d9c3] bg-[#fbf8f2] px-4 py-3 text-sm outline-none transition focus:border-[#b68b3c] focus:bg-white"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#b68b3c] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#b68b3c]/20 transition hover:bg-[#9a742f]"
                >
                  Submit Enquiry <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <p className="mt-4 text-center text-xs leading-5 text-[#8c7b65]">
                  This preview form is ready for integration with WhatsApp, email, CRM, or website backend.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-[2rem] border border-[#eadfcd] bg-[#fbf6ed] p-7 lg:p-9">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b68b3c]">SEO Foundation</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#1d1a17]">Meta titles and descriptions prepared for development.</h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[#6f675e]">
                  Keywords include Interior Design Malaysia, Interior Designer Kuala Lumpur, Renovation Contractor Malaysia, Design and Build Malaysia, Home Renovation Kuala Lumpur, and Custom Cabinet Malaysia.
                </p>
              </div>
              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                {seoPages.map((item) => (
                  <div key={item.page} className="rounded-3xl bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b68b3c]">{item.page}</p>
                    <p className="mt-2 font-semibold text-[#1d1a17]">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6f675e]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#141210] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9b56d] text-lg font-bold text-[#141210]">GT</div>
            <div>
              <p className="font-bold uppercase tracking-[0.18em]">Golden Touch Space Design Sdn. Bhd.</p>
              <p className="mt-1 text-sm text-white/55">点金空间设计 · Crafting Spaces. Creating Value.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/60">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#d9b56d]">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-white/45">© {year} Golden Touch Space Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
