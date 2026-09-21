import { useEffect, useState } from 'react'

// Tracks which section is currently in view to power the active navbar indicator.
export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      }
      setActiveId(current)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [ids, offset])

  return activeId
}
