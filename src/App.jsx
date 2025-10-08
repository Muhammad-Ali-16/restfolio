import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./layout/Layout"
import Home from './pages/Home'
import PagesHeader from './layout/PagesHeader'
import PageAbout from './pages/PageAbout'
import PageContact from "./pages/PageContact";
import PageFaq from "./pages/PageFaq";

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
            <Route path="/about" element={<><PagesHeader title='About Us' /><PageAbout /></>}></Route>
          </Route>
          <Route element={<Layout />}>
            <Route path="/contact" element={<><PagesHeader title='Contact Us' /><PageContact /></>}></Route>
          </Route>
          <Route element={<Layout />}>
            <Route path="/faq" element={<><PagesHeader title='FAQ Page' /><PageFaq /></>}></Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
