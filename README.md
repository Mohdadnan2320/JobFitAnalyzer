# Neonflake: AI-Powered Resume Parser & Job Role Matcher

Neonflake is a **MERN stack** application that leverages **AI-powered resume parsing** and **job role matching** to provide users with the best job recommendations based on their skill set.

## 🚀 Features
- **Resume Parsing** using AI (Gemini API)
- **Job Role Matching** via Adzuna API
- **Interactive UI** with React & Tailwind CSS
- **MongoDB Database** for storing parsed resume data
- **RESTful API** with Express.js

## 🛠 Tech Stack
- **Frontend:** React.js (Vite), Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB (Mongoose)
- **APIs Used:** Gemini AI, Adzuna API



## ⚙️ Installation & Setup

### **1. Clone the Repository**
sh
git clone https://github.com/your-username/neonflake-ai-parser.git
cd neonflake-ai-parser

2. Install Dependencies
For Backend:
  cd backend
  npm install

For Frontend:
  cd frontend
  npm install
  
3. Configure Environment Variables
Create .env files in both frontend and backend directories.

Frontend (frontend/.env)
  VITE_BACKEND_URL=//your_backend_url
  
Backend (backend/.env)
  MONGO_URI=//your_mongo_db_url
  GEMINI_API_KEY=//your_gemini_api_key
  ADZUNA_APP_ID=//your_adzuna_app_id
  ADZUNA_API_KEY=//your_adzuna_api_key
  FRONTEND_URL=//your_frontend_url
  PORT=3000
  
4. Run the Application
Backend:
  cd backend
  npm start

Frontend:
  cd frontend
  npm run dev

📌 Deployment
You can deploy the frontend on Vercel/Netlify and the backend on Vercel/Render.
