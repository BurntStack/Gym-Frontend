import SectionHeading from '../components/ui/SectionHeading'
import ProgramCard from '../components/ProgramCard'
import { PROGRAMS } from '../data/programs'

export default function Programs() {
  // Show a focused set of core programs to keep the page clean.
  const programs = PROGRAMS.slice(0, 6)

  return (
    <section id="programs" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our"
          highlight="Programs"
          subtitle="Choose the training that matches your goal. Every program is guided by a certified coach."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <ProgramCard key={p.id} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
