import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dumbbell, Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useLockBody } from '../hooks/useLockBody'
import { scrollToSection } from '../utils/scroll'

export default function Navbar() {
  const scrolled = useScrolled(30)
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => NAV_LINKS.map((l) => l.to), [])
  const active = useScrollSpy(ids)
  useLockBody(open)

  const go = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md border-b border-ink/10 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => go('home')} className="flex items-center gap-2.5" aria-label="IRONCORE FITNESS home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent">
              <Dumbbell className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
              {BRAND.name}<span className="text-accent"> {BRAND.nameAccent}</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => go(link.to)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    active === link.to ? 'text-accent' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button onClick={() => go('contact')} className="btn-primary hidden sm:inline-flex text-sm px-5 py-2.5">
              Join Now
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-ink/15 text-ink"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-xs bg-cream border-l border-ink/10 p-6 pt-20 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <button
                      onClick={() => go(link.to)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition ${
                        active === link.to ? 'bg-accent-soft text-accent' : 'text-ink-soft hover:bg-sand'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={() => go('contact')} className="btn-primary mt-5 w-full">
                Join Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
