import { useEffect } from 'react'
import nobita from "../assets/page2/nobita.png"
import sizuka from "../assets/page2/sizuka.png"
import gian from "../assets/page2/gian.png"
import sunio from "../assets/page2/sunio.png"
import dekisuki from "../assets/page2/dekisuki.png"
import dd from "../assets/page2/dd.png"

// gsap

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const IntroCards = () => {

// nobita
  useEffect(()=>{


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nobitacard",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    tl.from(".nobitacardImage",{
        x:-470,
        rotateZ:-20      
    },tl.from(".nobitaIntro",{
      x:1000,
      rotateZ:20   
    }))



  },[])

// sizuka
  useEffect(()=>{


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sizukacard",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    tl.from(".sizukacardImage",{
        x:-470,
        rotateZ:-20,
        opacity:0,      
    },tl.from(".sizukaIntro",{
      x:1000,
      opacity:0,
      rotateZ:20   
    }))



  },[])
// gian
 
 useEffect(()=>{


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".giancard",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    tl.from(".giancardImage",{
        x:-470,
        rotateZ:-20,
        opacity:0,      
    },tl.from(".gianIntro",{
      x:1000,
      opacity:0,
      rotateZ:20   
    }))



  },[])

  //sunio
  useEffect(()=>{


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".suniocard",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    tl.from(".suniocardImage",{
        x:-470,
        rotateZ:-20,
        opacity:0,      
    },tl.from(".sunioIntro",{
      x:1000,
      opacity:0,
      rotateZ:20   
    }))



  },[])
 
// dekisuki
  useEffect(()=>{


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dekisukicard",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    tl.from(".dekisukicardImage",{
        x:-470,
        rotateZ:-20,
        opacity:0,      
    },tl.from(".dekisukiIntro",{
      x:1000,
      opacity:0,
      rotateZ:20   
    }))



  },[])
// doremon
useEffect(()=>{
  gsap.to(".imgcard",{
    y: -20,
    duration: 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  })
},[])






// type writer effect

