import clouds from "../assets/cl.png"
import city from "../assets/city.png"
import ccl from "../assets/clouds1.png"
import ccl2 from "../assets/clouds1.png"
import ccl4 from "../assets/clouds4.png"
import doremon from "../assets/doremon .png"
// gsap
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { RiArrowUpLongLine } from "@remixicon/react";
import { useEffect, useRef } from "react"

const Scene = () => {
  const mainRef = useRef(null)
// disable zooming at poster
  useEffect(() => {
    const mainEl = mainRef.current
    if (!mainEl) return

    const handleWheel = (event) => {
      if (!event.ctrlKey) return
      event.preventDefault()
    }

    mainEl.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      mainEl.removeEventListener("wheel", handleWheel, { passive: false })
    }
  }, [])



// selfie effect
  useGSAP(()=>{
    const main=document.querySelector(".main")
    if(main){
      main.addEventListener("mousemove",function(e){
        const xMove=(e.clientX/window.innerWidth-0.5)*40;
        gsap.to(".clouds",{
          x:`${xMove*0.2}%`,
          duration:3,
          delay:0.9
        })
        gsap.to(".city",{
           x:`${xMove*0.9}%`,
          duration:5,
          delay:0.9
        })
      })
    }
  })
  // cloud 1
  useGSAP(()=>{

    const tl=gsap.timeline();

    tl.to(".cloud1",{
      x:window.innerWidth/window.innerHeight*2500,
      duration:220,
      repeat:-1,
    })
  })
  // cloud 2
  useGSAP(()=>{

    const tl=gsap.timeline();

    tl.to(".cloud2",{
      x:window.innerWidth/window.innerHeight*2500,
      duration:220,
      repeat:-1,
    })
  })
  // cloud 42
   useGSAP(()=>{

    const tl=gsap.timeline();

    tl.to(".cloud42",{
      x:window.innerWidth/window.innerHeight*2500,
      duration:360,
      repeat:-1,
    })
  })
  // cloud 41
  useGSAP(()=>{

    const tl=gsap.timeline();

    tl.to(".cloud41",{
      x:window.innerWidth/window.innerHeight*2500,
      duration:300,
      repeat:-1,
    })
  })
  // doremon
  useGSAP(()=>{
    const tl=gsap.timeline();

    tl.to(".doremon",{
      x:950,
      duration:4,
      delay:0.3,
      ease:"power1.inOut",
      })
  
    })

    // swip up animation
  useGSAP(()=>{
    const tl=gsap.timeline();
    tl.from(".swip",{
      y:120,
      duration:2,
      delay:0.2,
      ease:"bounce.out"
    })
  })




  return (
    <div ref={mainRef} className=" main overflow-hidden w-full h-screen outer relative ">

        <div className="clouds scale-120 w-full h-screen absolute top-0 left-0 ">
          <img
          className="w-full h-screen object-cover " 
          src={clouds} alt="" />
        </div>
{/* text */}
        <div className="doremonText absolute top-38 leading-0  left-60">
          <h2 className="text-[18rem] tracking-wider font-[doramon] font-semibold text-shadow-2xl  text-yellow-400 [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] ">Doremon</h2>
        </div>
  {/* ****************************** */}
        <div className="city w-full h-screen   absolute top-0 left-0">
          <img
          className="w-full scale-138 h-screen object-cover" 
          src={city} alt="" />
        </div>
{/* -----------moving clouds------------- */}

        <div className="cloud1 absolute top-0 -left-200">
          <img
          className="scale-[6] object-cover " 
          src={ccl} alt="" />
        </div>

        <div className="cloud2 absolute top-180 left-899">
          <img
          className="   object-cover " 
          src={ccl2} alt="" />

        </div>

        <div className="cloud41 absolute top-45 left-100">
          <img
          className="scale-[5]  object-cover " 
          src={ccl4} alt="" />
          
        </div>

        <div className="cloud42 absolute top-100 left-200">
          <img
          className="scale-[8]  object-cover " 
          src={ccl4} alt="" />
          
        </div>

        <div className="cloud42 absolute top-100 left-500">
          <img
          className="scale-[5]  object-cover " 
          src={ccl4} alt="" />
          
        </div>

    {/* doremon */}
    
        <div className="doremon absolute top-25 -left-150">
          <img
          className="scale-165  object-cover " 
          src={doremon} alt="" />
          
        </div>
   
    {/* swipe up */}
      
    <nav className="w-full bg-linear-to-t flex items-center justify-center from-sky-900 to-transparent absolute bottom-0 h-20 ">
        <div className="swip flex flex-row  bottom-0 ">
          <h2 className="font-semibold font-[doramon] tracking-widest text-amber-400 text-xl">Swip Up</h2>
          <div><RiArrowUpLongLine className="text-amber-400" /></div>
        </div>
    </nav>
    
    
    </div>
  
  )
}

export default Scene
