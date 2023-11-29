import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Blog from "./pages/blog";

function App() {
  return (
    <BrowserRouter>
      <div className='w-60  mx-auto rel'>
        <Header />
        <main className='main-section-bottom-margin'>
          <Routes>
            <Route path='gokulportfolio/' element={<Home />} />
            <Route path='gokulportfolio/about' element={<About />} />
            <Route path='gokulportfolio/projects' element={<Projects />} />
            <Route path='gokulportfolio/blog' element={<Blog />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
