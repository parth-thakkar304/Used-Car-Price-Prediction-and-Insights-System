"use client";

import { useState } from "react";

export default function PredictionForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    kmDriven: "",
    transmission: "",
    fuelType: "",
    owner: ""
  });

  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/predict`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            brand: formData.brand,
            model: formData.model,
            year: Number(formData.year),
            kmDriven: Number(formData.kmDriven),
            transmission: formData.transmission,
            fuelType: formData.fuelType,
            owner: formData.owner
          })
        }
      );

      const data = await res.json();
      setPrice(data.predicted_price);

    } catch (error) {
      console.error(error);
      alert("Backend error!");
    }

    setLoading(false);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl">

      <h2 className="text-3xl font-bold mb-6 text-center">
        🚗 Car Price Predictor
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <input name="brand" placeholder="Brand" onChange={handleChange} className="input" />
        <input name="model" placeholder="Model" onChange={handleChange} className="input" />
        <input name="year" placeholder="Year" onChange={handleChange} className="input" />
        <input name="kmDriven" placeholder="KM Driven" onChange={handleChange} className="input" />

        <input name="transmission" placeholder="Transmission" onChange={handleChange} className="input" />
        <input name="fuelType" placeholder="Fuel Type" onChange={handleChange} className="input" />
        <input name="owner" placeholder="Owner" onChange={handleChange} className="input col-span-2" />

        <button className="col-span-2 bg-blue-500 p-3 rounded-xl">
          {loading ? "Predicting..." : "Predict Price"}
        </button>
      </form>

      {price && (
        <div className="mt-6 text-green-400 text-xl text-center">
          💰 Price: ₹{price.toFixed(0)}
        </div>
      )}
    </div>
  );
}