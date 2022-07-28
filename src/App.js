import React from "react";
import BannerSection from "./section/BannerSection/BannerSection";
import OurServiceSection from "./section/OurServiceSection/OurServiceSection";
import DevStagesSection from "./section/DevStagesSection/DevStagesSection";
import StackTechSection from "./section/StackTechSection/StackTechSection";
import PortfolioSection from "./section/PortfolioSection/PortfolioSection";
import CommentsSection from "./section/CommentsSection/CommentsSection";
import AboutUsSection from "./section/AboutUsSection/AboutUsSection";
import OurTeamSection from "./section/OurTeamSection/OurTeamSection";
import Footer from "./components/footer/footer";


function App() {
   return (
      <>
         <BannerSection/>
         <OurServiceSection/>
         <DevStagesSection/>
         <StackTechSection/>
         <PortfolioSection/>
         <CommentsSection/>
         <AboutUsSection/>
         <OurTeamSection/>
         <Footer/>
      </>
   );
}

export default App;
