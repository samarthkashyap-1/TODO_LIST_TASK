TaskGenie - Todo List App
TaskGenie is a MERN (MongoDB, Express.js, React.js, Node.js) stack-based Todo List application. This repository contains both the frontend and backend code for TaskGenie.

Getting Started
To get started with TaskGenie, follow these steps:

Clone the repository:

git clone https://github.com/your-username/taskgenie.git

Navigate to the project directory:

cd taskgenie

Install backend dependencies:

cd backend
npm install
Install frontend dependencies:


cd ../frontend
npm install
Set up environment variables:

For the backend, create a .env file in the backend directory and add the following:

makefile

SECRET_KEY=your_secret_key
MONGO_URI=your_mongo_db_connection_uri


For the frontend, create a .env file in the frontend directory and add the following:

makefile
Copy code
VITE_REACT_APP_URL=your_backend_base_url


Start the backend server:

cd ../backend
npm run dev


Start the frontend development server:

cd ../frontend
npm run dev
Open your web browser and navigate to http://localhost:5173 to use TaskGenie.

Features
Add, edit, and delete tasks

Filter tasks by status (all, active, completed)
Responsive design with Tailwind CSS
Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.
