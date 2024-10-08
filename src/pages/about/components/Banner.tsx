
import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import ProgressBar from "./Progress";
import Shapes from "../../../shared/animation/Shapes";



export default function Banner() {


  return (
    <section className="flex gap-5 py-3 mx-auto ">
      <div className="relative gap-10 mx-auto lg:flex ">
      <div className="absolute top-0 flex right-20 ">  <Shapes className="w-10 h-10" shape="circle" />
        <Shapes className="w-20 h-20" shape="triangle" />
        <Shapes className="w-10 h-10 " color="orange-700" shape="rectangle" />
        </div>
        <motion.div variants={fadeIn("right", 0.1)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="relative bg-transparent lg:w-1/2">
   
          <img
            src="images/Aboutpage/img/banner.png"
            alt="Example Image"
            className="w-full h-auto"
          />
        </motion.div>
   
   
        <motion.div variants={fadeIn("left", 0.1)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex-col justify-center gap-10 pt-5 md:pe-20 lg:w-1/2 lg:flex">
          <div>
            <h1 className="pb-4 text-2xl font-bold ">
              Business Growth Solution
            </h1>
            <p className="text-justify sm:text-xs lg:text-sm md:text-sm">
              At IZHTech we help businesses grow. Whether you’re a startup,
              traditional business, or entrepreneur, our service enhance your
              digital presence From app development to branding and marketing,
              we customize solutions to fit your needs
            </p>
           
         <ProgressBar progressTime={50}/>
         
          </div>
   
          <div>
            <h1 className="pb-4 text-2xl font-bold">
              Customized Business Success
          </h1>
            <p className="text-justify sm:text-xs lg:text-sm md:text-sm">
              Get expert help for your business, whether it's in e-commerce or
              healthcare. We customize our services to fit your unique goals,
              always keeping you updated and making sure you see real results.
            </p>
            <ProgressBar progressTime={90} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
