import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import GalleryPage from "./Pages/GalleryPage"
import MenuPage from "./Pages/MenuPage"
import ContactPage from "./Pages/ContactPage"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Routes>
  <Route path='/' exact element={<HomePage/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/gallery' element={<GalleryPage/>}/>
  <Route path='/menu'  element={<MenuPage/>}/>
  <Route path='/contact'  element={<ContactPage/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
