# book-library-app



A full-stack web application for managing a personal book library. Users can register, log in, create, read, update, and delete books from their collection.

**Repository:** https://github.com/supriya5645/book-library-app/tree/book_app

---

## 🚀 Features

- **User Authentication:** Secure registration and login functionality
- **Book Management:** Create, read, update, and delete books in your library
- **User-Specific Collections:** Each user has their own personalized book collection
- **Responsive Design:** Clean and user-friendly interface

---

## 🛠️ Technologies Used

**Backend:**

- Node.js
- Express.js
- MongoDB (or your database of choice)

**Frontend:**

- React.js
- Axios (for HTTP requests)
- CSS

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (if using MongoDB locally) - [Download here](https://www.mongodb.com/try/download/community)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/supriya5645/book-library-app.git
cd book-library-app
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` directory and configure your environment variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/book-library
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### 3. Set Up the Frontend

Navigate to the frontend directory (from the root):

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Configure the API endpoint in `src/api/axios.js` to match your backend URL (default is `http://localhost:5000`).

---

## 🏃 Running the Application

### Start the Backend Server

From the `backend` directory:

```bash
npm start
```

The server will run on `http://localhost:5000`

### Start the Frontend Development Server

From the `frontend` directory (in a new terminal):

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

---

## 📁 Project Structure

```
book-library-app/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── bookController.js     # Book management logic
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT authentication middleware
│   ├── models/
│   │   ├── Book.js               # Book schema
│   │   └── User.js               # User schema
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication endpoints
│   │   └── bookRoutes.js         # Book management endpoints
│   ├── package.json
│   └── server.js                 # Main server file
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookForm.js       # Form for adding/editing books
│   │   │   └── BookList.js       # Display list of books
│   │   ├── pages/
│   │   │   ├── Books.js          # Books page
│   │   │   ├── Login.js          # Login page
│   │   │   └── Register.js       # Registration page
│   │   ├── context/
│   │   │   └── AuthContext.js    # Authentication context
│   │   ├── api/
│   │   │   └── axios.js          # Axios configuration
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## 🔌 API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user

### Book Routes

- `GET /api/books` - Get all books for the authenticated user
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

---

## 🚀 Getting Started

1. Follow the installation steps above
2. Ensure MongoDB is running (if using locally)
3. Start the backend server
4. Start the frontend server in a new terminal
5. Open your browser and navigate to `http://localhost:3000`
6. Register a new account or log in to get started

---

## 🐛 Troubleshooting

**Backend won't start:**

- Ensure MongoDB is running
- Check that port 5000 is not in use
- Verify your `.env` file configuration

**Frontend won't connect to backend:**

- Ensure the backend is running on the correct port
- Check the API endpoint configuration in `src/api/axios.js`
- Look at browser console for error messages

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👤 Author

[Your Name]

For questions or suggestions, feel free to reach out or open an issue on the repository.
