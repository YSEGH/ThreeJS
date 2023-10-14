import "./App.css";
import TagCloud from "./components/TagCloud";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Banner from "./components/Banner";
import Testimony from "./components/Testimony";
import Parallax from "./components/Parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "./components/Contact";
import Marquee from "./components/Marquee";
import Infos from "./components/Infos";

function App() {
  return (
    <>
      <Banner />
      <About />
      <TagCloud />
      <Carousel />
      <Testimony />
      <ParallaxProvider>
        <Parallax />
      </ParallaxProvider>
      <Contact />
      <Marquee />
      <Infos />
    </>
  );
}

export default App;
