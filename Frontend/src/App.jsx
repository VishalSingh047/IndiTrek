import React from "react";
import Navbar from "./Components/Navbar";
import EnquiryForm from "./Pages/Enquiry/EnquiryForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
