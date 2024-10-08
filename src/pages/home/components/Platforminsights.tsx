import { useGetSiteInfoListQuery } from "../../../lib/queries/siteinfo/useGetAllSiteInfoListQuery";

export default function PlatformInsights() {
  const { data: siteInfoList } = useGetSiteInfoListQuery();
  const siteInfo= siteInfoList??[];
    return (
      <section className="lg:px-10 pb-16 pt-16 bg-[#F5F7FF] rounded">
      <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <div className="flex flex-col self-center h-full px-2 mx-auto lg:w-3/6 sm:w-full">
        <img className="justify-center h-auto mx-auto " src="/images/platforminsights/img.png" alt="pic" />
        </div>
          <div className="lg:w-3/6 sm:w-[75%] sm:px-2 lg:px-2 mx-auto">
            <div className="flex flex-col justify-center h-full pb-1">
              <div>
              <p className="pt-10 text-xs">
                THE NUMBER ONE #DATATRACKING APP
              </p>
              <h1 className="pt-4 text-4xl font-bold lg:text-6xl md:text-3xl sm:text-3xl">
                Keep pushing 
                forward. We've got 
                your back.
              </h1>
              <p className="pt-4 text-sm md:text-xl">
                So how does it work? Let’s check our <b>Getting Started</b> <br/>
                tutorial or contact us for a demo.
              </p>
              </div>
                {siteInfo?.length > 0 && (
                  <div className="flex flex-row w-full gap-6 pt-8 lg:justify-start">
                <div className="flex flex-col w-2/5 pt-2 border-t border-slate-600">
                  <h2 className="pt-2 text-3xl font-bold">{siteInfo[0].teamCount} <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">+</span></h2>
                  <p className="pt-2 pb-3 text-xs">Designers <br /> and Developers</p>
                </div>
                <div className="flex flex-col w-2/5 pt-2 border-t border-slate-600">
                  <h2 className="pt-2 text-3xl font-bold">{siteInfo[0].projectHandled} <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">+</span></h2>
                  <p className="pt-2 pb-3 text-xs">Live promo <br /> Campaigns</p>
                </div>
                </div>
                )}
            </div>
          </div>

        </div>
      </section>
    );
  }
  