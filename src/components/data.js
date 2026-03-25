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
      'Full-funnel media buying that sharpens CAC, scales winners, and turns demand into predictable revenue.',
    icon: ChartIcon,
  },
  {
    title: 'SEO Growth',
    description:
      'Search strategies built to compound organic traffic and capture high-intent demand.',
    icon: SearchIcon,
  },
  {
    title: 'Paid Ads',
    description:
      'Creative-led campaigns across Meta, Google, and YouTube with constant testing loops.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Social Media Strategy',
    description:
      'Positioning, content systems, and channel planning designed to grow relevance and response.',
    icon: SparkIcon,
    modifier: 'service-card--wide',
  },
  {
    title: 'Conversion Optimization',
    description:
      'Landing page and funnel improvements that turn traffic spikes into bottom-line gains.',
    icon: FunnelIcon,
  },
]

export const caseStudies = [
  {
    client: 'Aurelia Skincare',
    problem: 'Paid social spend was rising while blended return kept flattening quarter over quarter.',
    result: '4.2x ROAS',
    outcome: 'Scaled monthly revenue by 118% in 90 days through creative testing and funnel cleanup.',
    reveal: 'left',
  },
  {
    client: 'Northlane Interiors',
    problem: 'Organic traffic was stagnant and high-intent category pages were invisible on search.',
    result: '+186% SEO Traffic',
    outcome: 'Lifted qualified sessions and generated a 3.4x increase in non-brand leads from search.',
    reveal: 'right',
  },
  {
    client: 'Vanta Health',
    problem: 'Lead volume looked healthy, but demo quality and downstream conversion were inconsistent.',
    result: '-38% CAC',
    outcome: 'Refined channel mix, messaging, and CRO to improve sales-qualified pipeline efficiency.',
    reveal: 'left',
  },
  {
    client: 'Atlas Mobility',
    problem: 'Service-area campaigns were spending efficiently, but conversion tracking and landing page alignment were weak.',
    result: '3X ROI',
    outcome: 'Connected paid search with tighter landing flows to triple campaign return across core acquisition markets.',
    reveal: 'up',
  },
  {
    client: 'Maison Commerce',
    problem: 'Launch campaigns drove traffic spikes, yet product page conversion and repeat engagement stalled after week one.',
    result: '120% Growth',
    outcome: 'Rebuilt remarketing and offer sequencing to turn launch momentum into consistent month-over-month revenue growth.',
    reveal: 'up',
  },
  {
    client: 'SaaS Demand Studio',
    problem: 'Plenty of clicks were coming in, but booked demos and qualified pipeline were still inconsistent.',
    result: '+64% SQLs',
    outcome: 'Refined messaging, channel targeting, and form friction to improve the quality of inbound opportunities.',
    reveal: 'up',
  },
]

export const processSteps = [
  {
    title: 'Audit',
    description: 'We diagnose the funnel, messaging gaps, media mix, and the leaks slowing growth.',
    icon: AuditIcon,
  },
  {
    title: 'Strategy',
    description: 'We define the growth thesis, priorities, and KPIs around revenue, not vanity metrics.',
    icon: CompassIcon,
  },
  {
    title: 'Execution',
    description: 'We launch creatives, campaigns, landing pages, and testing systems with tight feedback loops.',
    icon: RocketIcon,
  },
  {
    title: 'Scale',
    description: 'We double down on what converts, improve efficiency, and unlock the next growth ceiling.',
    icon: ScaleIcon,
  },
]

export const trustStats = [
  { value: '50+', label: 'Clients' },
  { value: '3X', label: 'Average ROI Focus' },
  { value: '100+', label: 'Campaigns Launched' },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const footerNavItems = navItems.slice(0, 4)

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
]

export const contactDetails = {
  email: 'hello@thebrandistrylabs.com',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
}
