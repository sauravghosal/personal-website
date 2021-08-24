import React from "react";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="px-5 sm:px-10 md:px-16 lg:px-36">
      <Hero />
      <Projects />
      {/* <About /> */}
      {/* <Element id="contact" name="contact">
        <Contact />
      </Element> */}
    </div>
  );
}

export default App;
