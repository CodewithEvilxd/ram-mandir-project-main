import AboutBanner from "../components/AboutBanner";
import Places from "../components/Places";
import Ramayana from "../components/Ramayana";
import Map from "../components/Map";
import AnimatedPage from "../layouts/AnimatedPage";

const AboutDarshan = () => {
  return (
    <AnimatedPage>
      <AboutBanner />
      <Places />
      <Ramayana />
      <Map />
    </AnimatedPage>
  );
};

export default AboutDarshan;
