import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from 'containers/navbar/Navbar';
import Footer from 'containers/footer/Footer'
import SortingSection from 'containers/sortingSection/SortingSection'
import Home from 'pages/Home';
import About from 'pages/About';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <SortingSection/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
