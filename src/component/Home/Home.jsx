import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
// import Experieance from "../Experieance/Experieance";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OthersProjectCard from "../OthersProjectCard/OthersProjectCard";
import Project from "../Project/Project";
import ScrollBar from "../ScrollBar/ScrollBar";
import Skills from "../Skills/Skills";
import WhatNext from "../WhatNext/WhatNext";
import SkillsCard from "./../SkillsCard/SkillsCard";
import Design from "../Design/Design"; // Import the Design component
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-banner-bg font-bodyFont text-lightColor">
      <div>
        <Design />
        <Header />
        <Banner />
        <About />
        <Skills />
        <SkillsCard />
        {/* <Experieance /> */}

        <Project />
        <OthersProjectCard />
        <ReviewCarousel />
        <WhatNext />
        <Contact />
        <Footer />
        <ScrollBar />
      </div>

      {/* Add the Design component */}
    </div>
  );
};

export default Home;
