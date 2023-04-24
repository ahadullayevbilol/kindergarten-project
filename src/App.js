import './App.scss';
import Header from "./components/Header/Header";
import MainSlider from './components/MainSlider/MainSlider';
import Information from './components/Information/Information';
import About from './components/About/About';
import Curriculum from './components/Curriculum/Curriculum';
import Schedule from './components/Schedule/Schedule';
import CallToEnrolChild from './components/CallToEnrolChild/CallToEnrolChild';
import Teachers from './components/Teachers/Teachers';
import Gallery from './components/Gallery/Gallery';
import Sign from './components/Sign/Sign';
import Advantages from './components/Advantages/Advantages';

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;