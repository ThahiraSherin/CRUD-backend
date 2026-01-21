🚀 Lead Management System – Backend
📌 Project Description

This is the backend service for a Lead Management System built for managing customer leads efficiently.
It provides secure REST APIs for creating, updating, deleting, and viewing leads.
Authentication is handled using JWT, ensuring secure access for authorized users.

This backend is designed to be scalable and easily integrable with any frontend application.

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt

Axios (for API testing)

Postman

✨ Features

User Authentication (Login / Logout)

JWT-based Authorization

Create, Read, Update, Delete (CRUD) Leads

Secure protected routes

RESTful API structure

MongoDB data persistence

📂 Project Structure
CRUD-backend/
│
├── controllers/
│   └── leadController.js
│
├── models/
│   └── Lead.js
│
├── routes/
│   └── leadRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── config/
│   └── db.js
│
├── server.js
├── package.json
└── .env

⚙️ Environment Variables (.env)
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ How to Run the Backend
npm install
npm run dev


Server will run on:

http://localhost:3001

🔗 API Endpoints
🔐 Auth
Method	Endpoint	Description
POST	/api/auth/login	Login user
📋 Leads
Method	Endpoint	Description
GET	/api/leads	Get all leads
POST	/api/leads	Create a lead
PUT	/api/leads/:id	Update a lead
DELETE	/api/leads/:id	Delete a lead
🧪 Testing

APIs tested using Postman

Authorization token passed in headers

Authorization: Bearer <token>

👩‍💻 Author

Thahira Sherin
MERN Stack Developer

