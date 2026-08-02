import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import ModernCare from "./Components/ModernCare/ModernCare";
import Footer from "./Components/Footer/Footer";
import QuickExit from "./Components/QuickExit/QuickExit";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <Features />

        <ModernCare />
      </main>

      <Footer />

      <QuickExit />
    </div>
  );
}

export default App;