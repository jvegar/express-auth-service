# Express Authentication Service

A robust authentication service built with Node.js, Express, and MongoDB. This service provides user registration, login, and authentication functionality using JWT (JSON Web Tokens).

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- MongoDB database integration
- CORS support
- Cookie session management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Docker and Docker Compose (optional, for containerized deployment)

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd express-auth-service
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

### Using Docker

```bash
docker-compose up
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/verify` - Verify JWT token

## Project Structure

```
express-auth-service/
├── app/
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/        # Database models
│   └── routes/        # API routes
├── docker-compose.yml  # Docker configuration
├── package.json       # Project dependencies
└── server.js         # Application entry point
```

## Dependencies

- express: ^4.18.2
- mongoose: ^6.10.0
- jsonwebtoken: ^9.0.2
- bcryptjs: ^2.4.3
- cors: ^2.8.5
- cookie-session: ^2.1.0
- body-parser: ^1.20.2

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- CORS protection
- Secure cookie session management

## License

ISC

## Author

jvegar
