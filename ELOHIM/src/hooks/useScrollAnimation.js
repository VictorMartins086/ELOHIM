import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    // Observe the element itself and all children with animation classes
    const animatedElements = element.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
    animatedElements.forEach((el) => observer.observe(el))

    if (
      element.classList.contains('fade-in') ||
      element.classList.contains('fade-in-left') ||
      element.classList.contains('fade-in-right')
    ) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
