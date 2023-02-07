import BannerHome from "../Components/BannerHome"
import Contact from "../Components/Contact"
import ContactHome from "../Components/ContactHome"
import Panel from "../Components/Panel"

import Services from "../Components/Services"
import SocialMediaHome from "../Components/SocialMediaHome"


const Home = () =>{

    return(
        <>
         <div>
            <BannerHome />
            <SocialMediaHome />
            <Panel />
            {/* <Panel /> */}
            {/* <div className="flex flex-col items-center servicess ">
            <h2 className="text-3xl mb-16 font-bold uppercase w-2/5 text-center">Contamos con variedad de pruebas de laboratorio</h2>
            <Services />
            </div> */}
            <ContactHome />
            <Contact />
            
            
         </div>
        </>
    )
}

export default Home