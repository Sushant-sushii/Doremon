import IntroText from "./components/IntroText"
import IntroPage from "./components/IntroPage"
import Scene from "./components/Scene"
import Strings from "./components/Strings"
import IntroCards from "./components/IntroCards"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/next"
import { useParams, usePathname, useSearchParams } from "next/navigation.js"
// 


const App = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Scene/>
      <IntroPage/>
      <Strings/>
      <IntroText/>
      <IntroCards/>
      <Footer/>
      

     
    </div>
  )
}

export default App
