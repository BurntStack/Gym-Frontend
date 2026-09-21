import Reveal from './Reveal'

// Consistent section header: eyebrow + title + optional subtitle.
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-3">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="h-section">
        {title} {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-ink-muted leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  )
}
