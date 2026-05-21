# Application

## Overview

This folder contains a small Express-based code execution gateway that accepts source code and a language identifier, then forwards the request to Judge0 through Axios. It is a backend integration exercise focused on API handling, request validation, middleware setup, and external service calls.

## Workflow

1. Create the Express app in `index.js`.
2. Enable JSON parsing and CORS so the endpoint can accept frontend requests.
3. Receive `code` and `languageId` from `POST /run`.
4. Forward the payload to Judge0 with Axios.
5. Return the Judge0 response directly to the client.

## Theory

- `express` provides the HTTP server and route handling.
- `cors` allows browser clients to call the API from another origin.
- `express.json()` parses incoming JSON request bodies.
- `axios` is used for outbound HTTP requests to Judge0.
- The route behaves like an API proxy: it accepts local input, relays it to a third-party service, and returns the result.

## Files

### `index.js`

Main server file. It creates the Express app, enables middleware, defines the `/run` route, and starts the server on port `5000`.

### `package.json`

Defines the application metadata and runtime dependencies: `express`, `axios`, and `cors`.

### `req.http`

REST Client request file used to test the `/run` endpoint from VS Code.

### `.gitignore`

Prevents `node_modules` from being tracked in Git.

## Notes

- Keep `node_modules` out of version control and reinstall dependencies with `npm install` when needed.
- The server currently trusts the Judge0 response directly; if you extend the app, add validation and error handling before exposing it as a public service.
