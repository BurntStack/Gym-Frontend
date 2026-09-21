import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { SCHEDULE } from '../data/classes'

export default function ClassSchedule() {
  return (
    <section id="schedule" className="section bg-sand">
      <div className="container-x">
        <SectionHeading
          eyebrow="Group Classes"
          title="Weekly"
          highlight="Timetable"
          subtitle="Included with Pro & Elite memberships. Just show up and train with the group."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCHEDULE.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card"
            >
              <h3 className="mb-4 font-display text-xl font-semibold uppercase tracking-wide text-ink">
                {day.day}
              </h3>
              <div className="space-y-2.5">
                {day.sessions.map((s, j) => (
                  <div key={j} className="flex items-center justify-between rounded-lg bg-sand px-3 py-2.5">
                    <div>
                      <p className="text-sm font-semibold text-ink">{s.name}</p>
                      <p className="text-xs text-ink-muted">Coach {s.coach}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                      <Clock className="h-3.5 w-3.5" />
                      {s.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
