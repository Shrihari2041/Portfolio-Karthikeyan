/* ============================================================
   Site content — single source of truth for copy & assets.
   Edit here to update the portfolio's text, services, etc.
   ============================================================ */

import digitalsInfoLogo from './assets/digitals-info-logo.png'
import kfoldLogo from './assets/kfold-logo.png'

// Contact / external links — verify these stay current.
export const links = {
  bookCall:
    'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2a8bsl62M9VITXL8rdJjg0ka4K4FZJ8Qp9AAWswmG6CYUY3Eit6cCLg8xSR2dYEwhVGjZv1LTI',
  whatsapp: 'https://wa.me/916380708804',
  email: 'Karthi@kfold.co',
  phone: '+916380708804',
  phoneDisplay: '+91 63807 08804',
  linkedin: 'https://linkedin.com/in/karthikeyan',
  linkedinDisplay: '/in/karthikeyan',
  digitalsInfo: 'https://www.digitalsinfo.com/',
  kfold: 'https://kfold.co',
}

export const heroStats = [
  { count: 100, suffix: '+', label: 'Businesses supported' },
  { count: 5, suffix: '+', label: 'Years of experience' },
  { count: 5, suffix: '', label: 'Countries served' },
]

// Line-icon path sets (24x24)
export const icons = {
  website: ['M3 5h18v12H3z', 'M3 9h18', 'M8 21h8', 'M12 17v4'],
  marketing: ['M3 11l14-6v14L3 13v-2z', 'M17 8a4 4 0 0 1 0 8', 'M7 13v5a2 2 0 0 0 4 0v-4'],
  data: ['M12 3a9 9 0 1 0 9 9h-9V3z', 'M15 3.5A9 9 0 0 1 20.5 9H15V3.5z'],
  branding: ['M12 3l2 4 4.5.5-3.3 3.2.8 4.5L12 13l-4 2.2.8-4.5L5.5 7.5 10 7l2-4z', 'M5 18h14'],
  ai: ['M12 8V4', 'M8 4h8', 'M5 8h14v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8z', 'M9 13h.01', 'M15 13h.01'],
  whatsapp: [
    'M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.3A8.5 8.5 0 1 1 21 11.5z',
    'M8.5 9.5c.5 2.5 3 5 5.5 5.5l1.5-1.5 2 1-.5 2c-4.5.5-9-4-8.5-8.5l2-.5 1 2z',
  ],
}

export const services = [
  {
    icon: icons.website,
    title: 'Websites That Win Trust',
    desc: 'A professional website that makes customers choose you — fast, mobile-friendly, and built to convert visitors into enquiries.',
    tags: ['Business Websites', 'E-commerce', 'Maintenance'],
  },
  {
    icon: icons.marketing,
    title: 'Marketing That Brings Customers',
    desc: 'Reach the right people and generate quality leads with practical, performance-driven campaigns.',
    tags: ['Google Ads', 'Meta Ads', 'SEO', 'Social Media'],
  },
  {
    icon: icons.data,
    title: 'Know Your Numbers',
    desc: 'Interactive dashboards and clear reports that show exactly how your business is performing.',
    tags: ['Power BI', 'Analytics', 'KPI Dashboards'],
  },
  {
    icon: icons.branding,
    title: 'Branding & Creative Design',
    desc: 'A memorable brand identity that communicates professionalism — from logo to marketing creatives.',
    tags: ['Logo Design', 'Brand Identity', 'Brochures'],
  },
  {
    icon: icons.ai,
    title: 'AI & Automation',
    desc: 'Save hours every week by automating repetitive tasks and adding AI-powered workflows to your business.',
    tags: ['Workflow Automation', 'AI Integration', 'Custom Solutions'],
  },
]

export const steps = [
  {
    num: '01',
    title: 'Free Discovery Call',
    desc: 'We talk about your business, your customers, and what growth looks like for you. No jargon, no pressure.',
  },
  {
    num: '02',
    title: 'A Clear Plan & Build',
    desc: 'You get a straightforward proposal with scope, timeline, and cost — then my team builds it, keeping you updated.',
  },
  {
    num: '03',
    title: 'Launch, Measure, Grow',
    desc: 'We launch, track real results, and keep improving. You always know what is working and why.',
  },
]

export const aboutStats = [
  { count: 100, suffix: '+', text: null, label: 'Businesses empowered' },
  { count: 2, suffix: '', text: null, label: 'Specialized companies' },
  { count: null, suffix: '', text: 'End-to-End', label: 'Growth solutions' },
]

export const ventures = [
  {
    name: 'Digitals Info',
    logo: digitalsInfoLogo,
    url: links.digitalsInfo,
    tagline: 'Digital marketing & web development',
    desc: 'Helps businesses establish a strong digital presence and generate measurable growth through websites, branding, and performance advertising.',
    tags: ['Websites', 'SEO', 'Google Ads', 'Meta Ads', 'Branding'],
  },
  {
    name: 'kfold.co',
    logo: kfoldLogo,
    url: links.kfold,
    tagline: 'Business intelligence & data',
    desc: 'Empowers organizations with analytics, automation, and AI solutions that turn business data into confident decisions.',
    tags: ['Power BI', 'Data Analytics', 'AI & Automation', 'IT Staffing'],
  },
]

export const industries = [
  'Healthcare',
  'Manufacturing',
  'Real Estate',
  'Interior Design',
  'Retail',
  'Education',
  'Logistics',
  'Professional Services',
  'E-commerce',
]

export const testimonials = [
  {
    quote:
      'Working with Karthikeyan transformed our online presence. The strategies were practical, transparent, and delivered quality leads.',
    initials: 'PP',
    role: 'Founder',
    company: 'Premium Palace Interior Design',
  },
  {
    quote:
      'The Power BI dashboards gave us complete visibility into our business performance. Reporting became faster and decisions became easier.',
    initials: 'EM',
    role: 'Co-Founder',
    company: 'Erth Manufacturing Company',
  },
  {
    quote:
      'From website development to digital marketing, everything was handled professionally. We finally had a growth partner, not just a service provider.',
    initials: 'HQ',
    role: 'Managing Director',
    company: 'HomeIQ Automation',
  },
]

export const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#ventures', label: 'Companies' },
  { href: '#testimonials', label: 'Results' },
]
