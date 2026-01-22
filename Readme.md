🚀 Lead Management System – Backend
📌 Project Description

This backend application is built for a Lead Management System that allows authenticated users to manage leads efficiently.
It provides secure REST APIs using JWT authentication and follows a modular MVC-style structure for maintainability and scalability.

The backend is designed to integrate seamlessly with a React frontend.

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt

dotenv

✨ Features

User authentication (Login)

JWT-based route protection

Create, Read, Update, Delete (CRUD) leads

Secure middleware for protected routes

Clean and modular folder structure

MongoDB database integration

📂 Project Structure
CRUD-backend/
│
├── controllers/
│   ├── authController.js
│   └── leadController.js
│
├── middleware/
│   └── authMiddleware.js
|   │__ errorMiddleware.js
|
├── models/
│   ├── Lead.js
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── leadRoutes.js
│
├── utils/
│   └── config.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
|__Readme.md
|__server.js

⚙️ Environment Variables

Create a .env file in the root directory and add the following values:

PORT=3001
MONGO_URI= mongodb+srv://thahirasherinbeauty225:Jinjuma09@cluster0.ryo0jx9.mongodb.net/CRUD
JWT_SECRET=your_jwt_secret

▶️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/CRUD-backend.git
cd CRUD-backend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file

Add MongoDB URI and JWT secret
npm install mongoose
npm install jsonwebtoken

Add development dependencies
npm install express

4️⃣ Start the Server
npm start
npm install nodemon -D

npm run dev

5️⃣ Server Runs At
http://localhost:3001

🔗 API Endpoints
🔐 Authentication Routes
Method	Endpoint	Description
POST   /api/auth/register User register
POST	/api/auth/login	User login
📋 Lead Routes (Protected)
Method	Endpoint	Description
GET	/api/leads	Get all leads
POST	/api/leads	Create a new lead
PUT	/api/leads/:id	Update a lead
DELETE	/api/leads/:id	Delete a lead
🔑 Authorization

All lead routes are protected using JWT.

Add the token in request headers:

Authorization: Bearer <your_token>

🧠 How It Works (Brief)

authController.js handles user authentication

authMiddleware.js verifies JWT tokens

leadController.js manages lead CRUD logic

routes define API endpoints

models define MongoDB schemas

utils/config.js handles DB connection

🧪 Testing

APIs tested using Postman

JWT token verified through middleware

All CRUD operations validated

👩‍💻 Author

Thahira Sherin
MERN Stack Developer


