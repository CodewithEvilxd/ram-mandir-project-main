import React from "react";
import Culture from "../components/Culture";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import ImageSlider from "../components/ImageSlider";
import AnimatedPage from "../layouts/AnimatedPage";

const MainPage = () => {
  return (
    <AnimatedPage>
      <ImageSlider />
      <Culture />
      <Gallery />
      <VideoSection />
    </AnimatedPage>
  );
};

export default MainPage;
