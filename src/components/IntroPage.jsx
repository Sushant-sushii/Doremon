import { useEffect } from "react"
import sitmon from "../assets/page2/sitmon.png"
import pancake from "../assets/page2/doracake.png"

// gsap
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const IntroPage = () => {

   const array = Array.from({ length: 20 }, (_, index) => index + 1); // Generate an array of 20 elements
    // generating 20 pancakes
    useEffect(()=>{
        
    },[])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "bottom top",
        markers: false,
      },
    })

    tl.from(".doracake", {
      scale: 0,
      y: 250,
      duration: 1,
      ease: "power1",
    })
 
    
    
    
    
    .from(
      ".sitmon",
      {
        y: 29,
        duration:3 ,
        delay:0.3,
        ease: "bounce.in",
        yoyo:true,
        repeat:-1
      },
      
    )

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [])

  return (
    <div className='bg-linear-to-b from-sky-900 to-yellow-300 min-h-[180vh] w-full '>
        <div className="smallcakes">
            {}
        </div>
      <div className='page2 relative flex flex-col items-center justify-center gap-0 min-h-screen'>
        
        <img
        className="sitmon scale-60 -mt-1 z-5"
        src={sitmon} alt="sitting_doremon" />
        
        
        <img
        className="doracake -rotate-15 scale-190 -mt-35 z-4"
        src={pancake}  alt="" />

       <div className="doracaketext flex items-center flex-col justify-between relative -mt-45">
         <h2 className="z-1 -rotate-15 text-[27em] -mt-85 font-[doramon] text-yellow-400 leading-0 [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]">Dora </h2>

        <h2 className="z-1 -rotate-15 text-[20em] font-[doramon] text-yellow-400   leading-0 [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] ">Cake </h2>
         
       </div>
      </div>

           <div className="smallcakes ">
            {array.map((element) => (
              <img
                key={element}
                className="doracake scale-60 -mt-1 "
                src={pancake}
                style={{ position: "absolute", top: `${Math.random() * 100+125}%`, left: `${Math.random() * 100-20}%`, }}
                alt="sitting_doremon"
              />
            ))}
        </div>
      
    </div>
  )
}

export default IntroPage
