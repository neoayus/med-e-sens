# AI Health Monitoring System 

AI Health Monitoring System is a machine learning–based web application designed to predict diabetes risk based on medical input parameters. The system uses a trained machine learning model to analyze health-related data and provide a prediction indicating whether a person is at high or low risk of diabetes.

The application follows a client–server architecture where the frontend is built using React and the backend is developed using Flask. The machine learning model is trained using a healthcare dataset and integrated into the backend for prediction.

---

## Features

* Diabetes risk prediction using machine learning
* User-friendly web interface
* Form-based medical data input
* Real-time prediction results
* Full-stack architecture (React + Flask)
* Trained model integration using Pickle
* REST API communication between frontend and backend

---

## Project Structure

```
med-e-sense/
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   ├── model_training.py
│   ├── dataset.csv
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── README.md
```

---

## Technologies Used

### Frontend

* React
* HTML
* CSS
* JavaScript
* Vite

### Backend

* Flask
* Python
* Flask-CORS

### Machine Learning

* Scikit-learn
* Pandas
* NumPy
* Pickle

---

## Input Parameters

The system takes the following medical parameters as input:

* Pregnancies
* Glucose Level
* Blood Pressure
* Skin Thickness
* Insulin Level
* BMI
* Diabetes Pedigree Function
* Age

These inputs are passed to the machine learning model to generate the prediction.

---

## How to Run the Project

### Backend Setup

```
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## System Architecture

```
React Frontend → Flask Backend API → Machine Learning Model → Prediction → Frontend Display
```

---

## Future Improvements

* Add user authentication
* Add patient history storage
* Add more disease prediction models
* Deploy the application to cloud
* Improve UI/UX
* Add data visualization dashboard
