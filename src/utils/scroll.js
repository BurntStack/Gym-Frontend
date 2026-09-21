// Smooth-scroll to a section id, accounting for the fixed navbar height.
export const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const navOffset = 76
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset
  window.scrollTo({ top, behavior: 'smooth' })
}
