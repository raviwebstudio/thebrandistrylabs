import {
  AuditIcon,
  ChartIcon,
  CompassIcon,
  FunnelIcon,
  InstagramIcon,
  LinkedInIcon,
  MegaphoneIcon,
  RocketIcon,
  ScaleIcon,
  SearchIcon,
  SparkIcon,
  XIcon,
} from './Icons.jsx'

export const services = [
  {
    title: 'Performance Marketing',
    description:
      'Profit-focused media buying for brands that need stronger ROAS, lower waste, and clearer growth signals.',
    icon: ChartIcon,
  },
  {
    title: 'Paid Ads',
    description:
      'Meta, Google, and YouTube campaigns built to turn attention into qualified demand and steady revenue.',
    icon: MegaphoneIcon,
  },
  {
    title: 'SEO Growth',
    description:
      'Search visibility strategies that capture high-intent traffic and compound lead flow over time.',
    icon: SearchIcon,
  },
  {
    title: 'Social Media Strategy',
    description:
      'Positioning, messaging, and content systems that help personal brands and businesses earn trust faster.',
    icon: SparkIcon,
  },
  {
    title: 'Funnel Optimization',
    description:
      'Landing page and checkout improvements that convert more clicks into customers without chasing more spend.',
    icon: FunnelIcon,
  },
  {
    title: 'Growth Strategy',
    description:
      'Channel planning, offer refinement, and reporting frameworks that keep eCommerce, startups, and local brands moving.',
    icon: CompassIcon,
  },
]

export const caseStudies = [
  {
    client: 'Aurelia Skincare',
    clientType: 'E-commerce brand',
    problem: 'Paid social spend kept rising while blended return flattened quarter after quarter.',
    solution: 'We rebuilt creative testing, improved landing page continuity, and tightened retargeting windows.',
    result: '4.2X ROAS',
    detail: 'Monthly revenue climbed 118% within 90 days while acquisition stayed efficient.',
  },
  {
    client: 'Northlane Interiors',
    clientType: 'Local service business',
    problem: 'Organic visibility was weak and high-intent category pages were barely ranking.',
    solution: 'We restructured the SEO roadmap, upgraded service pages, and aligned content with buyer intent.',
    result: '+186% SEO Traffic',
    detail: 'Qualified search sessions grew fast and non-brand leads jumped 3.4X.',
  },
  {
    client: 'Vanta Health',
    clientType: 'Startup',
    problem: 'Lead volume looked healthy, but demo quality and sales conversion stayed inconsistent.',
    solution: 'We refined targeting, sharpened the message hierarchy, and reduced friction across demo flows.',
    result: '-38% CAC',
    detail: 'Pipeline quality improved and paid acquisition became far more predictable.',
  },
  {
    client: 'Atlas Mobility',
    clientType: 'Local business',
    problem: 'Service-area campaigns were spending, but weak tracking made optimization almost impossible.',
    solution: 'We fixed conversion tracking, rebuilt landing flows, and tightened keyword-to-offer alignment.',
    result: '3X ROI',
    detail: 'Core acquisition markets began generating consistent, measurable returns.',
  },
  {
    client: 'Maison Commerce',
    clientType: 'E-commerce brand',
    problem: 'Launch campaigns drove spikes in traffic, yet product page conversion stalled after week one.',
    solution: 'We rebuilt remarketing, sequenced offers better, and optimized conversion points across product pages.',
    result: '+120% Revenue Growth',
    detail: 'The brand turned launch momentum into a reliable month-over-month revenue climb.',
  },
  {
    client: 'SaaS Demand Studio',
    clientType: 'B2B startup',
    problem: 'Clicks were coming in, but booked demos and qualified pipeline still lagged.',
    solution: 'We repositioned offers, improved form intent, and aligned ad copy with downstream sales quality.',
    result: '+64% SQLs',
    detail: 'The sales team saw stronger-fit leads and a healthier demo-to-close path.',
  },
  {
    client: 'Creator Edge',
    clientType: 'Personal brand',
    problem: 'Audience attention was growing, but coaching applications and webinar signups were inconsistent.',
    solution: 'We clarified the value proposition, rebuilt the funnel, and introduced higher-intent nurture flows.',
    result: '2.8X Lead Volume',
    detail: 'Applications increased without sacrificing lead quality or response speed.',
  },
  {
    client: 'Harvest Dental',
    clientType: 'Local clinic',
    problem: 'Search traffic brought visits, but appointment bookings from ads were too expensive.',
    solution: 'We localized campaign structure, simplified landing content, and optimized calls-to-action for mobile.',
    result: '-42% Cost Per Booking',
    detail: 'Appointment demand became steadier while lead costs dropped sharply.',
  },
  {
    client: 'Nexa Cart',
    clientType: 'DTC startup',
    problem: 'The store had strong products, but abandoned carts and weak upsell flows slowed scale.',
    solution: 'We improved offer sequencing, sharpened checkout messaging, and added retention-focused remarketing.',
    result: '+29% AOV',
    detail: 'Average order value and repeat purchase momentum both improved within one quarter.',
  },
]

