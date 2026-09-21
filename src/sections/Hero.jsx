import { motion } from 'framer-motion'
import { ArrowRight, Phone, Star } from 'lucide-react'
import { img, PHOTOS } from '../utils/images'
import { STATS, CONTACT } from '../data/site'
import Counter from '../components/ui/Counter'
import { scrollToSection } from '../utils/scroll'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Full-page background image */}
      <div className="absolute inset-0">
        <img
          src={img(PHOTOS.heroAthlete, 1920)}
          alt="Athlete training at IRONCORE Fitness"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Overlays so the text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      </div>

      {/* Text over the image */}
      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider2 text-accent"
        >
          <span className="h-px w-6 bg-accent" />
          Premium Gym & Fitness Center
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-2xl font-display font-bold uppercase leading-[0.95] tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl"
        >
          Build A Body
          <br />
          You’re <span className="text-accent">Proud Of</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 max-w-md text-base sm:text-lg text-white/80 leading-relaxed"
        >
          Expert coaching, modern equipment and a community that keeps you going.
          Start your fitness journey at IRONCORE today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <button onClick={() => scrollToSection('membership')} className="btn-primary group">
            View Membership
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="btn inline-flex border border-white/40 px-6 py-3 text-white hover:bg-white hover:text-ink"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-7 flex items-center gap-2 text-sm text-white/85"
        >
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </span>
          <span className="font-semibold">4.9/5</span>
          <span className="text-white/60">from 500+ happy members</span>
        </motion.div>

        {/* Trust stats over the image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-accent/70 pl-3">
              <p className="font-display text-2xl font-bold leading-none text-white sm:text-3xl">
                <Counter value={s.value} />
                <span className="text-accent">{s.suffix}</span>
              </p>
              <p className="mt-1 text-xs text-white/65">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
