import "./App.css";
import Header from "./Components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="w-60  mx-auto">
        <Header />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
