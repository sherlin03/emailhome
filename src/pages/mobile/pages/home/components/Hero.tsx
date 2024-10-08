


export default function Hero() {
    return (
        <>
            <div className="bg-white relative w-full mx-auto mb-0 md:mb-24 ">
                <div className="relative container mx-auto px-4 md:px-0"> {/* Adjust padding for smaller screens */}
                    <img src="/images/mobile/Ellipse_7809.png" className="w-4 md:w-4 lg:w-4" alt="" />
                    
                    <div className="w-full md:w-5/6 mx-auto">
                        <div className="grid grid-cols-12 gap-6">
                            {/* Left Text Section */}
                            <div className="col-span-12 md:col-span-7">
                                <div>
                                    <p className="mt-6 text-base herocolor2">
                                        Simplify Your Court Booking Management <br className="hidden md:block"/> with our application
                                    </p>
                                    <p className="text-3xl md:text-6xl herocolor font-bold font-space lowercase z-10">
                                        SPORT COURT BOOKING MOBILE APPLICATION
                                    </p>
                                    <p className="text-sm herocolor2 mt-8 md:mt-12">
                                        Helping SaaS teams to increase e-commerce conversions, reduce bounce rate, and{" "}
                                        <span className="text-black font-black">scale up fast.</span>
                                    </p>

                                    <div className="mt-6 md:mt-8 flex justify-start">
                                        <input type="email" placeholder="you@domain.com" 
                                            className="px-4 py-2 bg-slate-200 border border-none rounded-l-lg " />
                                        <button className="px-6 py-2 text-sm text-white rounded-lg"
                                            style={{
                                                background: 'linear-gradient(326deg, #5877F8 37.65%, #FF20B2 78.67%, #FFBB03 102.38%)'
                                            }}>
                                            Get a Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Image Section */}
                            <div className="col-span-12 md:col-span-5 lg:col-span-5 flex justify-center md:justify-end">
                                <img src="/images/mobile/heroimg1.png" alt="heroimg" className="relative md:absolute -top-10 md:-top-20 right-0 z-50 hidden lg:block " 
                                    style={{ height: 'auto', width: '100%', maxWidth: '650px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
