import { motion } from 'framer-motion'
import Image from './ui/Image'
import { img } from '../utils/images'

export default function ProgramCard({ program, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition-shadow hover:shadow-soft"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={img(program.photo, 600)}
          alt={program.name}
          className="h-full w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink">
          {program.difficulty}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
          {program.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{program.desc}</p>
      </div>
    </motion.article>
  )
}
