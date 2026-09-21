import SectionHeading from '../components/ui/SectionHeading'
import TrainerCard from '../components/TrainerCard'
import { TRAINERS } from '../data/trainers'

export default function Trainers() {
  return (
    <section id="trainers" className="section bg-sand">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Team"
          title="Meet Our"
          highlight="Trainers"
          subtitle="Certified professionals who’ll guide, motivate and keep you on track."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((t, i) => (
            <TrainerCard key={t.id} trainer={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
