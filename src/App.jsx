import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from './components/layout/Home'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";


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

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
