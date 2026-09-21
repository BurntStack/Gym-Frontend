import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import PricingCard from '../components/PricingCard'
import { BILLING_CYCLES, PLANS } from '../data/memberships'

export default function Membership() {
  const [cycleId, setCycleId] = useState('monthly')
  const cycle = BILLING_CYCLES.find((c) => c.id === cycleId)

  return (
    <section id="membership" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Membership"
          title="Simple, Honest"
          highlight="Pricing"
          subtitle="No hidden fees. Cancel or upgrade anytime. Pick the plan that fits your goals."
        />

        {/* Billing switcher */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-ink/10 bg-white p-1">
            {BILLING_CYCLES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCycleId(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  cycleId === c.id ? 'bg-accent text-white' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <PricingCard key={p.id} plan={p} cycle={cycle} index={i} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-muted">
          * Prices are examples and can be customized. Applicable taxes may apply.
        </p>
      </div>
    </section>
  )
}
