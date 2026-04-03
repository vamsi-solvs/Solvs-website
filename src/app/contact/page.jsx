"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  X,
  Send,
  CheckCircle2,
  Briefcase,
  Clock,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

/* ─── Job Postings ─────────────────────────────────────────── */
const jobPostings = [
  {
    id: "1",
    title: "Junior Architect",
    department: "Architecture",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "We are seeking a Junior Architect with 1–2 years of experience to support our design team in producing drawings, concepts, and project documentation.",
    email: "careers@company.com",
  },
  {
    id: "2",
    title: "Civil Engineer – Project & Site Coordinator",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "Looking for a Civil Engineer to manage site coordination, project scheduling, vendor supervision, and quality control for ongoing architectural projects.",
    email: "careers@company.com",
  },
  {
    id: "3",
    title: "Freelance 3D Visualizer / AI Visualizer",
    department: "Visualization",
    location: "Remote",
    type: "Freelance",
    description:
      "We are looking for talented freelance 3D and AI visualizers for creating high-quality renders, conceptual visuals, and presentation imagery for architectural projects.",
    email: "careers@company.com",
  },
];

/* ─── Reusable fade-in wrapper using framer-motion ─────────── */
function FadeIn({ children, delay = 0, x = 0, y = 50, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Career Card ───────────────────────────────────────────── */
function CareerCard({ title, department, location, type, description, email, index }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleApply = () => {
    const subject = encodeURIComponent(`Application for ${title}`);
    const body = encodeURIComponent(
      `Dear Hiring Manager,\n\nI am writing to express my interest in the ${title} position.\n\nBest regards,`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
      className="border border-gray-200 p-8 hover:border-gray-900 transition-colors duration-300 group"
    >
      {/* Header */}
      <div className="mb-5">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{department}</p>
        <h3 className="text-xl font-normal text-gray-900 leading-snug">{title}</h3>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-500">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} strokeWidth={1.5} /> {location}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={14} strokeWidth={1.5} /> {type}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase size={14} strokeWidth={1.5} /> {department}
        </span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p
          className="text-gray-600 text-sm leading-relaxed transition-all duration-300"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: expanded ? "unset" : 2,
            overflow: "hidden",
          }}
        >
          {description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1.5 text-xs text-gray-400 hover:text-gray-900 flex items-center gap-1 transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            size={12}
            style={{
              transform: expanded ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.2s",
            }}
          />
        </button>
      </div>

      {/* Apply button */}
      <button
        onClick={handleApply}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-700 transition-colors duration-200"
      >
        <Mail size={14} strokeWidth={1.5} />
        Apply via Email
      </button>
    </motion.div>
  );
}

/* ─── Contact Form ──────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const inputClass = (name) =>
    `w-full border-b py-3 text-sm text-gray-900 bg-transparent outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-gray-900 ${
      errors[name] ? "border-red-400" : "border-gray-200"
    }`;

  return (
    <FadeIn y={30}>
      {sent ? (
        <div className="flex flex-col items-start gap-4 py-12">
          <CheckCircle2 className="text-gray-900 w-10 h-10" strokeWidth={1.5} />
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-1">Message received.</h4>
            <p className="text-gray-500 text-sm">We'll be in touch within 1–2 business days.</p>
          </div>
          <button
            onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
            className="mt-2 text-sm text-gray-400 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: "" })); }}
                className={inputClass("name")}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Email</label>
              <input
                type="email"
                placeholder="jane@email.com"
                value={form.email}
                onChange={(e) => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: "" })); }}
                className={inputClass("email")}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              value={form.subject}
              onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
              className={inputClass("subject")}
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project or idea..."
              value={form.message}
              onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: "" })); }}
              className={`${inputClass("message")} resize-none`}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <Send size={14} strokeWidth={1.5} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </FadeIn>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] overflow-hidden">
        {/* Left — Headline */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl w-full">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's <br />Connect
            </motion.h1>
            <motion.p
              className="mt-6 text-gray-500 max-w-sm text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Whether you're looking to collaborate, build something meaningful,
              or join our studio — we're always open to conversations.
            </motion.p>

            {/* ── Open Positions teaser ── */}
            <motion.div
              className="mt-10 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                {jobPostings.length} Open Positions
              </p>
              <div className="flex flex-col gap-2">
                {jobPostings.map((job, i) => (
                  <motion.a
                    key={job.id}
                    href="#careers"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                    className="group flex items-center justify-between text-sm text-gray-900 hover:text-gray-500 transition-colors duration-200 py-2 border-b border-gray-100 last:border-0"
                  >
                    <span>{job.title}</span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                      {job.type} &middot; {job.location}
                    </span>
                  </motion.a>
                ))}
              </div>
              <a
                href="#careers"
                className="mt-5 inline-flex items-center gap-2 text-sm text-gray-900 group"
              >
                View all positions
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-[50vw] md:h-[90vh] p-6 sm:p-8 md:p-12 lg:p-16 z-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
              alt="Office of Architecture studio"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </motion.div>

        {/* ── Scroll indicator pinned to bottom ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} strokeWidth={1.5} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CONTACT INFO ─────────────────────────────────────── */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 border-t border-gray-100">
        <FadeIn y={30}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* General Inquiries */}
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-4">General Inquiries</h3>
              <div className="space-y-3">
                <a
                  href="mailto:ofa@gmail.com"
                  className="flex items-center gap-3 text-gray-900 text-sm group"
                >
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" strokeWidth={1.5} />
                  <span className="group-hover:underline underline-offset-4">ofa@gmail.com</span>
                </a>
                <a
                  href="tel:+919845537772"
                  className="flex items-center gap-3 text-gray-900 text-sm group"
                >
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" strokeWidth={1.5} />
                  <span className="group-hover:underline underline-offset-4">+91 98455 37772</span>
                </a>
              </div>
            </div>

            {/* Studio Address */}
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-4">Studio</h3>
              <a
                href="https://maps.google.com/?q=934+HRBR+Layout+Kalyan+Nagar+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-gray-900 text-sm group"
              >
                <MapPin className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <p className="leading-relaxed group-hover:underline underline-offset-4">
                  934, HRBR Layout<br />
                  Kalyan Nagar, Bengaluru<br />
                  Karnataka 560043
                </p>
              </a>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm text-gray-900">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Mon – Fri</span>
                  <span>9:00 – 18:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Saturday</span>
                  <span>10:00 – 14:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Us</h3>
              <div className="flex items-center gap-5">
                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <Facebook className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a href="https://www.instagram.com/officeofarchitecture/" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <Youtube className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── WRITE TO US ──────────────────────────────────────── */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 border-t border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — label + blurb */}
          <FadeIn x={-40} y={0}>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Write to Us</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
              Start a<br />Conversation
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Tell us about your project, a collaboration idea, or anything else.
              We typically respond within 1–2 business days.
            </p>
          </FadeIn>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </section>

      {/* ── CAREERS ──────────────────────────────────────────── */}
      <section
        id="careers"
        className="px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 border-t border-gray-100"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <FadeIn y={30}>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Careers</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Join Our Studio
            </h2>
            <p className="text-gray-500 mt-3 max-w-md text-sm leading-relaxed">
              Work on meaningful projects and grow alongside a team of architects, engineers,
              and designers who care deeply about craft.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <span className="text-sm text-gray-400">{jobPostings.length} open positions</span>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPostings.map((job, i) => (
            <CareerCard key={job.id} {...job} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.1} y={20}>
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100 pt-10">
            <div>
              <p className="text-gray-900 font-normal">Don't see a role that fits?</p>
              <p className="text-gray-500 text-sm mt-0.5">We're always looking for great people.</p>
            </div>
            <a
              href="mailto:careers@company.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-700 transition-colors duration-200"
            >
              <Mail size={14} strokeWidth={1.5} />
              Send Your Portfolio
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER CREDIT ────────────────────────────────────── */}
      <div className="border-t border-gray-100 px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        <p className="text-xs text-gray-400 text-center">
          Designed and developed by{" "}
          <Link
            href="https://www.solvs.co"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-gray-900 transition-colors"
          >
            Solvs
          </Link>
        </p>
      </div>

    </div>
  );
}