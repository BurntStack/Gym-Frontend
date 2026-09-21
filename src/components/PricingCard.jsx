import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'

const rupee = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`

export default function PricingCard({ plan, cycle, index }) {
  const price = plan.monthly * (1 - cycle.discount)
  const featured = plan.highlight

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`relative flex flex-col rounded-2xl border p-7 ${
        featured
          ? 'border-accent bg-white shadow-soft ring-1 ring-accent'
          : 'border-ink/10 bg-white shadow-card'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {plan.badge}
        </span>
      )}

      <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
        {plan.name}
      </h3>
      <p className="mt-1 text-sm text-ink-muted">{plan.blurb}</p>

      <div className="mt-5 flex items-end gap-1">
        <span className="font-display text-4xl font-bold text-ink">{rupee(price)}</span>
        <span className="mb-1.5 text-sm text-ink-muted">{cycle.unit}</span>
      </div>
      {cycle.discount > 0 && (
        <p className="mt-1 text-xs font-medium text-accent">
          Save {Math.round(cycle.discount * 100)}% · billed {cycle.label.toLowerCase()}
        </p>
      )}

      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollToSection('contact')}
        className={`mt-7 w-full ${featured ? 'btn-primary' : 'btn-outline'}`}
      >
        Choose Plan
      </button>
    </motion.div>
  )
}
