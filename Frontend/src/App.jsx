import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import EnquiryForm from "./Pages/Enquiry/EnquiryForm";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
      </Routes>
      </Router>
      <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
