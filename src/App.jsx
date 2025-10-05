import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/layout/Layout"
import Home from './components/layout/Home'
import PagesHeader from './components/layout/PagesHeader'
import PageAbout from './pages/PageAbout'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<><Home /></>}></Route>
          </Route>
          <Route element={<Layout />}>
            <Route path="/about" element={<><PagesHeader title='About Us'/><PageAbout /></>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
