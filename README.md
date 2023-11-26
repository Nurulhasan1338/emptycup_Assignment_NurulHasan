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
- **Frame Work:** React + Vite
- **React.js:** A JavaScript library for building user interfaces.
- **Bootstrap:** A front-end framework for designing responsive and sleek interfaces.
- **Material UI:** A React UI framework that implements Google's Material Design.

### Backend

- **Node.js:** A JavaScript runtime for server-side development.
- **MongoDB:** A NoSQL database for storing and retrieving data efficiently.
- **Express.js:** A web application framework for Node.js that simplifies the creation of robust APIs.


## Project File Structure and Overview

**Root Directory:**
- **backend**
- **emptycup-frontend**
- **readme.md**

### Backend Folder:

1. **db.js:**
    - Manages the connection with the MongoDB Database.

2. **module:**
    - Contains `recode.js`, a file dedicated to creating the record Schema in the database. It meticulously defines attributes, their default values, and data types.

3. **index.js:**
    - The pivotal main file that orchestrates the entire backend. It calls `recode.js` and establishes all endpoints. Running this file initiates the server.

4. **DockerFile:**
    - Crafted for generating Docker images of the server application.

5. **.env:**
    - Safely stores sensitive and personal information.

6. **package.json:**
    - A comprehensive manifest file encompassing all application dependencies.

### Emptycup-Frontend Folder:

1. **src:**
    - Home to all components, styles, and assets that culminate in `index.html`.
      - **assets:**
         - A repository for all images and icons.
      - **Components:**
         - *CustomCard:* Exquisite designs for project cards.
         - *favlist:* Intuitively displays the shortlisted designers.
         - *header:* Exhibits the heading section and top menu.
         - *spinner:* A visually appealing loading animation during buffering.
      - **App.jsx:**
         - Orchestrates the integration of all built components.
      - **App.css:**
         - Houses all styles pertinent to the project.
      - **main.jsx:**
         - Executes the call to `App.jsx` and embeds it in the root element of `index.html`.

2. **DockerFile:**
    - Tailored for the seamless creation of Docker images for the frontend.

3. **others:**
    - A designated space for environment setup and miscellaneous configurations.

## Setup by Dockerhub

- Go to Dockerhub: [nurahasan/emptycup_assignment](https://hub.docker.com/repository/docker/nurahasan/emptycup_assignment)
- Pull both images using the following commands:

   - For backend image
   ```bash
   docker pull nurahasan/emptycup_assignment:backend-image
   ```

   - For frontend image
   ```bash
   docker pull nurahasan/emptycup_assignment:firstimages
   ```

- Then, create and run the containers using the pulled images. Use the images with their tag names while running:

   - For backend image
   ```bash
   docker run -d --rm -p 7000:7000 --name backend-container nurahasan/emptycup_assignment:backend-image
   ```

   - For frontend image
   ```bash
   docker run -d --rm -p 3000:3000 --name frontend-container nurahasan/emptycup_assignment:firstimages
   ```
- PORT : 3000 (for frontend)
- PORT : 7000 (for backend)



### ScreenShot
<img width="157" alt="image" src="https://github.com/Nurulhasan1338/emptycup_Assignment_NurulHasan/assets/75856743/f21efe7e-a6b5-43d9-a349-c152bf88a339">
