import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="image">Image URL:</label>
      <input
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
      />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        name="weight"
        type="number"
        value={formData.weight}
        onChange={handleChange}
      />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        name="greased"
        type="checkbox"
        checked={formData.greased}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
