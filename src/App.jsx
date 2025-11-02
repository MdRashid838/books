import { useState } from "react";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import BookDetails from "./components/pages/BookDetails";
import Footer from "./components/pages/Footer";
import Logout from "./components/pages/Logout";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
