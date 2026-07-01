import { useEffect } from "react";
import gsap from "gsap"

const Strings = () => {

useEffect(() => {
  const finalPath=`M 10 100 Q 500 100 990 100` 
  const string = document.querySelector("#string")
  if (!string) return

  string.addEventListener('mousemove', (dets) => {
    const svg = document.querySelector("#string svg")
    const rect = svg.getBoundingClientRect()
    
    const y = 100 + ((dets.clientY - rect.top - rect.height / 2) / rect.height) * 500
    const path = `M 10 100 Q 500 ${y} 990 100`;
    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.5,
      ease: "sine.out"
    })
  })

  string.addEventListener('mouseleave', () => {
    gsap.to("svg path", {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)"
    })
  })

  return () => {
    string.removeEventListener('mousemove', null)
    string.removeEventListener('mouseleave', null)
  }
}, [])



  return (
    <div className="w-full   bg-[#FFE023] flex items-center justify-center">
      <div id="string" className="w-full h-full flex items-center justify-center -translate-y-34">
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
         <path d="M 10 100 Q 500 100 990 100" stroke="black" fill="transparent" strokeWidth="2" />
         
        </svg>
    </div>
    
    </div>
  )
}

export default Strings
