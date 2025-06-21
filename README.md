# Paytm Clone

A full-stack application that mimics the basic functionalities of Paytm, a popular digital payments platform. This project includes user authentication, account balance management, and fund transfers.

## Screenshots

*Landing Page*
![Landing Page Screenshot](https://via.placeholder.com/800x400.png?text=Landing+Page+Screenshot)

*User Dashboard*
![User Dashboard Screenshot](https://via.placeholder.com/800x400.png?text=User+Dashboard+Screenshot)

*Fund Transfer Page*
![Fund Transfer Screenshot](https://via.placeholder.com/800x400.png?text=Fund+Transfer+Page)


## Features

- **User Authentication:** Secure user sign-up and sign-in.
- **User Dashboard:** View account balance and transaction history.
- **Fund Transfer:** Seamlessly send money to other users on the platform.
- **Secure API:** Backend services protected with JSON Web Tokens (JWT).

## Tech Stack

**Frontend:**
- React.js
- Vite
- Tailwind CSS (Assumed from `index.css`)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- `dotenv` for environment management

## Local Development Setup

To get this project running on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Radhikapathak02/paytm-clone.git
cd paytm-clone
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following environment variables. Replace the placeholder values with your actual credentials.

```
DATABASE_URL="YOUR_MONGODB_CONNECTION_STRING"
JWT_SECRET="YOUR_SUPER_SECRET_JWT_KEY"
```

Then, start the backend server:
```bash
node index.js
```
The backend will be running on `http://localhost:3000`.

### 3. Setup the Frontend

Open a new terminal window and navigate to the `frontend` directory.

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```
The frontend will be running on `http://localhost:5173` (or another port if 5173 is in use).

---

To add your own images:
1. Take a screenshot of the application.
2. Place the image file in a directory like `frontend/public/images`.
3. Update the markdown in this file to point to your new image, like `![My Screenshot](./frontend/public/images/my-screenshot.png)`.
