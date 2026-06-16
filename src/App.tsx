import React, { useState } from "react";
import {
  Heart,
  Shield,
  Syringe,
  Building2,
  Users,
  CheckCircle,
  ChevronRight,
  Menu,
  X,
  Mail,
  MapPin,
  Stethoscope,
  Home,
  Handshake,
  FileText,
  Scale,
  AlertTriangle,
  ClipboardCheck,
  Truck,
  PawPrint,
  Landmark,
  MapPinned,
  Send,
  ArrowRight,
  BadgeCheck,
  HelpingHand,
} from "lucide-react";

type IconType = React.ElementType;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Problem", href: "#problem" },
  { label: "Model", href: "#model" },
  { label: "Pilot Plan", href: "#pilot-plan" },
  { label: "Partners", href: "#partners" },
  { label: "Transparency", href: "#transparency" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  {
    icon: Heart,
    title: "Rescue and Triage",
    desc: "Controlled intake for urgent street-dog cases based on safety, capacity, and medical need.",
  },
  {
    icon: Shield,
    title: "Quarantine",
    desc: "Separate holding and disease-control protocols before dogs join the general shelter population.",
  },
  {
    icon: Syringe,
    title: "Vaccination",
    desc: "Rabies prevention, core vaccine planning, deworming, and parasite control.",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    desc: "Treatment, recovery, medical records, and future veterinary partner support.",
  },
  {
    icon: PawPrint,
    title: "Sterilization",
    desc: "Spay and neuter as the long-term prevention tool against uncontrolled breeding.",
  },
  {
    icon: Home,
    title: "Foster and Adoption",
    desc: "Responsible placement so the shelter does not become permanent dog warehousing.",
  },
  {
    icon: Users,
    title: "Community Education",
    desc: "Barangay, school, and public awareness programs on rabies prevention and responsible ownership.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    desc: "Dog-level records, donor updates, financial reporting, and measurable outcomes.",
  },
];

const problems = [
  {
    icon: Heart,
    title: "Street-Dog Suffering",
    desc: "Many dogs face hunger, traffic injuries, disease, parasites, abuse, neglect, and abandonment.",
  },
  {
    icon: Shield,
    title: "Rabies and Bite Risk",
    desc: "Communities need vaccination, education, and responsible ownership support to reduce preventable harm.",
  },
  {
    icon: PawPrint,
    title: "Uncontrolled Breeding",
    desc: "Without sterilization, rescue alone cannot solve the problem. More puppies are born into suffering.",
  },
  {
    icon: Building2,
    title: "Overburdened Local Systems",
    desc: "LGUs and pounds often lack space, veterinary support, adoption capacity, and operating resources.",
  },
  {
    icon: Home,
    title: "Weak Adoption Pipeline",
    desc: "Dogs need real pathways out of shelters through foster homes, adoption, and follow-up support.",
  },
  {
    icon: ClipboardCheck,
    title: "Lack of Donor-Grade Reporting",
    desc: "Serious funders need governance, budgets, records, outcomes, and transparency before they commit.",
  },
];

const partnerTypes = [
  {
    icon: Handshake,
    title: "Corporate Partners",
    desc: "CSR sponsorships for kennel blocks, vaccination drives, sterilization days, food, medicine, and volunteer events.",
    cta: "Request Sponsorship Deck",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Partners",
    desc: "Medical MOAs, discounted care, vaccine access, spay/neuter support, emergency treatment, and staff training.",
    cta: "Become a Vet Partner",
  },
  {
    icon: Landmark,
    title: "LGU and Barangay Partners",
    desc: "Site support, vaccination coordination, humane dog management, education campaigns, and local system support.",
    cta: "Start LGU Discussion",
  },
  {
    icon: MapPinned,
    title: "Land and Site Partners",
    desc: "Potential land donation, long-term lease, LGU property support, or site feasibility assistance.",
    cta: "Propose a Site",
  },
  {
    icon: FileText,
    title: "Institutional Funders",
    desc: "Support pilot shelter development, quarantine, clinic setup, rabies prevention, sterilization, and reporting systems.",
    cta: "Request Concept Note",
  },
  {
    icon: HelpingHand,
    title: "Professional Volunteers",
    desc: "Legal, accounting, design, grant writing, social media, animal welfare, foster care, and community support.",
    cta: "Volunteer Interest",
  },
];

