import { useEffect } from 'react'

// Locks body scroll while a modal / drawer / lightbox is open.
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [locked])
}
