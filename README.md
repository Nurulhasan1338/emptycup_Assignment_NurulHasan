# EmptyCup Assignment

## Overview

This project is a dashboard displaying a list of designers along with their details such as pricing, past projects, ratings, etc.

## Local Environment Setup

### Frontend

1. Navigate to the `frontend` directory.
   ```bash
   cd frontend
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Run the development server.
   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the `backend` directory.
   ```bash
   cd backend
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Start the backend server.
   ```bash
   node index.js
   ```

## Technologies Used

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Bootstrap:** A front-end framework for designing responsive and sleek interfaces.
- **Material UI:** A React UI framework that implements Google's Material Design.

### Backend

- **Node.js:** A JavaScript runtime for server-side development.
- **MongoDB:** A NoSQL database for storing and retrieving data efficiently.
- **Express.js:** A web application framework for Node.js that simplifies the creation of robust APIs.

<<<<<<< HEAD

### Setup by Dockerhub 
- goto dockerhub 
- link : https://hub.docker.com/repository/docker/nurahasan/emptycup_assignment
- above link is of docker reposirtory name 'nurahasan/emptycup_assignment' where both frontend and backend images given
- pull both images as 
- for backend image
```bash
   docker pull nurahasan/emptycup_assignment:backend-image
```

- for frontend image
```bash
   docker pull nurahasan/emptycup_assignment:firstimages
```
- then simply make & run the containers with the help of images
- use images with there tag name while running as ```nurahasan/emptycup_assignment:backend-image ```

- command for running container 
```bash
docker run -d --rm -p PORT:PORT --name CONTAINER_NAME IMAGE_NAME 
```
- PORT : 3000 (for frontend)
- PORT : 7000 (for backend)
=======
### ScreenShot
<img width="157" alt="image" src="https://github.com/Nurulhasan1338/emptycup_Assignment_NurulHasan/assets/75856743/f21efe7e-a6b5-43d9-a349-c152bf88a339">

>>>>>>> 921a39d868dc172ef9e38192d9725ea4d90c4785
