# JWT Authentication Project

This project implements secure user authentication using JSON Web Tokens (JWT) with a MERN (MongoDB, Express.js, React, Node.js) stack. It includes two sections: the frontend developed with Vite (React) and the backend using Express.js and MongoDB. Passwords are securely hashed using `bcrypt`.

After a user registers and logs in, they can submit and write any quote using the input form.

## Features
- User Registration with secure password hashing using `bcrypt`
- User Login with JWT-based authentication
- Input field to write and submit quotes after logging in
- JWT token stored in local storage for session management
- Vite for fast frontend development

## Tech Stack
### Frontend
- React (with Vite)
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose for object data modeling)
- bcrypt (for password hashing)
- JSON Web Tokens (JWT for authentication)

## Setup

### Prerequisites
- Node.js (v16.x or above)
- npm (v8.x or above)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/jwt-auth-mern-project.git
    cd jwt-auth-mern-project
    ```

2. Install dependencies for both the frontend and backend:
    - For the frontend:
      ```bash
      cd vite-project
      npm install
      ```

    - For the backend:
      ```bash
      cd server
      npm install
      ```

3. Setup environment variables:
   In the `server` folder, create a `.env` file with the following variables:


   MONGO_SECRET=YOUR-KEY



5. Start the application:
 - Start the backend server:
   ```bash
   cd server
   node index.js
   ```

 - Start the frontend:
   ```bash
   cd vite-project
   npm run dev
   ```


## Usage

1. Register a new user.
2. Log in with your registered credentials.
3. After successful login, you can enter any quote in the input field and submit it.





