import { useState } from "react";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";
import Reviews from "./component/Reviews/Reviews";
import Info from "./component/Info/Info";
import StepGuide from "./component/StepGuide/StepGuide";
import Footer from "./component/Footer/Footer";
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"} font-josefin`}>
      <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200">
        <Hero darkMode={darkMode} />
        <Services />
        <Reviews />
        <Info />
        <StepGuide />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
