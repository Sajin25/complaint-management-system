# Complaint Management System

A full-stack web application designed to handle and manage user complaints efficiently. Built with a Java/Spring Boot backend, a React (Vite) frontend, and MongoDB for the database.

## 🚀 Features Implemented

*   **User Authentication**: Secure user registration and login functionality.
*   **Role-Based Access**: Distinct experiences for regular users and administrators.
*   **User Dashboard**:
    *   Submit new complaints.
    *   View the status of previously submitted complaints (e.g., Pending, In Progress, Resolved).
*   **Admin Dashboard**:
    *   View all submitted complaints across the system.
    *   Update the status of complaints (transition from "Pending" to "In Progress" or "Resolved").
*   **RESTful API**: Seamless communication between the React frontend and the Spring Boot backend.
*   **CORS Configuration**: Secure cross-origin resource sharing configured for the frontend and backend to communicate seamlessly.

## 🛠️ Technology Stack

*   **Frontend**: React (Vite), JavaScript, HTML/CSS
*   **Backend**: Java, Spring Boot
*   **Database**: MongoDB

## 💻 Steps to Run the Project

### Prerequisites
*   Node.js installed
*   Java 17 or higher installed
*   Maven installed
*   MongoDB running locally or a MongoDB Atlas connection string

### Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Make sure your MongoDB connection string is properly configured in `src/main/resources/application.properties` (or `application.yml`).
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   *The backend should start running typically on port 8080.*

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend should start running, typically accessible at http://localhost:5173.*

## 🚧 Challenges Faced

*   **Status Update Synchronization**: One of the main challenges was ensuring that the API communication between the React frontend and the Spring Boot backend correctly handled the status updates in the Admin Dashboard. Managing the transition of complaints from "Pending" to "In Progress" or "Resolved" and immediately reflecting these changes in the UI required careful state management and asynchronous data fetching.
*   **CORS Issues**: Configuring Cross-Origin Resource Sharing (CORS) correctly so the Vite frontend could securely talk to the Spring Boot backend on different ports.
*   **Role-Based Routing**: Ensuring that users and admins were restricted to their specific dashboards and preventing unauthorized access to administrative features.

## 💡 What I Learned

*   **Full-Stack Integration**: Gained hands-on experience in connecting a Java Spring Boot backend with a modern React frontend built with Vite.
*   **State Management**: Improved skills in managing complex component states in React, especially when dealing with data fetched from an external API.
*   **Spring Boot Configurations**: Learned how to configure CORS effectively in a Spring Boot application to allow secure requests from the frontend.
*   **MongoDB with Spring Boot**: Deepened understanding of using Spring Data MongoDB to perform CRUD operations.

## 📸 Screenshots

*(Add your screenshots here by replacing the placeholder links)*

### User Dashboard
![User Dashboard](path/to/user-dashboard-screenshot.png)

### Admin Dashboard
![Admin Dashboard](path/to/admin-dashboard-screenshot.png)

### Submit Complaint Form
![Submit Complaint](path/to/submit-complaint-screenshot.png)
