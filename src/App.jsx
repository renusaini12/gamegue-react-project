import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutUsPage/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./Pages/ServicePage/Services";
import "./App.css";
import "../Header.css";
import Contact from "./Pages/ContactPage/Contact";
import OurGames from "./Pages/OurGamesPage/OurGames";
import Blog from "./Pages/BlogPage/Blog";
import CardContent from "./Pages/CardDetail/CardContent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-games" element={<OurGames />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Card-detail" element={<CardContent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
