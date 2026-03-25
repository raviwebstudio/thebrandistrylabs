function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      {children}
    </svg>
  )
}

export function ChartIcon() {
  return (
    <IconBase>
      <path d="M4 19h16" />
      <path d="M7 15.5 11 11l3 3 5-6" />
      <path d="M16 8h3v3" />
    </IconBase>
  )
}

export function SearchIcon() {
  return (
    <IconBase>
      <circle cx="11" cy="11" r="5.5" />
      <path d="m16 16 4 4" />
    </IconBase>
  )
}

export function MegaphoneIcon() {
  return (
    <IconBase>
      <path d="M4 12v-2a2 2 0 0 1 2-2h3l7-3v14l-7-3H6a2 2 0 0 1-2-2v-2Z" />
      <path d="m8 16 1.5 4" />
    </IconBase>
  )
}

export function SparkIcon() {
  return (
    <IconBase>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </IconBase>
  )
}

export function FunnelIcon() {
  return (
    <IconBase>
      <path d="M4 6h16l-6.5 7.5v4.5l-3 1v-5.5L4 6Z" />
    </IconBase>
  )
}

export function AuditIcon() {
  return (
    <IconBase>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8.5 9h7" />
      <path d="M8.5 13h7" />
      <path d="M8.5 17h4" />
    </IconBase>
  )
}

export function CompassIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="8" />
      <path d="m10 14 2-6 2 2-4 4Z" />
    </IconBase>
  )
}

export function RocketIcon() {
  return (
    <IconBase>
      <path d="M14.5 5.5c3 1 4 4.5 4 4.5s-1 3.5-4 4.5l-4 4-1.5-5.5 5.5-7.5Z" />
      <path d="M8 13 5 16" />
      <path d="m6 18-1 1" />
    </IconBase>
  )
}

export function ScaleIcon() {
  return (
    <IconBase>
      <path d="M12 4v16" />
      <path d="M6 8h12" />
      <path d="m6 8-3 5h6l-3-5Z" />
      <path d="m18 8-3 5h6l-3-5Z" />
      <path d="M8 20h8" />
    </IconBase>
  )
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5.3 9.8h2.4V18H5.3V9.8Zm4 0h2.3V11h.1c.3-.6 1.1-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.5V18h-2.4v-3.5c0-1.6 0-2.9-1.8-2.9s-2 1.4-2 2.8V18H9.3V9.8Z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.8 7.2h.01" />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 5h3.6l4 5.2L17 5h2l-5.5 6.4L19.2 19h-3.6l-4.2-5.5L6.6 19h-2l5.7-6.7L5 5Z" />
    </svg>
  )
}
