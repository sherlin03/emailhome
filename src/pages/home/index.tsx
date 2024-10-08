import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Partnercompany from "./components/partnercompany";
import Banner from "./components/Banner";
import Ourservice from "./components/Ourservice";
import Process from "./components/Process";
import Slider from "./components/Slider";
import NewsLetter from "./components/NewsLetter";
import { fadeIn } from "../../shared/animation/variants";
import { motion } from "framer-motion";
import Platforminsights from "./components/Platforminsights";
import IzhtechScroll from "../../shared/components/IzhtechScroll";
import BlogList from "./components/blog/BlogList";


export default function Home() {


  

  return (
    <>
        
     
        <section className=" pt-6 lg:h-[calc(80vh-70px)] ">
          <Hero />

        </section>

        <section className="grid w-full bg-teal-50">
          <Feature />
      </section>


        <section className="container grid hidden w-full mx-auto bg-white md:block">
          <Partnercompany />
        </section>

        <section className="mx-auto container-fluid xl:container">
          <Banner />
      </section>
     


        <section className="flex items-center justify-center py-4 bg-white">
          <IzhtechScroll />
        </section>
        
        {/* <section className="lg:px-10 pb-20 pt-28 bg-[#F5F7FF] rounded"> */}
        <section className="mx-auto container-fluid xl:container">
          <Platforminsights />
       </section>
       <section className="container px-20 py-8 mx-auto">
        <BlogList />
       </section>
       <section>
        <NewsLetter />
        </section>
        {/* <section className='container px-20 py-8 mx-auto'>
       <BlogList />
       </section> */}

        <section className="mx-auto container-fluid xl:container">
        {/* <section className="mx-auto xl:px-20 container-fluid xl:container"> */}
          <Ourservice />
        </section>

        {/* <section className="mx-auto xl:px-20 container-fluid xl:container"> */}
        <section className="mx-auto xl:px-20 container-fluid xl:container">
          <Process />
        </section>

        {/* <section className="relative mx-auto mb-10 xl:px-20 container-fluid xl:container "> */}
        <section className="mx-auto overflow-hidden container-fluid xl:container">
        <Slider />
          <motion.span
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
  
          </motion.span>
        </section>
       
      
    
    </>
  );
}
