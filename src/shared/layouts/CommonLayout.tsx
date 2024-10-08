import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import CustomFooter from "../components/CustomFooter";
import SocialMediaTag from "../components/SocialMediaTag";
import PageScroll from "../components/PageScroll";


export default function  CommonLayout() {
  const location = useLocation();
  const currentPath = location.pathname || "/";

  return (
    <>
      <Header />
      <PageScroll />
      <section className="relative mx-auto overflow-hidden container-fluid">
        <Outlet />

        {currentPath !== "/contact" && (
          <section className="py-12 bg-black md:py-20">
            <div className="px-4 mx-auto md:container md:px-0">
              <Collaboration />
            </div>
          </section>
        )}
 <SocialMediaTag/>
        <CustomFooter />
      </section>
    </>
  );
}