useEffect(()=>{
  gsap.to(".name", {
    y: -20,
    duration: 3,
    ease: "bounce.inOut",
    repeat: -1,
    yoyo: true,
  })
  
},[])



  return (
    <div className='overflow-x-hidden'>
      {/* nobita */}

        <div className="nobitacard bg-amber-300 h-screen w-full rounded-t-full flex items-center flex-wrap justify-around ">
      <div className="nobitacardImage p-7">
        <img 
        className="h-150 imgcard"
        src={nobita} alt="" />
      </div>
      <div className='nobitaIntro w-1/2 flex flex-col gap-5'>
        <div>
          <h2 className='font-[grow] text-8xl tracking-wide name'>Nobita Nobi </h2>
          <p className='font-[child] text-3xl tracking-wide text-taupe-600 '>(The Professional Underachiever)</p>
        </div>
        <div>
          <h3 className='font-[doramon] text-2xl tracking-wide text-stone-700'>Special skills</h3>
        <p className='font-[child] text-[1.1rem] tracking-wide'>Sleeping anywhere in 0.9 seconds, crying in high-definition, and weaponizing peer pressure.</p>
        </div>
        <div>
          <h2 className='text-stone-700 font-[doramon] text-2xl tracking-wide'>The Lowdown</h2>
          <p className='font-[child] text-[1.1rem] tracking-wide'>Nobita is the only human alive who can look at a 22nd-century cosmic gadget capable of bending space and time and think, "How can I use this to skip my math homework or spy on Shizuka?" He is a walking, talking cautionary tale wrapped in a yellow shirt. If failure were an Olympic sport, Nobita wouldn't just win gold; he’d accidentally trip over the podium and lose it down a drain.</p>
        </div>
      </div>
        </div>
        
      {/* sizuka */}
      <div className="sizukacard bg-amber-300 h-screen w-full   flex items-center flex-wrap justify-around ">
      <div className="sizukacardImage p-7">
        <img 
        className="h-150 imgcard"
        src={sizuka} alt="" />
      </div>
      <div className='sizukaIntro w-1/2 flex flex-col gap-5'>
        <div>
          <h2 className='font-[grow] text-8xl tracking-wide name'>Shizuka Minamoto </h2>
          <p className='font-[child] text-3xl tracking-wide text-taupe-600 '>(The Cleanliness Idol)</p>
        </div>
        <div>
          <h3 className='font-[doramon] text-2xl tracking-wide text-stone-700'>Special skills</h3>
        <p className='font-[child] text-[1.1rem] tracking-wide'>Taking 400 baths a day, playing the violin poorly, and somehow tolerating this group of idiots.</p>
        </div>
        <div>
          <h2 className='text-stone-700 font-[doramon] text-2xl tracking-wide'>The Lowdown</h2>
          <p className='font-[child] text-[1.1rem] tracking-wide'>Shizuka is the voice of reason, the moral compass, and a girl who desperately needs a better lock on her bathroom door given how often Nobita teleports in. She’s nice to everyone, which is honestly a red flag considering she willingly hangs out with a bully, a narcissist, a crybaby, and a robotic cat.</p>
        </div>
      </div>
        </div>
     
     {/* Gian */}
      <div className="giancard bg-amber-300 h-screen w-full   flex items-center flex-wrap justify-around ">
      <div className="giancardImage p-7">
        <img 
        className="h-150 imgcard"
        src={gian} alt="" />
      </div>
      <div className='gianIntro w-1/2 flex flex-col gap-5'>
        <div>
          <h2 className='font-[grow] text-8xl tracking-wide name'>Gian</h2>
          <p className='font-[child] text-3xl tracking-wide text-taupe-600 '>(Takeshi Goda / Vocal Hazard)</p>
        </div>
        <div>
          <h3 className='font-[doramon] text-2xl tracking-wide text-stone-700'>Special skills</h3>
        <p className='font-[child] text-[1.1rem] tracking-wide'>Stealing toys, a right hook that alters timelines, and singing so badly it violates the Geneva Conventions.</p>
        </div>
        <div>
          <h2 className='text-stone-700 font-[doramon] text-2xl tracking-wide'>The Lowdown</h2>
          <p className='font-[child] text-[1.1rem] tracking-wide'>Gian operates on a very simple economic philosophy: "What's mine is mine, and what's yours is also mine." He is the neighborhood bully who dreams of being a pop idol, despite having a singing voice that sounds like a blender full of rocks trying to digest a lawnmower. The only thing more terrifying than his temper is his cooking.</p>
        </div>
      </div>
        </div>

    {/* Sunio */}
    <div className="suniocard bg-amber-300 h-screen w-full   flex items-center flex-wrap justify-around ">
      <div className="suniocardImage p-10">
        <img 
        className="h-150 imgcard"
        src={sunio} alt="" />
      </div>
      <div className='sunioIntro w-1/2 flex flex-col gap-5'>
        <div>
          <h2 className='font-[grow] text-8xl tracking-wide name'>Suneo Honekawa</h2>
          <p className='font-[child] text-3xl tracking-wide text-taupe-600 '>(The Ultimate Hype-Man / Professional Sycophant)</p>
        </div>
        <div>
          <h3 className='font-[doramon] text-2xl tracking-wide text-stone-700'>Special skills</h3>
        <p className='font-[child] text-[1.1rem] tracking-wide'>Bragging about vacations, having a fox-like face, and hiding behind Gian.</p>
        </div>
        <div>
          <h2 className='text-stone-700 font-[doramon] text-2xl tracking-wide'>The Lowdown</h2>
          <p className='font-[child] text-[1.1rem] tracking-wide'>Suneo is the rich kid whose entire personality is flexing things his parents bought him. His daily routine consists of inviting everyone except Nobita to his cousin’s yacht and aggressively complimenting Gian’s biceps so he doesn't get punched. If snitching and brown-nosed flattery were a currency, Suneo could buy the 22nd century.</p>
        </div>
      </div>
        </div>

    {/* DEKISUKI */}
    <div className="dekisukicard bg-amber-300 h-screen w-full   flex items-center flex-wrap justify-around ">
        <div className="dekisukicardImage p-7">
          <img 
          className="h-150 imgcard"
          src={dekisuki} alt="" />
        </div>
        <div className='dekisukiIntro w-1/2 flex flex-col gap-5'>
          <div>
            <h2 className='font-[grow] text-8xl tracking-wide name'>Dekisugi Hidetoshi</h2>
            <p className='font-[child] text-3xl tracking-wide text-taupe-600 '>(The Human Cheat Code)</p>
          </div>
          <div>
            <h3 className='font-[doramon] text-2xl tracking-wide text-stone-700'>Special skills</h3>
          <p className='font-[child] text-[1.1rem] tracking-wide'>Being perfect at literally everything, ruining Nobita’s self-esteem by just breathing, and speaking in textbook paragraphs.</p>
          </div>
          <div>
            <h2 className='text-stone-700 font-[doramon] text-2xl tracking-wide '>The Lowdown</h2>
            <p className='font-[child] text-[1.1rem] tracking-wide'>Dekisugi is the guy who looks at a 100% on a test and sighs because he didn't get a 101%. His name literally translates to "overachiever," which is the biggest understatement since calling the Pacific Ocean "a bit damp." He is handsome, athletic, cooks like a Michelin-star chef, and reads quantum physics for light bedtime entertainment.</p>
          </div>
        </div>
          </div>

    {/* Doremon */}
    <div className="doremoncard bg-amber-300 h-screen w-full   flex items-center justify-center-safe gap-40 p-7 rounded-b-full relative">
      
        <div className='doremonIntroLeft w-1/5 flex flex-col gap-5'>
          <div>
            <h2 className='font-[grow] text-8xl tracking-wide name'>Doremon</h2>
            <p className='font-[child] text-3xl tracking-wide text-taupe-600 '>(The World’s Most Stressed-Out Babysitter)</p>
          </div>
            <div>
            <h3 className='font-[doramon] text-2xl tracking-wide text-stone-700'>Special skills</h3>
          <p className='font-[child] text-[1.1rem] tracking-wide'>Pulling miracles out of his pocket, eating his body weight in dorayaki, and being mistaken for a raccoon dog.</p>
          </div>
          
        </div>
         <div className="doremoncardImage p-7 ">
          <img 
          className="h-120 imgcard"
          src={dd} alt="" />
        </div>
       <div className='w-1/5 doremonIntroRight'>
            <h3 className='font-[doramon] text-2xl tracking-wide text-stone-700'>The Lowdown</h3>
          <p className='font-[child] text-[1.1rem] tracking-wide'>Doraemon is a futuristic robot sent back in time to fix Nobita’s life, which is like trying to fix a leaky submarine with scotch tape. Armed with a 4D pocket full of reality-warping gadgets, his main job is actually just yelling "Nobita, no!" fifty times an episode. He’s essentially a glorified, earless mechanical cat suffering from a severe case of secondary anxiety.</p>
          </div>
       
        </div>
    </div>


  )
}

export default IntroCards
