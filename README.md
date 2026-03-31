
# AI Health Monitoring System

AI Health Monitoring System is a machine learning–based web application designed to predict diabetes risk based on medical input parameters. The system uses a trained machine learning model to analyze health-related data and provide a prediction indicating whether a person is at high or low risk of diabetes.

The application follows a client–server architecture where the frontend is built using React and the backend is developed using Flask. The machine learning model is trained using a 
healthcare dataset and integrated into the backend for prediction.

---

## Live Deployment

The application is deployed online and can be accessed using the following links:

[frontend@render](https://med-e-sens-frontend-jbeu.onrender.com/)
[apiserver@render](https://med-e-sens.onrender.com/)

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

```id="3jybcl"
med-e-sense/
│
├── backend/
│   ├── venv/
│   ├── app.py
│   ├── dataset.csv
│   ├── model_training.py
│   ├── model.pkl
│   ├── requirements.txt
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│
├── .gitignore
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

```id="plg6rj"
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

The backend server will start at:

```id="q6qztu"
http://127.0.0.1:5000
```

### Frontend Setup

Open a new terminal:

```id="lv3g64"
cd frontend
npm install
npm run dev
```

Then open:

```id="qg82jo"
http://localhost:5173
```

---

## System Architecture

```id="4jjhb6"
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

