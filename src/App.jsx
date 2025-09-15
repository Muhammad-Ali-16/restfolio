import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from './components/layout/Home'

function App() {
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
