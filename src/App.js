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
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <SortingSection/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/post/:slug' element={<SinglePost/>}></Route>
      <Route path='/politika' element={<Home/>}></Route>
      <Route path='/vesti' element={<Home/>}></Route>
      <Route path='/zanimljivosti' element={<Home/>}></Route>
      <Route path='/hrana' element={<Home/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
