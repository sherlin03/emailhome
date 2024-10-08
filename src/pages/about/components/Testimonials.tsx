import { Carousel } from "flowbite-react";
import { MoveLeft, MoveRight } from "lucide-react";
import { customTheme } from "../../../shared/configs/testimonialSliderConfig";
import { LinkButton } from "../../../shared/components/buttons/LinkButton";

export default function Testimonials() {
  return (
    <div className="md:container px-5  relative flex flex-col xl:gap-[15%] lg:gap[12%] py-20 mx-auto text-left md:flex-row">
      <div className="w-full mb-10 sm:w-2/4">
        <h1 className="text-sm text-gray-200">TESTIMONIALS</h1>
        <h1 className="pt-4 mt-3 text-2xl font-bold text-white border-t xl:text-4xl sm:text-3xl border-t-gray-700">
          What our clients say
          <br /> about Izh-Tech.
        </h1>
        <LinkButton href="/contact" size={'xs'} className="w-2/5 mt-5 md:w-2/6" variant={'gradient'}>Lets Connect</LinkButton>
      </div>
      <div className="w-full sm:w-2/4 ">

        <Carousel
          theme={customTheme}
          leftControl={<MoveLeft />}
          rightControl={<MoveRight />}
          indicators={false}
        >
          <div className="flex flex-col h-full gap-3 text-left dark:text-white">
            <div className="flex flex-col gap-1">
              <span className="w-32 p-2 mb-2 text-xs font-normal text-gray-100 bg-gray-900 rounded focus:outline-none">
              Customer Support
            </span>
            <p className="text-lg text-white ">
              "5 stars WordPress template! If anyone wants an example of what
              you can do with this theme. I tell you what, there has never been
              an issue that Cory from the colabrio support team hasn't been able
              to solve for me."
            </p>
            </div>
           <div> <span className="text-xs font-bold text-white ">Colin Lucido</span>
            <h5 className="text-xs text-white">
              UI Designer · Interactive Media
            </h5>
            </div>
          </div>
          <div className="flex flex-col h-full gap-3 text-left dark:text-white">
            <div className="flex flex-col gap-1">
              <span className="w-32 p-2 mb-2 text-xs font-normal text-gray-100 bg-gray-900 rounded focus:outline-none">
              Customer Support
            </span>
            <p className="text-lg text-white ">
              "5 stars WordPress template! If anyone wants an example of what
              you can do with this theme. I tell you what, there has never been
              an issue that Cory from the colabrio support team hasn't been able
              to solve for me."
            </p>
            </div>
           <div> <span className="text-xs font-bold text-white ">Colin Lucido</span>
            <h5 className="text-xs text-white">
              UI Designer · Interactive Media
            </h5>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
