import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://med-e-sens.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setResult(data.prediction);
  };

  return (
    <div className="container">
      <h1>AI Health Monitoring System</h1>
      <p className="subtitle">
        Diabetes Risk Prediction using Machine Learning
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input type="number" step="any" name="Pregnancies" placeholder="Pregnancies" onChange={handleChange} required />
          <input type="number" step="any" name="Glucose" placeholder="Glucose Level" onChange={handleChange} required />
          <input type="number" step="any" name="BloodPressure" placeholder="Blood Pressure" onChange={handleChange} required />
          <input type="number" step="any" name="SkinThickness" placeholder="Skin Thickness" onChange={handleChange} required />
          <input type="number" step="any" name="Insulin" placeholder="Insulin Level" onChange={handleChange} required />
          <input type="number" step="any" name="BMI" placeholder="BMI" onChange={handleChange} required />
          <input type="number" step="any" name="DiabetesPedigreeFunction" placeholder="Diabetes Pedigree Function" onChange={handleChange} required />
          <input type="number" step="any" name="Age" placeholder="Age" onChange={handleChange} required />
        </div>

        <button type="submit">Predict Risk</button>
      </form>

      {result && (
        <div className="result">
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
