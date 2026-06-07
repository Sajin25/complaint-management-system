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

## 🧠 Challenges Faced

- **Connecting Frontend and Backend (CORS):** Because the React frontend runs on port `5173` and the Spring Boot backend runs on port `8080`, the browser blocked them from talking to each other at first due to security rules. I fixed this by setting up a custom `CorsConfig.java` file in the backend to safely allow communication between both sides.
- **Updating the UI Instantly:** When an admin changes a complaint status from "Pending" to "Resolved", the change needs to show up immediately on the screen. It was challenging to handle the asynchronous API call and update the frontend state smoothly without forcing a frustrating full-page refresh.
- **Protecting Dashboard Views:** Making sure regular users cannot view or access the Admin Dashboard. I had to implement conditional routing in React to check a user's role before letting them access specific dashboard pages.
- **Designing with Standard CSS:** Instead of using a shortcut layout framework, I built the entire interface using native CSS flexbox and media queries. Making complex data tables and dashboards look neat and responsive on small phone screens took careful layout planning.

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
