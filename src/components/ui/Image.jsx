import { useState } from 'react'
import { FALLBACK } from '../../utils/images'

// Lazy image with a skeleton shimmer while loading and a graceful fallback.
export default function Image({
  src,
  alt,
  className = '',
  imgClassName = '',
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-ink-800 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-ink-800 to-ink-700" />
      )}
      <img
        src={errored ? FALLBACK : src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!errored) setErrored(true)
          setLoaded(true)
        }}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } ${imgClassName}`}
      />
    </div>
  )
}
