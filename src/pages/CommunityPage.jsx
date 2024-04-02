// src/App.js
import React from "react";
import Quiz from "../components/Quiz";
import CommunityForm from "../components/CommunityForm";
import AnimatedPage from "../layouts/AnimatedPage";

const App = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center">
        <Quiz />
        <CommunityForm />
      </div>
    </AnimatedPage>
  );
};

export default App;
