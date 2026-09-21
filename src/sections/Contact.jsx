import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, MessageCircle, Navigation, MapPin, Mail, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { CONTACT, HOURS } from '../data/site'

const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`
const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`

const empty = { name: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name'
    if (!/^[0-9+\-\s]{8,15}$/.test(form.phone.trim())) err.phone = 'Enter a valid phone number'
    if (!form.message.trim()) err.message = 'Please add a short message'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    // Demo submit — connect to a real API/email service to go live.
    setTimeout(() => setStatus('success'), 1000)
  }

  const info = [
    { icon: MapPin, title: 'Address', body: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}` },
    { icon: Phone, title: 'Phone', body: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
    { icon: Mail, title: 'Email', body: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ]

  return (
    <section id="contact" className="section bg-sand">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Visit Us Or"
          highlight="Book A Free Trial"
          subtitle="Come see the gym, meet the team, or drop us a message — we’ll get back to you quickly."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Left: info + hours + map */}
          <div className="space-y-4">
            {info.map(({ icon: I, title, body, href }) => (
              <Reveal key={title} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <I className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  {href ? (
                    <a href={href} className="text-sm text-ink-muted hover:text-accent">{body}</a>
                  ) : (
                    <p className="text-sm text-ink-muted">{body}</p>
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal className="rounded-2xl border border-ink/10 bg-white p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Clock className="h-4 w-4 text-accent" /> Opening Hours
              </p>
              <div className="mt-2 space-y-1">
                {HOURS.map((h) => (
                  <p key={h.day} className="flex justify-between text-sm text-ink-muted">
                    <span>{h.day}</span>
                    <span className="font-medium text-ink-soft">{h.time}</span>
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="IRONCORE Fitness location map"
                src={CONTACT.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-44 w-full"
              />
            </Reveal>

            <div className="grid grid-cols-2 gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href={directions} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Navigation className="h-4 w-4" /> Directions
              </a>
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1} className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-7 shadow-card">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-white">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-ink">Thank You!</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-muted">
                    Thanks {form.name.split(' ')[0]}, we’ve received your message and will call you shortly.
                  </p>
                  <button onClick={() => { setForm(empty); setStatus('idle') }} className="btn-outline mt-6">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="space-y-4"
                >
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                    Send Us A Message
                  </h3>
                  <Field label="Name" error={errors.name}>
                    <input className="input" placeholder="Your name" value={form.name} onChange={set('name')} />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input type="tel" className="input" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                  </Field>
                  <Field label="Message" error={errors.message}>
                    <textarea
                      className="input min-h-[110px] resize-y"
                      placeholder="I'd like to know more about..."
                      value={form.message}
                      onChange={set('message')}
                    />
                  </Field>
                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                    {status === 'loading' ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  )
}
