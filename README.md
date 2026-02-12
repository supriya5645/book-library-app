# Book Library App

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing a personal book library. Users can securely register, log in, and manage their personalized book collection with full CRUD functionality.

---

## 🔗 Live Deployment Links

- **Frontend Application:** [https://Supriya5645.github.io/book-library-app](https://Supriya5645.github.io/book-library-app)
- **Backend API:** [Render Deployment URL]
- **GitHub Repository:** [https://github.com/supriya5645/book-library-app/tree/book_app](https://github.com/supriya5645/book-library-app/tree/book_app)

---

## Features

- **User Authentication:** Secure JWT-based registration and login system
- **Book Management:** Create, read, update, and delete books in your library
- **User-Specific Collections:** Each user has their own personalized, private book collection
- **Responsive Design:** Bootstrap-powered responsive interface
- **Client-side Routing:** Seamless navigation using React Router

---

## Technologies Used

**Backend:**

- Node.js with Express.js v5.2.1
- MongoDB Atlas (Cloud Database)
- JWT Authentication with bcryptjs for secure password hashing
- Express Validator for input validation

**Frontend:**

- React.js v19.2.4 with React Router v7.13.0
- Bootstrap v5.3.8 for responsive styling
- Axios for HTTP client communication
- Context API for state management

---

## Prerequisites

Before setting up locally, ensure you have the following:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** (for cloud database) - [Sign up here](https://www.mongodb.com/cloud/atlas)
- **Git** for version control

---

Installation

### 1. Clone the Repository

```bash
git clone https://github.com/supriya5645/book-library-app.git
cd book-library-app
git checkout book_app
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bookapp?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
```

**Environment Variables Explanation:**

- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB Atlas connection string
- `JWT_SECRET` - Secret key for JWT token signing (use a strong, random string)

### 3. Frontend Setup

Navigate to the frontend directory (from the root):

```bash
cd ../frontend
npm install
```

The API endpoint is configured in [src/api/axios.js](src/api/axios.js) to communicate with the backend (default:
Configure the API endpoint in `src/api/axios.js` to match your backend URL (default is `http://localhost:5000`).

---

## 🏃 Running the Application

### Start the Backend Server

From the `backend` directory:
Running the Application Locally

### Start the Backend Server

From the `backend` directory:

```bash
npm run dev
```

The backend API will run on `http://localhost:5000`

### Start the Frontend Development Server

From the `frontend` directory (open a new terminal):

```bash
npm start
```

The application will automatically

```
book-library-app/
├── backend/
│  Project Structure

```

book-library-app/
├── backend/
│ ├── config/
│ │ └── db.js # MongoDB connection configuration
│ ├── controllers/
│ │ ├── authController.js # Auth logic (register, login)
│ │ └── bookController.js # Book CRUD operations
│ ├── middleware/
│ │ └── authMiddleware.js # JWT verification middleware
│ ├── models/
│ │ ├── Book.js # Mongoose Book schema
│ │ └── User.js # Mongoose User schema
│ ├── routes/
│ │ ├── authRoutes.js # Auth endpoints
│ │ └── bookRoutes.js # Book management endpoints
│ ├── .env # Environment variables (not in repo)
│ ├── package.json
│ └── server.js # Express server entry point
│
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── src/
│ │ ├── components/
│ │ │ ├── BookForm.js # Book creation/edit form
│ │ │ └── BookList.js # Displays user's books
│ │ ├── pages/
│ │ │ ├── Books.js # Books management page
│ │ │ ├── Login.js # User login page
│ │ │ └── Register.js # User registration page
│ │ ├── context/
│ │ │ └── AuthContext.js # Global auth state management
│ │ ├── api/
│ │ │ └── axios.js # Axios instance configuration
│ │ ├── App.js # Main application component
│ │ ├── App.css # Application styles
│ │ ├── index.js # React entry point
│ │ └── index.css # Global styles
│ ├── package.json
│ └── README.md
│
└── README.md # Project documentationpoints

### Authentication Routes

- `API Endpoints

### Authentication Endpoints

| Method | Endpoint             | Description                             |
| ------ | -------------------- | --------------------------------------- |
| POST   | `/api/auth/register` | Register a new user account             |
| POST   | `/api/auth/login`    | Authenticate user and receive JWT token |

### Book Management Endpoints

| Method | Endpoint         | Description                               | Auth Required |
| ------ | ---------------- | ----------------------------------------- | ------------- |
| GET    | `/api/books`     | Retrieve all books for authenticated user | Yes           |
| POST   | `/api/books`     | Create a new book entry                   | Yes           |
| PUT    | `/api/books/:id` | Update an existing book                   | Yes           |

| DGetting Started

1. Complete the installation steps above
2. Verify MongoDB Atlas connection string in `.env`
3. Start the backend server from the `backend` directory: `npm run dev`
4. Start the frontend development server from the `frontend` directory: `npm start`
5. Open your browser to `http://localhost:3000`
6. Create a new account or use test credentials to log in

---

## Building for Production

### Frontend Deployment (GitHub Pages)

From the frontend directory:

```bash
npm run build      # Create optimized production build
npm run deploy     # Deploy to GitHub Pages
```

The frontend is configured to deploy to: `https://Supriya5645.github.io/book-library-app`

### Backend Deployment

Deploy the backend to a Node.js hosting service (e.g., Render, Heroku, Railway):

1. Push code to the `book_app` branch on GitHub
2. Connect your hosting provider to the repository
3. Set environment variables (`MONGO_URI`, `JWT_SECRET`, `PORT`)
4. Deploy and update frontend's API endpoint configuration

---

## Testing

### Run Backend Tests

```bash
cd backend
npm test
```

### Run Frontend Tests

```bash
cd frontend
npm test
```

---

## Troubleshooting

| Issue                             | Solution                                                                                 |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| Backend won't start               | Verify MongoDB Atlas connection in `.env`, check port 5000 is free                       |
| Frontend can't connect to backend | Ensure backend is running, check API endpoint in `src/api/axios.js`, verify CORS enabled |
| npm install fails                 | Delete `node_modules` and `package-lock.json`, run `npm install` again                   |
| Build fails                       | Clear browser cache, check Node.js version (v14+), run `npm cache clean --force`         |

---

## Test Credentials

For testing the application without creating a new account:

- **Email:** supriyasupriya5645@gmail.com
- **Password:** 123456

---

## License

This project is open source and available under the MIT License.

---

## Author

**Supriya** - [GitHub Profile](https://github.com/supriya5645)

For questions, feedback, or to report issues, please open an issue on the [GitHub repository](https://github.com/supriya5645/book-library-app).

---

## Security Notes

- Never commit `.env` file to version control
- Always use strong JWT secrets in production
- Keep all dependencies updated regularly
- Use HTTPS in production environments
- Validate all user inputs on both frontend and backend

4. Deploy and update frontend's API endpoint configuration

---

## Testing

### Run Backend Tests

```bash
cd backend
npm test
```

### Run Frontend Tests

```bash
cd frontend
npm test
```

---

## Troubleshooting

| Issue                             | Solution                                                                                 |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| Backend won't start               | Verify MongoDB Atlas connection in `.env`, check port 5000 is free                       |
| Frontend can't connect to backend | Ensure backend is running, check API endpoint in `src/api/axios.js`, verify CORS enabled |
| npm install fails                 | Delete `node_modules` and `package-lock.json`, run `npm install` again                   |
| Build fails                       | Clear browser cache, check Node.js version (v14+), run `npm cache clean --force`         |

---

## Test Credentials

For testing the application without creating a new account:

- **Email:** supriyasupriya5645@gmail.com
- **Password:** 123456ct port
- Check the API endpoint configuration in `src/api/axios.js`
- Look at browser console for error messages

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👤 Author

Supriya

For questions or suggestions, feel free to reach out or open an issue on the repository.
