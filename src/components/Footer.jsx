

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    )

    gsap.to(".footer h2, .footer p", {
      y: -18,
      rotation: 1.5,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="footer rounded-t-full mt-3 min-h-screen w-full bg-amber-600 flex items-center justify-center px-8 py-16">
      <div className="max-w-4xl text-center text-slate-900">
        <h2 className="text-5xl font-[grow] tracking-wide mb-6">Doraemon's Last Pocket Message</h2>
        <p className="font-[child] text-lg leading-8">
          If you made it this far, congratulations — I just used my 4D pocket to stop time for a second and make sure Nobita didn’t accidentally erase the ending. I’m off to find more dorayaki and maybe fix one more homework disaster, but if you ever need a gadget, know that I’m only one impossible adventure away.
        </p>
      </div>
    </div>
  )
}

export default Footer
