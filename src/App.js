import React, { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Domain from "./Components/Domain/Domain";
import Visit from "./Components/Visit/Visit";
import Sponsors from "./Components/Sponsors/Sponsors";
import Pricing from "./Components/Pricing/Pricing";
import Testimonials from "./Components/Testimonials/Testimonials";
import Support from "./Components/Support/Support";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <Domain />
      <Visit />
      <Sponsors />
      <Pricing />
      <Testimonials />
      <Support />
    </div>
  );
}

export default App;

// In order to use multiple components, I need to add react fragment
// or just a div that wraps all of the components.
