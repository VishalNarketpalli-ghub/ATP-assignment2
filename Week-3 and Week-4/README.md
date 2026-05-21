# Week 3 and Week 4

## Overview

This section covers backend development in two stages. The first stage is an in-memory Express API. The second stage adds MongoDB, schema validation, authentication, cookies, and middleware.

## Workflow

1. Start with basic Express routing and request handling.
2. Move to modular route handlers using `Router`.
3. Introduce persistent storage with MongoDB and Mongoose.
4. Add authentication with password hashing and JWT.
5. Protect routes with middleware and cookie-based token handling.

## Theory

- REST APIs organize functionality around resources and HTTP verbs.
- Middleware sits between request and response and can validate, transform, or reject requests.
- MongoDB stores documents, and Mongoose maps JavaScript objects to schemas and models.
- Passwords should be hashed before storage; plain-text storage is not acceptable.
- JWT enables signed authentication tokens, and `httpOnly` cookies reduce client-side exposure.

## Backend-Demo-1

### `server.js`

Creates the Express server, mounts the user and product routers, and enables JSON body parsing.

### `APIs/UserAPI.js`

Provides CRUD operations for users using in-memory arrays. It demonstrates route parameters, request bodies, and status codes.

### `APIs/ProductAPI.js`

Provides CRUD operations for products in the same in-memory style.

### `package.json`

Declares the Express dependency and project metadata.

### `.gitignore`

Ignores `node_modules` so local installs do not enter version control.

### `Readme.md`

Contains the original theory notes for the demo backend.

## Backend-with-DB

### `server.js`

Connects to MongoDB, configures middleware, mounts APIs, and starts the server after a successful database connection.

### `APIs/UserAPI.js`

Handles user CRUD, password hashing with bcrypt, login authentication, JWT creation, cookie storage, and a protected test route.

### `APIs/ProductAPI.js`

Handles product CRUD using MongoDB documents.

### `middlewares/verifyToken.js`

Reads the JWT cookie and verifies it before allowing access to protected routes.

### `models/UserModel.js`

Defines the user schema, including validation rules and timestamp tracking.

### `models/ProductModel.js`

Defines the product schema with validation and timestamps.

### `package.json`

Lists `express`, `mongoose`, `bcryptjs`, `jsonwebtoken`, and `cookie-parser` as dependencies.

### `.gitignore`

Ignores `node_modules` for the database-backed project as well.

### `README.md`

Contains the original theory notes for the database-backed backend.

## Suggested Run Pattern

For the demo backend, install dependencies and run the server entry point. For the database-backed version, make sure MongoDB is running locally before starting the server.

```bash
node Week-3 and Week-4/Backend-Demo-1/server.js
node Week-3 and Week-4/Backend-with-DB/server.js
```

## Learning Outcome

After these backend exercises, you should be able to design RESTful routes, manage request flow with middleware, and implement a secure authentication pattern using hashed passwords and token-based sessions.
