import React from "react";
import "./App.css";

import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Domain from "./Components/Domain/Domain";
import Visit from "./Components/Visit/Visit";
import Sponsors from "./Components/Sponsors/Sponsors";
import Pricing from "./Components/Pricing/Pricing";
import Testimonials from "./Components/Testimonials/Testimonials";
import Support from "./Components/Support/Support";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

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
      <Blog />
      <Footer />
    </div>
  );
}

export default App;