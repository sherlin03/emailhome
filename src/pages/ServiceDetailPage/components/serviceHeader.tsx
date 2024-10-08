import { motion } from "framer-motion"
import { fadeIn } from "../../../shared/animation/variants";


type titleValue = {
  title:string
  
}


export default function ServiceDetailHeader({ title }: titleValue) {

  return (
    <motion.section className=" pt-4 lg:py-4 bg-transparent" variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
    >
      <div className=" lg:w-full sm:w-[75%] ">
        <div className="flex flex-col justify-end h-full ">
          <p className="pt-4 font-semibold text-xs">Our Service</p>
          <h1 className="pt-2 font-bold lg:w-3/4 2xl:text-7xl lg:text-6xl text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </motion.section>
  );
}
