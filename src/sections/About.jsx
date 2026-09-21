import { Check } from 'lucide-react'
import Image from '../components/ui/Image'
import Reveal from '../components/ui/Reveal'
import { img, PHOTOS } from '../utils/images'

const POINTS = [
  'Certified, experienced personal trainers',
  'Modern imported strength & cardio equipment',
  'Clean, hygienic and spacious training floor',
  'Dedicated women’s fitness area',
  'Personalized workout & nutrition guidance',
  'Flexible membership plans for every budget',
]

export default function About() {
  return (
    <section id="about" className="section bg-sand">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <Image
            src={img(PHOTOS.gymInteriorModern, 900)}
            alt="Inside IRONCORE Fitness"
            className="aspect-[4/3] w-full rounded-3xl shadow-soft"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow mb-3">
              <span className="h-px w-6 bg-accent" />
              About Us
            </span>
            <h2 className="h-section">
              A Gym Built For <span className="text-accent">Real Results</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-ink-muted leading-relaxed">
              For over a decade, IRONCORE Fitness has helped hundreds of members get
              stronger, healthier and more confident. Whether you’re just starting out
              or training for your best shape ever, our coaches build a plan around you —
              and stay with you every step of the way.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