const complianceSteps = [
  "Name reservation",
  "SEC non-stock / non-profit registration",
  "BIR registration",
  "Foundation bank account",
  "Board governance policies",
  "Veterinary partner MOA",
  "LGU and zoning review",
  "BAI animal facility registration when applicable",
  "DSWD public solicitation permit when applicable",
  "Annual audited financial statements",
  "Donor reporting system",
];

const pilotComponents = [
  "Intake and triage area",
  "Quarantine kennels",
  "Isolation area",
  "Treatment room",
  "Recovery space",
  "Main kennel blocks",
  "Exercise yards",
  "Adoption meet-and-greet area",
  "Food storage",
  "Laundry and wash area",
  "Waste management zone",
  "Admin and volunteer area",
  "Rescue vehicle bay",
];

const budgetItems = [
  {
    title: "Site and Preparation",
    desc: "Land rights, fencing, drainage, utilities, permits, and initial site works.",
  },
  {
    title: "Shelter Construction",
    desc: "Kennels, quarantine, treatment space, adoption area, and support facilities.",
  },
  {
    title: "Veterinary Setup",
    desc: "Basic clinic equipment, cold chain, cages, PPE, medicines, and disease-control systems.",
  },
  {
    title: "Rescue and Outreach Vehicle",
    desc: "Transport for rescue, vaccination, sterilization, and community missions.",
  },
  {
    title: "First-Year Operations",
    desc: "Staffing, food, medical care, utilities, outreach, compliance, and reporting.",
  },
  {
    title: "Emergency Reserve",
    desc: "Operating buffer to avoid underfunded shelter conditions.",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-kalinga-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-kalinga-green text-white shadow-sm">
            <PawPrint size={22} />
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-kalinga-deep">Kalinga Dogs PH</p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kalinga-muted">Safer communities</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-kalinga-text transition hover:text-kalinga-green">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden rounded-full bg-kalinga-green px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-kalinga-deep lg:inline-flex">
          Become a Founding Partner
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-kalinga-deep lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-kalinga-bg px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-base font-semibold text-kalinga-text transition hover:bg-white hover:text-kalinga-green">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="mt-3 rounded-full bg-kalinga-green px-5 py-3 text-center font-bold text-white">
              Become a Founding Partner
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-kalinga-green">{eyebrow}</p>}
      <h2 className="text-4xl font-black leading-tight tracking-tight text-kalinga-text md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg leading-relaxed text-kalinga-muted">{subtitle}</p>}
    </div>
  );
}

