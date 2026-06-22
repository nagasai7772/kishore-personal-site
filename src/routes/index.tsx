import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg";
import profilepic from "@/assets/profilepic.jpeg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Shield, Award, Users, Briefcase, GraduationCap, Mail, Phone, MapPin,
  Linkedin, Download, CheckCircle2, TrendingUp, BookOpen, Target,
  Globe, BarChart3, FileCheck, Sparkles
} from "lucide-react";
import {
  Reveal, StaggerGroup, StaggerItem, ScrollProgressBar, CountUp, motion,
} from "@/lib/motion";
import Kishore_Ayila_Resume from "@/assets/Kishore_Ayila_Resume.pdf"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayila Naga Kishore — Banking Operations, Risk & Compliance Professional" },
      { name: "description", content: "Senior Banking Operations Specialist with 5+ years across Employee Vetting, Risk & Compliance, Quality Assurance, Vendor Governance and Training Management." },
      { property: "og:title", content: "Ayila Naga Kishore — Banking Operations & Compliance" },
      { property: "og:description", content: "Driving Quality, Governance, and Operational Excellence across global financial institutions." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#competencies", label: "Competencies" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary font-sans text-sm font-bold tracking-wider text-primary-foreground">AK</span>
          <span className="hidden font-sans text-sm font-semibold tracking-wide text-foreground sm:inline">AYILA NAGA KISHORE</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={Kishore_Ayila_Resume} 
            download={"Kishore_Ayila_Resume.pdf"}><Download className="mr-2 h-4 w-4" />Resume</a>
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
            <span className="font-sans text-lg">≡</span>
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, children, muted = false }: { id: string; eyebrow?: string; title: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${muted ? "bg-muted" : "bg-background"}`}>
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal className="mb-12 max-w-3xl">
          {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
          <h2 className="font-sans text-4xl font-bold text-foreground md:text-5xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  const strengths = [
    "Regulatory Compliance", "Risk Assessment", "Banking Operations", "Quality Governance",
    "Vendor Management", "Training Excellence", "Operational Reporting", "Stakeholder Management",
  ];
  const stats = [
    { v: "5+", l: "Years Experience" },
    { v: "27+", l: "Global Entities" },
    { v: "4", l: "Regions Managed" },
    { v: "6+", l: "Certifications" },
  ];
  return (
    <section id="home" className="relative overflow-hidden text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1.2 }}
      />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80"
          >
            <Sparkles className="h-3.5 w-3.5" /> Banking · Risk · Compliance
          </motion.div>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } }}
            className="font-sans text-2xl font-bold leading-[1.05] md:text-4xl"
          >
            Banking Operations, Risk & Compliance Professional Driving <span className="italic text-white/90">Quality, Governance & Operational Excellence</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="mt-6 max-w-2xl text-base text-white/75 md:text-lg"
          >
            Senior Banking Operations Specialist with 5+ years of experience managing Employee Vetting, Regulatory Compliance, Risk Management, Vendor Governance, Quality Assurance, and Training Operations across international regions.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href={Kishore_Ayila_Resume} download="kishore_Ayila_Resume.pdf"><Download className="mr-2 h-4 w-4" />Download Resume</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
              <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } } }}
          >
            {strengths.map((s) => (
              <motion.span
                key={s}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2 text-sm text-white/85"
              >
                <CheckCircle2 className="h-4 w-4 text-accent-foreground/90" style={{ color: "oklch(0.85 0.15 230)" }} />{s}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.l}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-primary/80 px-5 py-5 backdrop-blur"
              >
                <div className="font-sans text-3xl font-bold"><CountUp value={s.v} /></div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/65">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.div
            className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={profilepic} alt="Ayila Naga Kishore" width={1024} height={1024} className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 rounded-xl border border-white/15 bg-primary px-5 py-4 shadow-lg"
          >
            <div className="text-[10px] uppercase tracking-widest text-white/60">Currently</div>
            <div className="mt-1 text-sm font-semibold">Vetting Quality & Training Manager</div>
            <div className="text-xs text-white/70">HSBC</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const principles = [
    { icon: Shield, t: "Integrity", d: "Making ethical decisions and ensuring compliance with organizational standards." },
    { icon: Target, t: "Accountability", d: "Taking ownership of responsibilities and delivering reliable outcomes." },
    { icon: TrendingUp, t: "Continuous Improvement", d: "Identifying opportunities to enhance efficiency, quality, and customer experience." },
    { icon: Users, t: "Customer-Centric Mindset", d: "Creating positive experiences while maintaining operational excellence." },
  ];
  return (
    <Section id="about" eyebrow="About Me" title="Building Trust Through Compliance, Governance & Operational Excellence">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <StaggerGroup className="space-y-5 text-muted-foreground">
          <StaggerItem><p>Results-driven Banking Operations and Risk & Compliance professional with over five years of experience supporting global financial operations, regulatory compliance programs, quality governance initiatives, and employee vetting functions.</p></StaggerItem>
          <StaggerItem><p>Experienced in managing operational risk, vendor governance, quality assurance, stakeholder engagement, and training management across international banking environments.</p></StaggerItem>
          <StaggerItem><p>Demonstrated ability to lead governance programs, analyze operational performance data, improve compliance outcomes, and collaborate with cross-functional teams to achieve strategic objectives.</p></StaggerItem>
          <StaggerItem><p>Committed to fostering a culture of compliance, accountability, continuous improvement, and customer-focused service delivery.</p></StaggerItem>
        </StaggerGroup>
        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {principles.map(({ icon: Icon, t, d }) => (
            <StaggerItem
              key={t}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-sans text-lg font-semibold text-foreground">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}

function Experience() {
  const roles = [
    {
      title: "Vetting Quality and Training Manager",
      org: "HSBC", period: "July 2025 – Present",
      overview: "Leading Global Quality Assurance, Training Governance, and Vendor Management functions supporting employee vetting operations across multiple international regions.",
      responsibilities: [
        "Manage quality assurance and training governance across global employee vetting operations.",
        "Ensure adherence to banking regulations, internal policies, and operational risk controls.",
        "Lead vendor governance programs for strategic screening partners.",
        "Prepare and present governance reports for senior leadership.",
        "Monitor operational quality trends and risk indicators.",
        "Drive continuous improvement initiatives and quality enhancement programs.",
        "Facilitate governance meetings and stakeholder engagement forums.",
      ],
      impact: [
        "Managed quality and governance operations across 27+ global entities.",
        "Improved quality outcomes through coaching and root cause analysis.",
        "Strengthened vendor governance frameworks and compliance controls.",
        "Enhanced operational visibility through governance reporting.",
      ],
    },
    {
      title: "Senior Vetting Analyst (Risk & Compliance)",
      org: "HSBC", period: "April 2021 – July 2025",
      responsibilities: [
        "Conducted employee vetting and due diligence reviews.",
        "Performed risk assessments and compliance evaluations.",
        "Executed AML and KYC verification procedures.",
        "Conducted financial and reputational screening activities.",
        "Maintained regulatory compliance documentation.",
        "Supported onboarding and recruitment teams with risk assessments.",
        "Collaborated with global stakeholders and compliance teams.",
      ],
      impact: [
        "Supported risk and compliance functions across multiple regions.",
        "Served as Point of Contact for high-priority vetting cases.",
        "Contributed to large-scale hiring and onboarding projects.",
        "Improved turnaround times through effective coordination.",
      ],
    },
    {
      title: "Customer Service Representative (Account Change Specialist)",
      org: "Amazon", period: "October 2019 – December 2020",
      responsibilities: [
        "Delivered customer support and account management services.",
        "Resolved customer inquiries and escalations.",
        "Maintained confidentiality and data security standards.",
        "Coordinated with internal teams for issue resolution.",
        "Provided timely and accurate status updates.",
      ],
      impact: [
        "Employee of the Month — July 2020",
        "Employee of the Month — October 2020",
        "CCX U Rockstar Award",
      ],
    },
  ];

  return (
    <Section id="experience" eyebrow="Professional Experience" title="A Career in Risk, Compliance & Operations" muted>
      <StaggerGroup className="relative space-y-10" amount={0.1}>
        {roles.map((r, i) => (
          <StaggerItem key={i} className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
              <div>
                <h3 className="font-sans text-2xl font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-base font-medium text-accent">{r.org}</p>
              </div>
              <span className="rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{r.period}</span>
            </div>
            {r.overview && <p className="mb-6 text-muted-foreground">{r.overview}</p>}
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Core Responsibilities</h4>
                <ul className="space-y-2">
                  {r.responsibilities.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Impact & Recognition</h4>
                <ul className="space-y-2">
                  {r.impact.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

function Competencies() {
  const groups = [
    { icon: Briefcase, title: "Banking Operations", items: ["Employee Vetting", "Background Verification", "Operational Governance", "Process Management"] },
    { icon: Shield, title: "Risk & Compliance", items: ["AML Compliance", "KYC Verification", "Risk Assessment", "Due Diligence", "Regulatory Compliance"] },
    { icon: FileCheck, title: "Quality Assurance", items: ["Quality Reviews", "Audit Readiness", "Performance Monitoring", "Continuous Improvement"] },
    { icon: Users, title: "Vendor Governance", items: ["Vendor Performance Management", "SLA Monitoring", "Quality Calibration", "Governance Meetings"] },
    { icon: BookOpen, title: "Training Management", items: ["Learning Programs", "Capability Development", "Coaching", "Knowledge Management"] },
    { icon: BarChart3, title: "Data & Reporting", items: ["MI Reporting", "Operational Analytics", "Governance Dashboards", "Trend Analysis"] },
  ];
  return (
    <Section id="competencies" eyebrow="Core Competencies" title="Specialized Expertise">
      <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, items }) => (
          <StaggerItem
            key={title}
            className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/50 hover:shadow-[var(--shadow-card)]"
            whileHover={{ y: -6 }}
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: "var(--gradient-accent)" }}>
              <Icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="mb-4 font-sans text-xl font-semibold text-foreground">{title}</h3>
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-accent" />{i}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal className="mt-6 rounded-2xl border border-border bg-card p-7">
        <h3 className="mb-4 font-sans text-xl font-semibold">Professional Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["Communication", "Leadership", "Stakeholder Management", "Problem Solving", "Team Collaboration"].map((s) => (
            <motion.span
              key={s}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="inline-block rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function Highlights() {
  const items = [
    { v: "5+ Years", l: "Professional Experience" },
    { v: "27+ Entities", l: "Supported Globally" },
    { v: "4 Regions", l: "ASP · MENA · Europe · UK" },
    { v: "Multiple", l: "Strategic Vendor Partnerships" },
    { v: "Global", l: "Risk, Compliance & Training Leadership" },
    { v: "Award-Winning", l: "Customer Service Excellence" },
  ];
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Career Highlights</p>
        <h2 className="mb-12 max-w-2xl font-sans text-3xl font-bold md:text-5xl">A track record across global financial operations.</h2>
        <StaggerGroup className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <StaggerItem key={i.l} className="bg-primary p-7">
              <div className="font-sans text-3xl font-bold md:text-4xl">{i.v}</div>
              <div className="mt-2 text-sm text-white/65">{i.l}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Achievements() {
  const list = [
    { icon: Globe, t: "Global Governance Leadership", d: "Successfully managed Quality, Training, and Vendor Governance programs across 27+ international entities." },
    { icon: TrendingUp, t: "Operational Excellence", d: "Enhanced quality performance through targeted coaching initiatives and root-cause analysis programs." },
    { icon: FileCheck, t: "Vendor Governance Success", d: "Implemented quality calibration frameworks that strengthened compliance and service standards." },
    { icon: Users, t: "Cross-Regional Expertise", d: "Cross-trained on global vetting platforms supporting multiple international regions." },
    { icon: Target, t: "Project Leadership", d: "Served as Primary Point of Contact for India Campus Hiring Project 2024." },
    { icon: Award, t: "Customer Service Recognition", d: "Awarded Employee of the Month twice for exceptional customer experience delivery." },
    { icon: Sparkles, t: "Performance Excellence", d: "Received CCX U Rockstar Award for achieving 100% customer understandability metrics." },
  ];
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & Impact" muted>
      <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map(({ icon: Icon, t, d }) => (
          <StaggerItem
            key={t}
            className="rounded-2xl border border-border bg-card p-7"
            whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(15, 23, 42, 0.25)" }}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-sans text-lg font-semibold">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

function Certifications() {
  const certs = [
    { t: "AI Prompt Engineering", d: "Professional Application of AI Tools in Modern Workplaces" },
    { t: "Using Generative AI Ethically at Work", d: "Responsible and Ethical AI Utilization" },
    { t: "Become an AI Powered People Manager", d: "Leadership Enhancement Through AI Technologies" },
    { t: "From Tool to Teammates", d: "AI Collaboration and Productivity Improvement" },
    { t: "Querying with Transact-SQL", d: "Microsoft Virtual Academy" },
    { t: "Introduction to Internet of Things — Elite Grade", d: "NPTEL" },
  ];
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous Learning & Credentials">
      <StaggerGroup className="grid gap-4 md:grid-cols-2">
        {certs.map((c) => (
          <StaggerItem
            key={c.t}
            className="flex gap-4 rounded-xl border border-border bg-card p-6"
            whileHover={{ y: -4, borderColor: "rgb(37 99 235 / 0.6)" }}
          >
            <Award className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h3 className="font-sans text-base font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Published Research</p>
        <h3 className="mt-2 font-sans text-xl font-semibold text-foreground">Real Time Environmental Data Collection and Analytics using Internet of Things</h3>
      </Reveal>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Foundation" muted>
      <Reveal className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="grid gap-0 md:grid-cols-[1fr_2fr]">
          <div className="bg-primary p-8 text-primary-foreground md:p-10">
            <GraduationCap className="mb-4 h-10 w-10 text-white/80" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">2015 – 2019</p>
            <h3 className="mt-2 font-sans text-2xl font-semibold">Bachelor of Technology</h3>
            <p className="mt-1 text-white/75">Computer Science and Engineering</p>
            <p className="mt-4 text-sm font-medium text-white/85">Andhra University</p>
          </div>
          <div className="p-8 md:p-10">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">Academic Highlights</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />First Class Graduate</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />Strong analytical and problem-solving foundation</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />Technical and research project experience</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Values() {
  const strengths = [
    { t: "Customer Service Excellence", d: "Delivering exceptional service experiences and building customer trust." },
    { t: "Risk Management", d: "Identifying, assessing, and mitigating operational and compliance risks." },
    { t: "Regulatory Compliance", d: "Ensuring adherence to internal and external regulatory requirements." },
    { t: "Relationship Building", d: "Managing stakeholders and cross-functional partnerships effectively." },
    { t: "Operational Excellence", d: "Driving process efficiency and continuous improvement." },
    { t: "Communication", d: "Presenting insights and recommendations to senior leadership." },
    { t: "Leadership", d: "Guiding training initiatives and governance programs." },
    { t: "Analytical Thinking", d: "Transforming operational data into actionable business insights." },
  ];
  const values = ["Integrity", "Accountability", "Customer Focus", "Professionalism", "Reliability", "Continuous Learning", "Teamwork", "Compliance"];
  return (
    <Section id="values" eyebrow="Professional Strengths & Values" title="Principles That Guide My Work">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {strengths.map((s) => (
            <StaggerItem
              key={s.t}
              className="rounded-xl border border-border bg-card p-5"
              whileHover={{ y: -4, borderColor: "rgb(37 99 235 / 0.5)" }}
            >
              <h3 className="font-sans text-base font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Core Values</p>
          <h3 className="mt-2 font-sans text-2xl font-semibold">What I stand for.</h3>
          <motion.div
            className="mt-6 flex flex-wrap gap-2"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {values.map((v) => (
              <motion.span
                key={v}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="inline-block rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90"
              >
                {v}
              </motion.span>
            ))}
          </motion.div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Extra-Curricular</p>
            <ul className="mt-3 space-y-3 text-sm text-white/80">
              <li><strong className="text-white">College Ambassador</strong> — AARUSH-17 Technical Fest, SRM University.</li>
              <li><strong className="text-white">STEM Team Leader</strong> — Elected twice at Andhra University.</li>
              <li><strong className="text-white">Community Volunteer</strong> — ISKON Organization, Visakhapatnam.</li>
              <li><strong className="text-white">Continuous Learning</strong> — Compliance, governance, and AI training.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    { t: "Manager Recommendation", d: "Future section for leadership endorsements and performance reviews." },
    { t: "Peer Feedback", d: "Collaboration and teamwork testimonials." },
    { t: "Stakeholder Feedback", d: "Cross-functional partnership acknowledgments." },
    { t: "Customer Testimonials", d: "Recognition of customer service excellence and support quality." },
  ];
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Voices & Endorsements" muted>
      <StaggerGroup className="grid gap-5 md:grid-cols-2">
        {items.map((i) => (
          <StaggerItem
            key={i.t}
            className="rounded-2xl border border-dashed border-border bg-card p-7"
            whileHover={{ y: -4 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Coming Soon</p>
            <h3 className="mt-2 font-sans text-xl font-semibold text-foreground">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    toast.success("Thanks! Your message has been recorded.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };
  const openings = ["Banking Operations", "Risk & Compliance", "Governance", "Vendor Management", "Quality Assurance", "Training Management", "Financial Services Operations"];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-8">
          <div>
            <p className="text-sm text-muted-foreground">Open to opportunities in:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {openings.map((o) => (
                <motion.span
                  key={o}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
                >
                  {o}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-sans text-xl font-semibold text-foreground">Ayila Naga Kishore</h3>
            <p className="mt-1 text-sm text-accent">Vetting Quality & Training Manager</p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <a href="#" className="flex items-center gap-3 hover:text-accent"><MapPin className="h-4 w-4 text-accent" />Hyderabad, Telangana</a>
              <a href="tel:+917981808492" className="flex items-center gap-3 hover:text-accent"><Phone className="h-4 w-4 text-accent" />+91 79818 08492</a>
              <a href="mailto:nagakishore459@gmail.com" className="flex items-center gap-3 hover:text-accent"><Mail className="h-4 w-4 text-accent" />nagakishore459@gmail.com</a>
              <a href="#" className="flex items-center gap-3 hover:text-accent"><Linkedin className="h-4 w-4 text-accent" />LinkedIn Profile</a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Open to Leadership, Governance, Risk & Compliance roles
            </div>
          </div>
        </Reveal>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" maxLength={150} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required maxLength={1500} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
            Send Message
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-primary font-sans font-bold">AK</span>
            <span className="font-sans text-sm font-semibold tracking-wide">AYILA NAGA KISHORE</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/65">Driving Trust, Compliance, Quality, and Operational Excellence Across Global Banking Operations.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Quick Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/80">
            {["Home", "About", "Experience", "Competencies", "Certifications", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Resources</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href="#contact" className="hover:text-white">Download Resume</a></li>
            <li><a href="#contact" className="hover:text-white">LinkedIn</a></li>
            <li><a href="mailto:nagakishore459@gmail.com" className="hover:text-white">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1280px] border-t border-white/10 px-6 pt-6 text-center text-xs text-white/50">
        © 2026 Ayila Naga Kishore. All Rights Reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Competencies />
        <Highlights />
        <Achievements />
        <Certifications />
        <Education />
        <Values />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
