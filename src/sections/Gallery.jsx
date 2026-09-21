import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Image from '../components/ui/Image'
import Lightbox from '../components/Lightbox'
import { GALLERY } from '../data/gallery'
import { img } from '../utils/images'

export default function Gallery() {
  const [lightIndex, setLightIndex] = useState(null)

  // Keep a clean 8-image grid.
  const items = GALLERY.slice(0, 8)
  const lightItems = useMemo(
    () => items.map((g) => ({ src: img(g.photo, 1400), category: g.category })),
    [items],
  )
  const nav = (dir) => setLightIndex((i) => (i + dir + lightItems.length) % lightItems.length)

  return (
    <section id="gallery" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside The"
          highlight="Gym"
          subtitle="Take a look at our space, equipment and community."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setLightIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img(g.photo, 500)}
                alt={g.category}
                className="h-full w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink">
                  <Plus className="h-5 w-5" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={lightItems}
        index={lightIndex}
        onClose={() => setLightIndex(null)}
        onNav={nav}
      />
    </section>
  )
}
