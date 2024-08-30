# Web Application - Monolithic & Microservices Versions

This repository contains two versions of a simple web application:

1. **Monolithic Version**: A single application where the frontend, backend, and database are tightly coupled.
2. **Microservices Version**: A refactored version using Docker, where the frontend, backend, and database are separated into distinct services.

## Monolithic Version

### Overview

The monolithic version includes a frontend built with React, a backend built with Node.js and Express, and a mock database using a JSON file. All components are integrated into a single application.

### Setup

1. **Navigate to the Monolithic App Directory**

    ```bash
    cd Monolithic-app
    ```

2. **Install Backend Dependencies**

    ```bash
    cd Backend
    npm install
    ```

3. **Install Frontend Dependencies**

    ```bash
    cd ../Frontend
    npm install
    ```

4. **Start the Backend Server**

    ```bash
    cd ../Backend
    node server.js
    ```

5. **Start the Frontend Development Server**

    ```bash
    cd ../Frontend
    npm start
    ```

    The frontend will be accessible at http://localhost:3000.
    The backend will be accessible at http://localhost:5000.

## Microservices Version

### Overview

The microservices version refactors the application into separate services for frontend, backend, and database, each running in its own Docker container. The frontend is publicly accessible, while the backend and database are private.

### Setup

1. **Navigate to the Microservices Directory**

    ```bash
    cd Microservices
    ```

2. **Build and Start the Services with Docker Compose**

    ```bash
    docker-compose up --build
    ```

    This command will:

    - Build the Docker images for the frontend and backend.
    - Start the containers based on the images.

### Access the Application

- Frontend: The React application will be available at http://localhost:3000.
- Backend: The Node.js API will be accessible at http://localhost:5000 (used internally by the frontend).

### Docker Compose Configuration

**Frontend Service:**

- Builds: Uses the Dockerfile in the Frontend directory.
- Ports: Maps port 3000 on the host to port 80 in the container.
- Depends On: Ensures the backend service starts before the frontend.

**Backend Service:**

- Builds: Uses the Dockerfile in the Backend directory.
- Ports: Maps port 5000 on the host to port 5000 in the container.
- Volumes: Mounts database.json for data access.
- Networks: Connects to the internal network for communication.
