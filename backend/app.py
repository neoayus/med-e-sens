from flask import Flask, render_template, request
import pickle
import numpy as np

# Create Flask app
app = Flask(__name__)

# Load the trained model
model = pickle.load(open("model.pkl", "rb"))

# Home page
@app.route("/")
def home():
    return render_template("index.html")


# Prediction route
@app.route("/predict", methods=["POST"])
def predict():

    # Get form values
    values = request.form

    # Convert input values to float
    features = [float(x) for x in values.values()]

    # Convert to numpy array
    final_features = [np.array(features)]

    # Predict using trained model
    prediction = model.predict(final_features)

    # Interpret result
    if prediction[0] == 1:
        result = "⚠ High Risk of Diabetes"
    else:
        result = "✅ Low Risk of Diabetes"

    # Send result + input values back to HTML
    return render_template(
        "index.html",
        prediction_text=result,
        values=values
    )


# Run the application
if __name__ == "__main__":
    app.run(debug=True)