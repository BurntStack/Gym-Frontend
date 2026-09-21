import { Dumbbell } from 'lucide-react'
import Icon from './ui/Icon'
import { BRAND, CONTACT, NAV_LINKS, SOCIALS, HOURS } from '../data/site'
import { scrollToSection } from '../utils/scroll'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="container-x py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent">
                <Dumbbell className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                {BRAND.name}<span className="text-accent"> {BRAND.nameAccent}</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Premium coaching and modern equipment to help you become your strongest self.
            </p>
            <div className="mt-4 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-ink/10 text-ink-soft transition hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider2 text-ink">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <button onClick={() => scrollToSection(l.to)} className="text-sm text-ink-muted hover:text-accent">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider2 text-ink">Contact</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>{CONTACT.addressLine1}<br />{CONTACT.addressLine2}</li>
              <li><a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-accent">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-accent">{CONTACT.email}</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider2 text-ink">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              {HOURS.map((h) => (
                <li key={h.day}>{h.day}<br /><span className="font-medium text-ink-soft">{h.time}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name} {BRAND.nameAccent}. All Rights Reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms'].map((t) => (
              <a key={t} href="#" className="hover:text-accent">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