export const testimonials = [
  {
    quote:
      'They helped us scale to 4X revenue in 3 months without making the brand feel generic or over-marketed.',
    name: 'Anika Shah',
    businessType: 'Founder, DTC skincare brand',
  },
  {
    quote:
      'The reporting was clear, the execution was fast, and we finally knew which channels were actually driving revenue.',
    name: 'Rahul Mehta',
    businessType: 'Owner, local home services business',
  },
  {
    quote:
      'We came in needing better leads, not more noise. The Brandistry Labs fixed the funnel and the quality of inbound improved quickly.',
    name: 'Mira Collins',
    businessType: 'Growth lead, B2B startup',
  },
]

export const whyChooseUs = [
  {
    title: 'Data-driven strategies',
    description:
      'We make decisions using channel data, conversion signals, and revenue trends instead of guesswork.',
    icon: AuditIcon,
  },
  {
    title: 'ROI-focused campaigns',
    description:
      'Every campaign is built around profitable acquisition, stronger conversion rates, and better payback.',
    icon: ChartIcon,
  },
  {
    title: 'Fast execution',
    description:
      'Senior-led delivery keeps strategy, creative, and optimization moving without agency bottlenecks.',
    icon: RocketIcon,
  },
  {
    title: 'Transparent reporting',
    description:
      'Weekly reporting makes it easy to see what changed, what performed, and what comes next.',
    icon: ScaleIcon,
  },
]

export const growthPlans = [
  {
    eyebrow: 'Starter Growth Plan',
    name: 'Best for brands ready to tighten acquisition and conversion.',
    description:
      'A focused engagement for founders who need sharp strategy, faster execution, and clear reporting.',
    items: ['Paid ads setup', 'Funnel optimization', 'Weekly reporting'],
    ctaLabel: 'Book Free Consultation',
    ctaHref: '#contact',
    featured: true,
  },
  {
    eyebrow: 'Scale Accelerator',
    name: 'Built for teams that want to push growth harder without adding complexity.',
    description:
      'Ideal when you need continuous testing, channel optimization, and creative iteration under one roof.',
    items: ['Creative testing roadmap', 'Landing page refinements', 'Performance reviews'],
    ctaLabel: 'See How We Work',
    ctaHref: '#process',
    featured: false,
  },
]

export const processSteps = [
  {
    title: 'Audit',
    description:
      'We identify the messaging gaps, channel leaks, and conversion blockers holding back profitable growth.',
    icon: AuditIcon,
  },
  {
    title: 'Strategy',
    description:
      'We build a focused growth plan around audience, offer, creative, and measurable revenue goals.',
    icon: CompassIcon,
  },
  {
    title: 'Execution',
    description:
      'We launch campaigns, creatives, and landing page improvements with tight testing cycles and quick feedback.',
    icon: RocketIcon,
  },
  {
    title: 'Scale',
    description:
      'We double down on what converts, improve efficiency, and keep reporting transparent as the account grows.',
    icon: ScaleIcon,
  },
]

export const trustStats = [
  { value: '50+', label: 'Trusted by brands' },
  { value: '3X', label: 'Average ROI' },
  { value: '100+', label: 'Campaigns managed' },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const footerNavItems = navItems

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
]

export const contactDetails = {
  email: 'hello@thebrandistrylabs.com',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsappHref: 'https://wa.me/919876543210',
}
