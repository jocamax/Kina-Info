import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './containers/navbar/Navbar';
import Footer from './containers/footer/Footer'
import SortingSection from './containers/sortingSection/SortingSection'
import SinglePost from './pages/singlepost/SinglePost';
import Home from './pages/Home';
import Politika from './pages/Politika';
import Vesti from './pages/Vesti';
import Hrana from './pages/Hrana';
import Zanimljivosti from './pages/Zanimljivosti';
import About from './pages/About';



function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <SortingSection/>
    <Routes>
      <Route path='/post:slug' element={<SinglePost/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/post/:slug' element={<SinglePost/>}></Route>
      <Route path='/zanimljivosti' element={<Zanimljivosti/>}></Route>
      <Route path='/politika' element={<Politika/>}></Route>
      <Route path='/hrana' element={<Hrana/>}></Route>
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
