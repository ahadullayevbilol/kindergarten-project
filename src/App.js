import './App.scss';
import Header from "./components/Header/Header";
import MainSlider from './components/MainSlider/MainSlider';
import Welcoming from './components/Welcoming/Welcoming';
import Information from './components/Information/Information';
function App() {



  return (
    <>
      <Header />
      <MainSlider />
      <Welcoming /> 
      <Information />
    </>
  );
}

export default App;