function Button({ children, href, primary = true }: { children: React.ReactNode; href: string; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-black transition ${
        primary
          ? "bg-kalinga-green text-white shadow-sm hover:bg-kalinga-deep"
          : "border border-border bg-white text-kalinga-text hover:border-kalinga-green hover:text-kalinga-green"
      }`}
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

function Card({ icon: Icon, title, desc }: { icon: IconType; title: string; desc: string }) {
  return (
    <div className="group rounded-3xl border border-border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-kalinga-bg text-kalinga-green transition group-hover:bg-kalinga-green group-hover:text-white">
        <Icon size={25} />
      </div>
      <h3 className="mb-3 text-xl font-black text-kalinga-text">{title}</h3>
      <p className="leading-relaxed text-kalinga-muted">{desc}</p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-kalinga-text">
        {label} {required && <span className="text-kalinga-green">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-border bg-kalinga-bg px-4 py-3 outline-none transition focus:border-kalinga-green focus:ring-4 focus:ring-kalinga-green/10"
        required={required}
      />
    </label>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    location: "",
    supportType: "",
    message: "",
    acknowledge: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const isValid = Boolean(form.name && form.email && form.supportType && form.message && form.acknowledge);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-kalinga-green text-white">
          <CheckCircle size={28} />
        </div>
        <h3 className="mb-3 text-2xl font-black text-kalinga-text">Partnership inquiry received.</h3>
        <p className="leading-relaxed text-kalinga-muted">
          Thank you. Your message has been prepared in this prototype flow. When the backend is connected, this form can send inquiries to Supabase and email notifications.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
        <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
        <Field label="Phone / WhatsApp" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
        <Field label="Organization" value={form.organization} onChange={(v) => setForm({ ...form, organization: v })} />
        <Field label="Location" value={form.location} onChange={(v) => setForm({ ...form, location: v })} />

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-kalinga-text">Type of Support <span className="text-kalinga-green">*</span></span>
          <select
            value={form.supportType}
            onChange={(e) => setForm({ ...form, supportType: e.target.value })}
            className="w-full rounded-2xl border border-border bg-kalinga-bg px-4 py-3 outline-none transition focus:border-kalinga-green focus:ring-4 focus:ring-kalinga-green/10"
            required
          >
            <option value="">Select one</option>
            <option>Corporate sponsorship</option>
            <option>Veterinary partnership</option>
            <option>LGU partnership</option>
            <option>Land or site proposal</option>
            <option>Institutional funding</option>
            <option>Legal or accounting support</option>
            <option>Volunteer</option>
            <option>Foster/adoption interest</option>
            <option>Media inquiry</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-bold text-kalinga-text">Message <span className="text-kalinga-green">*</span></span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="w-full resize-none rounded-2xl border border-border bg-kalinga-bg px-4 py-3 outline-none transition focus:border-kalinga-green focus:ring-4 focus:ring-kalinga-green/10"
          placeholder="Tell us how you may be able to help build the foundation."
          required
        />
      </label>

      <label className="mt-5 flex gap-3 rounded-2xl bg-kalinga-bg p-4 text-sm leading-relaxed text-kalinga-muted">
        <input
          type="checkbox"
          checked={form.acknowledge}
          onChange={(e) => setForm({ ...form, acknowledge: e.target.checked })}
          className="mt-1 h-4 w-4 accent-kalinga-green"
          required
        />
        <span>I understand that Kalinga Dogs PH is currently in pre-launch and partnership development stage.</span>
      </label>

      <button
        type="submit"
        disabled={!isValid}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-kalinga-green px-7 py-4 font-black text-white transition hover:bg-kalinga-deep disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
      >
        Send Partnership Inquiry
        <Send size={18} />
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-kalinga-bg font-sans text-kalinga-text">
      <Header />

      <main>
        <section className="relative overflow-hidden pt-32 md:pt-40">
          <div className="absolute right-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-kalinga-gold/20 blur-3xl" />
          <div className="absolute bottom-[-160px] left-[-140px] h-[340px] w-[340px] rounded-full bg-kalinga-blue/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-kalinga-deep shadow-sm">
                <BadgeCheck size={17} className="text-kalinga-green" />
                Pre-launch initiative • Partnership development stage
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-kalinga-text md:text-7xl">
                Building a safer and kinder Philippines for street dogs and communities.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-kalinga-muted md:text-xl">
                Kalinga Dogs Philippines is a proposed animal welfare and rabies-prevention initiative designed to rescue, vaccinate, sterilize, rehabilitate, and rehome street dogs while supporting humane community dog management.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact">Become a Founding Partner</Button>
                <Button href="#pilot-plan" primary={false}>Explore the Pilot Plan</Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["Animal welfare", "Rabies prevention", "Transparent reporting"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-kalinga-deep shadow-sm">
                    <CheckCircle size={17} className="text-kalinga-green" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-border bg-white p-4 shadow-2xl">
                <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] bg-kalinga-deep">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,184,75,0.35),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(107,159,181,0.3),transparent_30%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
                      <PawPrint size={34} />
                    </div>
                    <h2 className="text-3xl font-black">Compassion needs structure.</h2>
                    <p className="mt-4 max-w-sm leading-relaxed text-white/80">
                      The first mission is not to build the biggest shelter. It is to build the right system: legal, humane, veterinary-led, and accountable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-3xl border border-border bg-white p-5 shadow-xl md:-left-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-kalinga-muted">Pilot Target</p>
                <p className="mt-1 text-3xl font-black text-kalinga-deep">50 Dogs</p>
                <p className="text-sm text-kalinga-muted">modular controlled shelter</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-border bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="About"
              title="A disciplined animal welfare initiative for the Philippines."
              subtitle="Kalinga Dogs PH is being developed as a future non-stock, non-profit animal welfare organization focused on humane street-dog care, rabies prevention, sterilization, adoption, and community education."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Shelter alone is not enough.", desc: "A shelter without sterilization, adoption, and community work becomes overcrowded." },
                { title: "Rabies prevention protects both dogs and people.", desc: "Vaccination and education are public-health priorities." },
                { title: "Transparency earns trust.", desc: "Donors, partners, and communities deserve clear reporting." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-kalinga-bg p-7">
                  <h3 className="mb-3 text-xl font-black">{item.title}</h3>
                  <p className="leading-relaxed text-kalinga-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-kalinga-deep p-8 text-white md:p-10">
              <p className="max-w-4xl text-2xl font-black leading-snug md:text-3xl">
                No chaos disguised as compassion. Animal welfare requires limits, records, veterinary protocols, governance, and sustainable funding.
              </p>
            </div>
          </div>
        </section>

        <section id="problem" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="The Problem"
              title="Street-dog suffering is also a community health and safety issue."
              subtitle="The deeper problem is uncontrolled breeding, weak sterilization access, rabies risk, abandonment, limited shelter capacity, and underfunded humane local systems."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => <Card key={problem.title} {...problem} />)}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-white p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-kalinga-bg text-kalinga-green">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-black">The wrong solution</h3>
                <p className="leading-relaxed text-kalinga-muted">
                  The wrong solution is to collect unlimited dogs without quarantine, veterinary care, adoption throughput, operating funds, and legal compliance. That is not compassion. That becomes suffering in another location.
                </p>
              </div>

              <div className="rounded-3xl bg-kalinga-green p-8 text-white">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <CheckCircle size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-black">The better solution</h3>
                <p className="leading-relaxed text-white/80">
                  A humane model must combine rescue, quarantine, vaccination, sterilization, adoption, foster care, community education, LGU coordination, and transparent donor reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="model" className="scroll-mt-24 bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Our Model"
              title="A complete model, not just a shelter."
              subtitle="The goal is a controlled, veterinary-guided system that prevents suffering instead of endlessly storing dogs."
              center
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => <Card key={program.title} {...program} />)}
            </div>

            <div className="mt-12 rounded-[2rem] bg-kalinga-bg p-8 md:p-10">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-kalinga-green">Operating Principle</p>
              <p className="text-2xl font-black leading-snug text-kalinga-text md:text-4xl">
                Rescue selectively. Quarantine properly. Vaccinate fast. Sterilize consistently. Rehome aggressively. Educate communities. Report transparently. Never become a dog warehouse.
              </p>
            </div>
          </div>
        </section>

        <section id="pilot-plan" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionHeading
                  eyebrow="Pilot Shelter Plan"
                  title="The first goal: a 50-dog modular pilot shelter."
                  subtitle="A controlled pilot is safer, more fundable, and more accountable than building too large too early."
                />

                <div className="rounded-3xl bg-kalinga-deep p-8 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-kalinga-tan">Planning Target</p>
                  <p className="mt-2 text-5xl font-black">₱30M</p>
                  <p className="mt-4 leading-relaxed text-white/80">
                    This is a planning target for institutional partners and founding sponsors. Public donation collection should only be activated after legal, banking, tax, and solicitation compliance are properly in place.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-white p-6 shadow-sm md:p-8">
                <h3 className="mb-6 text-2xl font-black">Pilot facility components</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {pilotComponents.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-kalinga-bg p-4">
                      <CheckCircle size={18} className="mt-0.5 shrink-0 text-kalinga-green" />
                      <p className="text-sm font-semibold text-kalinga-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {budgetItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-white p-7 shadow-sm">
                  <h3 className="mb-3 text-xl font-black">{item.title}</h3>
                  <p className="leading-relaxed text-kalinga-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-kalinga-tan p-8 md:p-10">
              <h3 className="mb-3 text-2xl font-black">Why not build huge immediately?</h3>
              <p className="max-w-4xl leading-relaxed text-kalinga-text/75">
                A large shelter without recurring operating funds becomes a risk to the dogs it is supposed to protect. The pilot model proves care quality, adoption throughput, community impact, and donor reporting before expansion.
              </p>
            </div>
          </div>
        </section>

        <section id="partners" className="scroll-mt-24 bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Partner With Us"
              title="Build this with us."
              subtitle="Kalinga Dogs PH is looking for serious founding partners who can help build the legal, veterinary, operational, and financial foundation of the project before public launch."
              center
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {partnerTypes.map(({ icon: Icon, title, desc, cta }) => (
                <div key={title} className="rounded-3xl border border-border bg-kalinga-bg p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-kalinga-green">
                    <Icon size={25} />
                  </div>
                  <h3 className="mb-3 text-xl font-black">{title}</h3>
                  <p className="mb-6 leading-relaxed text-kalinga-muted">{desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black text-kalinga-green">
                    {cta}
                    <ChevronRight size={17} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="transparency" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Transparency"
              title="Trust must be built before fundraising."
              subtitle="Kalinga Dogs PH is being developed with a commitment to legal registration, animal welfare compliance, financial transparency, and donor-grade reporting."
            />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-kalinga-bg text-kalinga-green">
                  <Scale size={28} />
                </div>
                <h3 className="mb-4 text-2xl font-black">What we will not do</h3>
                <div className="space-y-4">
                  {[
                    "We will not pretend to be fully registered before registration is complete.",
                    "We will not use personal bank accounts for institutional donor funds.",
                    "We will not collect unlimited animals without capacity.",
                    "We will not build a shelter without operating funds.",
                    "We will not publish fake impact numbers.",
                    "We will not use donor logos without permission.",
                    "We will not use pity as a substitute for governance.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle size={18} className="mt-0.5 shrink-0 text-kalinga-green" />
                      <p className="leading-relaxed text-kalinga-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-kalinga-deep p-8 text-white shadow-sm">
                <h3 className="mb-6 text-2xl font-black">Legal and compliance roadmap</h3>
                <div className="space-y-3">
                  {complianceSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kalinga-gold text-sm font-black text-kalinga-deep">
                        {index + 1}
                      </div>
                      <p className="font-semibold text-white/90">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-border bg-white p-8">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-kalinga-green">Future reporting framework</p>
              <p className="mb-6 max-w-3xl leading-relaxed text-kalinga-muted">
                These are the metrics the organization should report once operations begin. No fake numbers should be published before actual programs are active.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Dogs admitted",
                  "Dogs vaccinated",
                  "Dogs sterilized",
                  "Dogs adopted",
                  "Community dogs vaccinated",
                  "Barangays served",
                  "Volunteer hours",
                  "Funds received and spent",
                ].map((metric) => (
                  <div key={metric} className="rounded-2xl bg-kalinga-bg px-4 py-3 text-sm font-bold text-kalinga-text">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Become a founding partner."
                subtitle="The project is currently looking for serious partners, advisers, and supporters who can help build Kalinga Dogs PH properly."
              />

              <div className="space-y-4">
                <div className="flex gap-4 rounded-3xl bg-kalinga-bg p-5">
                  <Mail className="mt-1 text-kalinga-green" size={22} />
                  <div>
                    <p className="font-black">Partnership inquiries</p>
                    <p className="text-kalinga-muted">partners@kalingadogs.ph</p>
                    <p className="mt-1 text-sm text-kalinga-muted">Official contact channels will be finalized after legal registration and domain setup.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-3xl bg-kalinga-bg p-5">
                  <MapPin className="mt-1 text-kalinga-green" size={22} />
                  <div>
                    <p className="font-black">Pilot location</p>
                    <p className="text-kalinga-muted">To be determined through LGU, zoning, flood-risk, and site feasibility review.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-3xl bg-kalinga-bg p-5">
                  <Truck className="mt-1 text-kalinga-green" size={22} />
                  <div>
                    <p className="font-black">Immediate needs</p>
                    <p className="text-kalinga-muted">Veterinary partners, legal/accounting support, LGU contacts, land/site leads, CSR introductions, and serious founding volunteers.</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-kalinga-deep py-14 text-kalinga-bg">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <PawPrint size={22} />
                </div>
                <div>
                  <p className="text-lg font-black">Kalinga Dogs PH</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kalinga-tan">Safer communities. Kinder lives.</p>
                </div>
              </div>
              <p className="max-w-xl leading-relaxed text-white/70">
                Kalinga Dogs Philippines Foundation is a proposed animal welfare and rabies-prevention initiative currently in pre-launch and partnership development stage.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/50">
                This website is for pre-launch partnership development. Public donation collection will only be activated after proper legal, banking, tax, and solicitation compliance.
              </p>
            </div>

            <div>
              <p className="mb-4 font-black">Navigation</p>
              <div className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <a key={item.href} href={item.href} className="block text-white/65 transition hover:text-white">{item.label}</a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 font-black">Build With Us</p>
              <div className="space-y-2">
                {navItems.slice(4).map((item) => (
                  <a key={item.href} href={item.href} className="block text-white/65 transition hover:text-white">{item.label}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
            © 2026 Kalinga Dogs Philippines. Official launch pending legal registration compliance.
          </div>
        </div>
      </footer>
    </div>
  );
}
