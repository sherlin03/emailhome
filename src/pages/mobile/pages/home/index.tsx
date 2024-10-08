import Hero from "./components/Hero";


export default function MobHome() {


  

    return (
        <>   
        <div className="bg-white" > 
        <section className=" pt-6  ">
          <Hero />
        </section>
        {/* about and App Features start */}
        <section>
    <div className="w-full mx-auto rounded-3xl appfeature">
        {/* About Section */}
        <div className="rounded-3xl w-full mx-auto mt-8 mb-8 aboutcolor aboutheight relative">
            <img src="/images/mobile/abouthalfcircle.png" alt="" className="w-8 absolute top-7" />

            <div className="container w-5/6 mx-auto flex flex-col lg:flex-row">
                <div className="lg:w-1/4">
                    <p className="pt-10 text-white font-bold text-3xl text-center lg:text-left">ABOUT US</p>
                    <p className="pt-6 text-white text-base text-center lg:text-left">Managing court bookings has never been easier. Our app is designed to streamline the entire process, making it easier than ever to book courts for favorite sports and activities.</p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="aboutbutton py-1 px-2 rounded-md mt-7">
                            <span className="text-white text-sm">Free Demo</span>
                        </button>
                    </div>
                </div>
                <div className="lg:w-2/4 mx-auto relative mt-8 lg:mt-0">
                    <img src="/images/mobile/aboutcircle.png" alt="" className="w-40 absolute top-20 left-1/2 transform -translate-x-1/2 lg:left-48 lg:translate-x-0" />
                    <img src="/images/mobile/aboutmob.png" alt="" className="mob absolute -top-10 left-1/2 transform -translate-x-1/2 lg:left-44 lg:translate-x-0" />
                </div>
            </div>
        </div>

        {/* App Features Section */}
        <div className="mt-20">
            <div className="rounded-3xl w-full mx-auto h-auto mt-10 mb-8 relative">
                <div className="container w-5/6 mx-auto relative">
                    <div className="flex justify-between items-center">
                        <div className="applinerelative">
                            <img src="/images/mobile/app_line.png" alt="underline" className="w-28 applineabs" />
                            <p className="mt-10 text-3xl font-bold font-body">App Features</p>
                        </div>
                        <div>
                            <span className="inline-flex">
                                <img src="/images/mobile/apparrow2.png" alt="arrow" className="w-6 h-6 me-5" />
                                <img src="/images/mobile/apparrow1.png" alt="arrow" className="w-6 h-6" />
                            </span>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
    <div className="relative px-2 py-4 rounded-3xl transition-all duration-300 hover:bg-[rgba(191,255,196,0.76)] hover:shadow-2xl">
        <img src="/images/mobile/appround1.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Real-Time Court Availability</p>
        <p className="mt-5 text-base">Instantly see which courts are available and manage bookings on the go.</p>
    </div>

    <div className="relative appbox px-2 py-4 rounded-3xl transition-all duration-300 bg-[rgba(191,255,196,0.76)] shadow-2xl">
        <img src="/images/mobile/pinkroundicon.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Comprehensive Calendar View</p>
        <p className="mt-5 text-base">Easily view and manage daily, weekly, or monthly bookings with a user-friendly calendar interface.</p>
    </div>

    <div className="relative px-2 py-4 rounded-3xl transition-all duration-300 hover:bg-[rgba(115,138,255,0.41)] hover:shadow-2xl">
        <img src="/images/mobile/appbell.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Automated Notifications</p>
        <p className="mt-5 text-base">Send booking confirmations, reminders, and cancellation notices automatically to your clients.</p>
    </div>

    <div className="relative px-2 py-4 rounded-3xl transition-all duration-300 hover:bg-[rgba(255,214,109,0.6)] hover:shadow-2xl">
        <img src="/images/mobile/appbuild.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Flexible Payment Processing</p>
        <p className="mt-5 text-base">Accept payments securely and offer a variety of payment options including credit cards and mobile payments.</p>
    </div>
</div>

                </div>
                <img src="/images/mobile/appdesign.png" alt="" className="absolute top-20 right-0 w-8" />
            </div>
        </div>
    </div>
</section>

        {/* about and App Features end  */}
        
        {/* Benefits starts */}
        <section className="relative pt-10">
  <div className="w-full relative mx-auto  applinerelative">
    <img src="/images/mobile/ben2.png" alt="" className="absolute bottom-36 w-8 left-0" />

    <div className="container w-5/6 mx-auto relative">
      <img src="/images/mobile/ben8.svg" alt="" className="hidden lg:block absolute -top-36 left-80" />
      <img src="/images/mobile/ben1.png" alt="" className="absolute -top-10 -left-12" />

      <div className="relative text-center lg:text-left">
        <img src="/images/mobile/ben9.png" alt="underline" className="w-24 absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-5 lg:translate-x-0" />
        <p className="mt-8 text-3xl font-bold font-body">Benefits</p>

        {/* Benefits Grid */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 pt-7">

          {/* Left Column (Responsive Alignments) */}
          <div className="md:text-right text-center">
            <div className="h-36 md:h-36 lg:h-40">
              <img src="/images/mobile/ben3.png" alt="" className="md:float-right mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-4">Maximize Revenue</p>
              <p className="text-sm">Optimize court usage with dynamic pricing and promotional offers.</p>
            </div>
            <div className="pt-7 h-36 md:h-36 lg:h-40">
              <img src="/images/mobile/ben4.png" alt="" className="mt-4 md:mt-0 md:float-right mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-4">Reduce Administrative Work</p>
              <p className="text-sm">Save time and reduce errors with automated bookings, notifications, and payment processing.</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-span-2 flex justify-center items-center sm:my-10">
            <img src="images/mobile/ben7.png" alt="benefits" className="w-full mt-16 md:mt-10 lg:mt-0   md:w-2/3 lg:w-full" />
          </div>

          {/* Right Column (Responsive Alignments) */}
          <div className="md:text-left text-center">
            <div className="h-36 md:h-40 lg:h-44 xl:h-44">
              <img src="/images/mobile/ben5.png" alt="" className="md:float-left mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-4">Enhance Member Experience</p>
              <p className="text-sm">Provide a seamless booking experience that keeps your members satisfied and coming back.</p>
            </div>
            <div className="pt-7 h-36 md:h-36 lg:h-40">
              <img src="/images/mobile/ben6.png" alt="" className="mt-7 md:mt-0 md:float-left mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-4">Increase Operational Efficiency</p>
              <p className="text-sm">Simplify your day-to-day operations with easy-to-use tools and real-time updates.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

         {/* Benefits End */}
         {/* Dashboard Start */}

         <section className="relative pt-10 mt-below-420 md:mt-0 mb-7">
  <div className="w-full relative mx-auto dashboardbg rounded-3xl dashboardmob">
    <div className="container w-5/6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="relative">
          <img src="/images/mobile/board1.png" alt="" className="absolute top-3 left-0 mx-auto" />
          
          <p className="pt-16 font-bold text-2xl text-center lg:text-left relativeboard borderlinemedia">Dashboard
            <img src="images/mobile/board3.png" alt="" className="boardlinew  text-center " />
          </p>
          <p className="pt-7 text-base text-center lg:text-left">
            Managing court bookings has never been easier. Our app is designed to streamline the entire process, making it easier than ever to book courts for your favorite sports and activities.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black rounded-lg py-2 px-6 mt-7">
              <span className="text-white text-sm">Free Demo</span>
            </button>
          </div>
        </div>
        <div className="col-span-2 flex justify-center lg:justify-end">
          <img src="images/mobile/board2.png" alt="" className="h-72 md:h-96 mt-7 mb-7" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* Dashboard End */}
{/* Workflow Start */}

<section className="relative pt-10 mb-7">
  <div className="w-full  relative mx-auto rounded-3xl mb-7">
    <div className="relative">
      <img src="images/mobile/work7.png" alt="" className="hidden md:block  absolute -bottom-24 right-0 w-full h-[650px]" />
      <div className="container w-5/6 mx-auto relative screenrelative">
      {/* <img src="images/mobile/work3.png" alt="" className="workdot w-7" /> */}
      <div className="relative">
        <img src="images/mobile/work2.png" alt="" className="absolute -top-20 left-1/2 transform -translate-x-1/2 lg:left-40 lg:translate-x-0" />
        <img src="/images/mobile/work1.png" alt="underline" className="w-24 absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-14 lg:translate-x-0" />
        
        
        <p className="mt-10 text-3xl font-bold text-center lg:text-left">Workflow</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7">
          <div className="w-60 h-96 shadow-[0px_0px_500px_0px_#44029A] mx-auto">
            <img src="images/mobile/work9.png" alt="" className="w-60 h-96   " />
          </div>
          <div className=" w-60 h-96 shadow-[0px_0px_500px_0px_#44029A] mx-auto">
            <img src="images/mobile/work10.png" alt="" className="w-60 h-96   " />
          </div>
    <div className="w-60 h-96 shadow-[0px_0px_500px_0px_#44029A] mx-auto relative">
        <div className="relative">
            <div className="relative">
            <img src="images/mobile/work3.png" alt="" className="absolute -top-3 -left-3 w-7 " />
            </div>
            <img src="images/mobile/work11.png" alt="" className="w-60 h-96 relative z-10" />
        </div>

  {/* Main content */}
        {/* <img src="images/mobile/work11.png" alt="" className="w-60 h-96 relative z-10" /> */}
        <img src="images/mobile/work8.png" alt="" className="absolute bottom-0 -right-16 w-3  " />
    </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <button
            className="px-6 py-3 me-8 lg:me-16  text-sm text-white rounded mt-10"
            style={{ background: 'linear-gradient(326deg, #5877F8 37.65%, #FF20B2 78.67%, #FFBB03 102.38%)' }}>
            See All Pages
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>


        {/* workflow End */}
        {/* User Feedback Start */}

        <section className="relative mt-10 mb-7">
  <div className="w-full relative mx-auto userbg">
    <img src="images/mobile/user3.png" alt="" className="w-40 sm:w-60 md:w-80 absolute -top-16 md:-top-32 right-12 md:right-24 hidden md:block"  />

    <div className="container w-5/6 mx-auto relative">
      <div className="relative">
        <img src="images/mobile/user1.png" alt="" className="w-6  md:w-8 absolute top-3 md:top-0 -left-6 md:-left-7" />
        <img src="images/mobile/user4.png" alt="" className="absolute bottom-20 md:bottom-30 right-0 w-4 " />

        <div className="relative">
          <img src="/images/mobile/user2.png" alt="underline" className="w-20 sm:w-24 md:w-28 absolute pt-1 top-20 left-24  lg:top-20 lg:left-28 md:top-24 " />
          <p className="text-xl sm:text-2xl md:text-3xl font-bold font-body ps-1 pt-16 lg:pt-14">User Feedback Start</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            <div className="flex justify-center">
              <img src="images/mobile/user5.png" alt="" className="mt-7 h-64  sm:h-72 md:h-80 blah" />
            </div>
            <div className="flex items-center">
              <p className="text-sm sm:text-base md:text-lg font-medium px-3 sm:px-6 mt-6 md:mt-16">
                "Managing bookings was a headache before we started using Oasis Mobile Application. Now, everything is automated and running smoothly." - Oasis Sportopia-Oman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

         {/* User Feedback End */}
        {/* service Start */}
        <section className="relative">
  <div className="w-full relative mx-auto">
    <div className="container relative w-5/6 mx-auto">
      <img src="images/mobile/service1.png" alt="" className="absolute top-10 left-0 md:-left-8 lg:-left-8: w-4 sm:w-4 md:w-4" />
      <img src="images/mobile/service2.png" alt="" className="absolute bottom-0 left-0 md:left-16 lg:left-64 w-64 md:2/3   serwidth" />

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          <div className="pb-10 md:pb-24 text-center md:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold pt-10">
              Get started with our service today.
            </p>
            <p className="text-xs pt-3">
              The app helps teams create, track, and deliver faster.
            </p>
          </div>

          <div className="md:col-span-2 text-center md:text-right">
            <div className="pt-6 md:pt-16 flex justify-center md:justify-end">
              <span className="bg-slate-200 rounded-lg">
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="px-4 h-8 py-2 bg-slate-200 border-none rounded-l-lg w-40 sm:w-40 md:w-40 text-xs"
                />
                <button className="px-4 md:px-6 h-8 text-xs text-white rounded-r-lg bg-black">
                  Get a Demo
                </button>
              </span>
            </div>
            <p className="text-xs pt-3 text-center md:text-right">
              Already using our service? <span className="font-bold">Sign In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </div>  
        </>
    );
}