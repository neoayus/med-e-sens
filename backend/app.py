from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

model = pickle.load(open("model.pkl", "rb"))

@app.route("/")
def home():
    return "Backend running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = [
        float(data["Pregnancies"]),
        float(data["Glucose"]),
        float(data["BloodPressure"]),
        float(data["SkinThickness"]),
        float(data["Insulin"]),
        float(data["BMI"]),
        float(data["DiabetesPedigreeFunction"]),
        float(data["Age"])
    ]

    final_features = [np.array(features)]
    prediction = model.predict(final_features)

    if prediction[0] == 1:
        result = "High Risk of Diabetes"
    else:
        result = "Low Risk of Diabetes"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(debug=True)