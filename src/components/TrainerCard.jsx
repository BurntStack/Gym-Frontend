import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube } from 'lucide-react'
import Image from './ui/Image'
import { img } from '../utils/images'

export default function TrainerCard({ trainer, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={img(trainer.photo, 500)}
          alt={`${trainer.name}, ${trainer.role}`}
          className="h-full w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
          {trainer.name}
        </h3>
        <p className="text-sm text-accent">{trainer.role}</p>
        <p className="mt-2 text-xs text-ink-muted">
          {trainer.experience} · {trainer.certifications[0]}
        </p>
        <div className="mt-4 flex gap-2">
          {[Instagram, Facebook, Youtube].map((I, i) => (
            <a
              key={i}
              href="#"
              aria-label={`${trainer.name} social link`}
              className="grid h-8 w-8 place-items-center rounded-full border border-ink/10 text-ink-soft transition hover:border-accent hover:bg-accent hover:text-white"
            >
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
