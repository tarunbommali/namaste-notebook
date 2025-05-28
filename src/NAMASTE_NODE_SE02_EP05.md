# 05. Middlewares and Error Handlers in Express

This episode covers how to use **middlewares** and **error handlers** in Express.js for better code organization, security, and error management.

---

## Table of Contents

- [What is Middleware?](#what-is-middleware)
- [Route Handlers & Multiple Handlers](#route-handlers--multiple-handlers)
- [Authorization Middleware Example](#authorization-middleware-example)
- [Error Handling in Express](#error-handling-in-express)
- [Best Practices](#best-practices)

---

## What is Middleware?

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. They can:

- Execute code
- Modify the request and response objects
- End the request-response cycle
- Call the next middleware in the stack

---

## Route Handlers & Multiple Handlers

You can define multiple handlers for a single route. Use `next()` to pass control to the next handler.

```js
const express = require("express");
const app = express();

// Multiple route handlers for the same path
app.use("/user", (req, res, next) => {
  console.log("Handling the route user1");
  // If you don't send a response here, call next()
  next();
}, (req, res) => {
  console.log("Handling the route user2");
  res.send("response 2");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777.");
});
```

**Note:**  
If you don't call `next()`, the next handler will not be executed.

---

### Another Way: Multiple `.get()` Handlers

```js
app.get("/user", (req, res, next) => {
  console.log("handling the route user1");
  next();
});

app.get("/user", (req, res) => {
  console.log("handling the route user2");
  res.send("2nd route handler");
});
```

---

## Authorization Middleware Example

Instead of repeating authorization logic in every route, use middleware:

```js
// Authorization middleware for all /admin routes
app.use("/admin", (req, res, next) => {
  console.log("admin auth is getting checked!");
  const token = "xyz"; // Dummy token for example
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("unauthorized request");
  } else {
    next();
  }
});

// Admin routes
app.get("/admin/getUsers", (req, res) => {
  res.send("all Data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("delete User");
});
```

---

## Error Handling in Express

Express recognizes error-handling middleware by the presence of **four arguments**: `(err, req, res, next)`.  
Always place error handlers **after all other app.use() and routes**.

```js
// Example route that triggers an error
app.get("/admin", (req, res, next) => {
  console.log("Inside /admin route");
  const error = new Error("This is an error");
  next(error); // Pass error to error-handling middleware
});

// Error-handling middleware (wildcard)
app.use((err, req, res, next) => {
  if (err) {
    console.error("Caught error:", err.message);
    res.status(500).send("Internal Server Error: " + err.message);
  }
});
```

**Important:**  
- The order of parameters matters: `err` must be the first parameter.
- Keep wildcard error handlers at the end of your middleware stack.
- Do **not** rely solely on this; use `try...catch` in your async route handlers as well.

---

## Best Practices

- **Always use `next()`** if you want to pass control to the next middleware or handler.
- **Group common logic** (like authentication/authorization) into middleware.
- **Place error-handling middleware last**.
- **Use `try...catch`** in every API call, especially with async/await.
- **Do not send multiple responses** for the same request.

---

## Summary

- Middlewares help organize code and avoid repetition.
- Use multiple handlers for modular logic.
- Authorization and error handling are best managed with middleware.
- Always handle errors gracefully for better debugging and user experience.

---

**Happy Coding!**