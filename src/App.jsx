import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projetcs from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/ >}/>
          <Route path="/AboutMe" exact element={<AboutMe/ >}/>
          <Route path="/Projects" exact element={<Projetcs/ >}/>
          <Route path="/Contact" exact element={<Contact/ >}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
