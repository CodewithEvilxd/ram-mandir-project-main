import React from "react";
import Timeline from "../components/Timeline";
import Infobanner from "../components/Infobanner";
import Tips from "../components/Tips";
import AartiDetails from "../components/AartiDetails";
import AnimatedPage from "../layouts/AnimatedPage";

const DarshanPage = () => {
  return (
    <AnimatedPage>
      <Infobanner />
      <Timeline />
      <AartiDetails />
      <Tips />
    </AnimatedPage>
  );
};

export default DarshanPage;
