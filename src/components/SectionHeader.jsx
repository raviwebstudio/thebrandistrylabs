function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header" data-reveal="up">
      <span className="section-tag">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionHeader
