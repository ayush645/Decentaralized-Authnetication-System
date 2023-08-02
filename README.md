
![Screenshot 2023-08-02 195316](https://github.com/ayush645/Luganodes/assets/80757890/17adb753-4826-4c26-b0f6-355710889519)


  <h1><p align="center"><b><b>User Management System</b></b>
</p></h1>

<div align="center">

  <a href="">![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)</a>
  <a href="">![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)</a>
  <a href="">![Open In Collab](https://colab.research.google.com/assets/colab-badge.svg)</a>
  <a href="">[![Minimum node.js version](https://badgen.net/npm/node/express)](https://npmjs.com/package/express)</a>
</div>




### Flexible Authentication System with MERN Stack and Web3
Overview

This web application provides a flexible authentication system, allowing users to sign up and log in using either email/password or Web3 authentication with their Ethereum wallets. The MERN stack (MongoDB, Express.js, React.js, Node.js) is used for building the application. JWT (JSON Web Tokens) are employed for secure session management in both authentication methods.
Technologies Used

# The following technologies are used to develop the web application:

#   MERN Stack
        MongoDB: A NoSQL database used to store user information and other relevant data.
        Express.js: A web application framework for Node.js, used to create the backend server and APIs.
        React.js: A frontend JavaScript library for building interactive user interfaces.
        Node.js: A server-side JavaScript runtime environment used to run the backend server.

#    Web3
        Web3.js: A JavaScript library used to interact with the Ethereum blockchain and handle Web3 authentication with Ethereum wallets.

#    JSON Web Tokens (JWT)
        JWT is used for secure session management and generating authentication tokens.

    bcrypt.js
        bcrypt.js is utilized for hashing and salting user passwords, ensuring secure storage.

# Implementation Details

Here's a brief explanation of how the web application is implemented:
Backend (Node.js with Express.js)

    User Model: A MongoDB schema is created for the User model, containing fields like email, hashedPassword, and Ethereum wallet address.

    Authentication Routes: The backend includes routes for handling user authentication, such as:
        POST /api/signup: Used for user registration with email and password.
        POST /api/login: Used for user login with email and password.
        POST /api/web3login: Used for Web3 authentication with Ethereum wallets.

    Password Handling: When a user signs up or logs in with an email and password, the backend hashes and salts the password using bcrypt.js before storing it in the database.

    Web3 Authentication: For Web3 authentication, the backend interacts with the Ethereum blockchain using Web3.js. Users can sign messages with their Ethereum wallets, and the server verifies the signature to authenticate them.

    JWT Generation: After successful authentication, the server generates a JWT containing the user's information and returns it to the client.

Frontend (React.js)

    User Interface: The frontend provides a user interface with components for signup, login, and Web3 authentication.

    Signup and Login Forms: Users can sign up and log in using their email and password. The frontend sends API requests to the backend for these operations.

    Web3 Authentication: For Web3 authentication, the frontend interacts with the user's Ethereum wallet through Web3.js. The user signs a message, and the frontend sends the signature to the backend for verification.

    JWT Management: The frontend stores the JWT in the browser's local storage or session storage to manage the user's session.

# How to Interact with the UI

    Signup: To create an account, the user enters their email and password, then clicks on the "Sign Up" button.

    Login: For logging in, the user enters their email and password and clicks on the "Log In" button.

    Web3 Authentication: To log in using their Ethereum wallet, the user clicks on the "Web3 Login" button. The application requests access to the user's Ethereum wallet through Web3.js. The user signs a message with their wallet, and the application sends the signature to the backend for verification.

    JWT Usage: Once the user is successfully authenticated, the frontend stores the JWT received from the backend in local storage or session storage. The JWT is included in subsequent requests to authenticate the user for protected routes and API endpoints.





### Install Library:

 clone the project 

 1. cd server
 2. npm install
 3. cd client
 4.  npm install

 

### How to  run:

# Backend
1. cd server
2. npm run dev

# frontend
1. cd client
2. npm start

