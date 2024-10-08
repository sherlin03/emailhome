import { motion } from "framer-motion"
import { ServicesFeaturesModal } from "../../../lib/domains/serviceFeatures";
import { fadeIn } from "../../../shared/animation/variants";
import DynamicIcon from "../../../shared/components/icon/Icon";

export default function ServiceFeatureList({ datas }:{datas:ServicesFeaturesModal[]}) {
  const replaceStrings = (str: string) => {
    let newStr = str;
    newStr = newStr.replace('background-color: rgb(0, 0, 0);','' ).replace('color','');
    // newStr = newStr.replace('color: rgb(255, 255, 255);','');
    console.log(newStr);
    return newStr;
  };
  return (
  <div className="container grid lg:grid-cols-4 lg:gap-5 lg:p-16 py-[4rem]  p-8 gap-[3.3rem]  " >
      {datas.map((item:ServicesFeaturesModal) => {
        const description = replaceStrings(item?.description);
        console.log(item);
      return <motion.li key={item?.id} className="list-none " variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
        exit="hidden">
        
         <div className="w-[50px] h-[50px] bg-neutral-600 flex text-important justify-center items-center rounded-full">
           <DynamicIcon iconName={item?.icon  as string} /></div>
          <h1 className="text-slate-50 font-bold text-[1.2rem] py-3">{item?.title}</h1>

          {<div className="!text-white services-description" dangerouslySetInnerHTML={{ __html: description }}/>}

      </motion.li>

  })}
    </div>

  )

}