import "./App.scss";
import MainSlider from "./components/MainSlider/MainSlider";
import Information from "./components/Information/Information";
import About from "./components/About/About";
import Curriculum from "./components/Curriculum/Curriculum";
import Schedule from "./components/Schedule/Schedule";
import CallToEnrolChild from "./components/CallToEnrolChild/CallToEnrolChild";
import Teachers from "./components/Teachers/Teachers";
import Gallery from "./components/Gallery/Gallery";
import Sign from "./components/Sign/Sign";
import Advantages from "./components/Advantages/Advantages";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <MainSlider />
        <Information />
        <About />
        <Curriculum />
        <Schedule />
        <CallToEnrolChild />
        <Teachers />
        <Gallery />
        <Advantages />
        <Sign />
      </MainLayout>
    </>
  );
}

export default App;
