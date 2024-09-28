**EcoScan**

EcoScan is an innovative mobile application that promotes environmental awareness by helping users recycle waste materials.
The app allows users to discover creative ideas to turn waste into valuable products ("Best from Waste"). 
Additionally, EcoScan uses machine learning to classify different types of waste and provide specific recycling ideas for each category.

**Features**

User Authentication: Users can sign up by providing their first name, email, and password. They can log in using their email and password.
Waste Classification: Users can upload or capture photos of waste materials, and the system will automatically classify the waste using machine learning.
Recycling Ideas: Based on the classified waste, the app suggests creative and eco-friendly ideas for recycling.
User Posts: Users can browse through ideas posted by others, inspiring the community to recycle waste in innovative ways.

**Tech Stack**

Frontend: Flutter (Cross-platform mobile development)
Backend: Node.js 
Machine Learning: Python (TensorFlow for waste classification)
Database: PostgreSQL

**Installation & Setup**

Prerequisites

Flutter SDK installed on your machine
Node.js installed
Python with TensorFlow installed for machine learning
A running instance of the chosen database

**Setup**

Frontend (Flutter)
Navigate to the frontend directory:
cd frontend
Install Flutter dependencies:
flutter pub get
Run the application:
flutter run

Backend (Node.js)
Navigate to the backend directory:
cd backend
Install Node.js dependencies:
npm install
Set up environment variables for the database and other configurations.
Start the Node.js server:
npm start

Machine learning
Trained Model: The model (trained.h5) has been pre-trained using TensorFlow.
Flask API: A Flask server is used to connect the machine learning model with the frontend API.
Setup
Navigate to the ml directory:
 cd ml

Install the required Python packages:
pip install -r requirements.txt

Start the Flask server:
python app.py

**Usage**

Users can sign up and log in to the app to access the features.
Upload or take a photo of a waste material, and the app will provide recycling ideas based on its classification.
Browse through the "Best from Waste" ideas posted by others to get inspiration for recycling.
Future Enhancements
Enhance waste classification accuracy with a larger dataset.
Implement social sharing features for users to share their recycling ideas.
Introduce gamification to reward eco-friendly behavior.

Authors:

@Arbin Shrestha
@Dipesh Dhakal
@Jayadev Tripathi
@Sanjib Kasti


Project Demo:



       	                 
           
     



