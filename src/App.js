import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import WeatherReport from './components/WeatherReport/WeatherReport'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<WeatherReport/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
