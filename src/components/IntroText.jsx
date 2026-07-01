import { useGSAP } from "@gsap/react"


// gsap
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const IntroText = () => {
  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".doorandtext",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    })

    tl.to(".doorandtext h2", {
      x: -2500,
      ease: "none",
    })
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [])
  
  //door
 

  return (
    <>
    <div className="bg-linear-to-b from-yellow-300 to-transparent doorandtext h-4/5 w-full flex  overflow-hidden">
      <div className="overflow-hidden min-w-0">
        <h2 className="font-[doramon] text-pink-700 text-[34rem] tracking-wider leading-150 pl-5 ">IntroductionTime</h2>
      </div>
    </div>
     </>
  )
}

export default IntroText
