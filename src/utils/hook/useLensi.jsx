// hooks/useLenis.ts
'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export const useLenis = () => {
     const pathname = usePathname()
     const lenisRef = useRef(null)

     // Init Lenis once
     useEffect(() => {
          const lenis = new Lenis({ smooth: true, lerp: 0.05 })
          lenisRef.current = lenis

          const raf = (time) => {
               lenis.raf(time)
               requestAnimationFrame(raf)
          }

          requestAnimationFrame(raf)

          return () => lenis.destroy()
     }, [])

     // Scroll to top on pathname change
     useEffect(() => {
          if (lenisRef.current) {
               lenisRef.current.scrollTo(0 ) // or remove `immediate` for smooth scroll
          }
     }, [pathname])
}
