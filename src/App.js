import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favourites from './components/Favourites';

function App() {
  const arr = [1,2,3,4];
  return (
    <BrowserRouter>
      <NavBar> </NavBar>
      <Routes>
        <Route path='/' element={<>
            <Banner></Banner>
            <Movies></Movies>
            <Pagination></Pagination>
        </>} />
        
        <Route path='/favourites' element={<Favourites></Favourites>} />

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
