# Express Git AI Demo

A modern, production-ready Express.js application boilerplate designed to serve as a robust foundation for building AI-powered web services. This project implements best practices for security, scalability, and maintainability using ES Modules.

## 🚀 Features

- **Modern JavaScript**: Built with ES Modules (`import`/`export`) for native modern JS support.
- **Security First**: Integrated with `helmet` for secure HTTP headers and `cors` for resource sharing policies.
- **Developer Experience**: Pre-configured with `nodemon` for hot-reloading during development and `morgan` for request logging.
- **Scalable Architecture**: Organized folder structure (Controllers, Routes, Middleware) to support growth.
- **Robust Error Handling**: Centralized error handling and 404 management middleware.
- **Health Checks**: Built-in endpoints to monitor server status and uptime.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v4)
- **Configuration**: dotenv
- **Security**: Helmet, CORS
- **Logging**: Morgan

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/tweneboah/express-git-ai-demo.git
    cd express-git-ai-demo
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory (copy from default or create new):
    ```env
    PORT=3000
    NODE_ENV=development
    ```

## 🏃‍♂️ Running the Application

### Development Mode
Starts the server with hot-reloading enabled.
```bash
npm run dev
```

### Production Mode
Starts the server in production mode.
```bash
npm start
```

## 🔌 API Endpoints

### Health Check
- **URL**: `/api/health`
- **Method**: `GET`
- **Description**: Checks the server status and uptime.
- **Response**:
  ```json
  {
    "status": "success",
    "message": "Server is healthy",
    "timestamp": "2024-03-20T10:00:00.000Z",
    "uptime": 123.45
  }
  ```

## 📁 Project Structure

```
├── src/
│   ├── controllers/  # Route logic / Business logic
│   ├── middleware/   # Custom middleware (errors, auth)
│   ├── routes/       # Route definitions
│   ├── app.js        # Express app setup
│   └── index.js      # Entry point
├── .env              # Environment variables (gitignored)
├── .gitignore        # Git ignore rules
└── package.json      # Dependencies and scripts
```
