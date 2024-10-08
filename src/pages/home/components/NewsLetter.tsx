
import { Button, Footer, TextInput } from "flowbite-react";





export default function NewsLetter() {
  return (
    <section className="py-20">
      <div className="text-center ">
        <h1 className="font-bold text-md lg:text-3xl md:text-3xl sm:text-3xl">
        
          <span className="text-3xl font-bold text-transparent lg:text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text "> Future-Proof Your Business</span> 
          </h1> 
          <span className="text-xl lg:text-2xl"> We Izhtech is here for you!
          </span>
        

       


        <div className="flex flex-col items-center">
         

          <Footer.LinkGroup col>
            <div className="max-w-md">
              <div className="flex items-center gap-2">
                <TextInput
                  className="py-2 border-transparent w-46 text-slate-800"
                  id="email"
                  type="email"
                  placeholder="Your Email Id"
                  required
                />
                <Button
                  className="w-24 h-10 text-white bg-gray-800"
                  size="xs"
                >
                  Get a Demo
                </Button>
              </div>
            </div>
          </Footer.LinkGroup>

        </div>
        
      </div>

    </section>

  );
}