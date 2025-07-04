import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can integrate API logic here

    // Reset the form (optional)
    setFormData({ name: "", contact: "", email: "", message: "" });
  };

  return (
  <>
  <div className="bg-gray-50 pt-15 pb-10">
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-xl">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-center text-green-950">
        Enquiry Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Contact No</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  </>
  );
};

export default EnquiryForm;
