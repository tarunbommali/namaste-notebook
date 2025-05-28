# 04. Routing and Request Handlers in Express.js

This episode covers how to set up Git, create and organize routes in Express.js, test APIs with Postman, and use advanced routing patterns.

---

## Table of Contents

- [Git Setup](#git-setup)
- [Creating a .gitignore File](#creating-a-gitignore-file)
- [Pushing Code to GitHub](#pushing-code-to-github)
- [Defining Routes in Express](#defining-routes-in-express)
- [HTTP Methods in Express](#http-methods-in-express)
- [Testing APIs with Postman](#testing-apis-with-postman)
- [Wildcard & Flexible Routes](#wildcard--flexible-routes)
- [Advanced Routing Patterns](#advanced-routing-patterns)
- [Summary](#summary)

---

## Git Setup

Initialize a new Git repository in your project folder:

```bash
git init
```

---

## Creating a .gitignore File

Add a `.gitignore` file to exclude unnecessary files from your repository:

```
node_modules/
.env
```

---

## Pushing Code to GitHub

1. Create a new repository on GitHub.
2. Run the following commands to push your code:

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

---

## Defining Routes in Express

Routes define how your app responds to client requests.

```js
const express = require('express');
const app = express();

app.get('/xyz', (req, res) => {
  res.send('XYZ GET');
});

app.post('/test', (req, res) => {
  res.send('POST to /test');
});

app.listen(7777, () => {
  console.log('Server is running on port 7777');
});
```

> **Note:** The order of routes matters! Define specific routes before wildcard routes.

---

## HTTP Methods in Express

| Method | Description       |
|--------|-------------------|
| GET    | Fetch data        |
| POST   | Create data       |
| PATCH  | Update partially  |
| DELETE | Remove data       |

**Example:**

```js
app.get('/user', (req, res) => res.send('GET user'));
app.post('/user', (req, res) => res.send('POST user'));
app.patch('/user', (req, res) => res.send('PATCH user'));
app.delete('/user', (req, res) => res.send('DELETE user'));
```

---

## Testing APIs with Postman

1. Download and install [Postman](https://www.postman.com/downloads/).
2. Create a workspace.
3. Test your routes using GET, POST, PATCH, and DELETE requests.

---

## Wildcard & Flexible Routes

### General Middleware (Wildcard Route)

```js
app.use('/test', (req, res) => {
  res.send('Wildcard match for /test with any method');
});
```

### Specific Method

```js
app.get('/user', (req, res) => {
  res.send('GET user route');
});
```

---

## Advanced Routing Patterns

| Pattern            | Matches Example           | Description                                |
|--------------------|---------------------------|--------------------------------------------|
| `/ab+c`            | `/abc`, `/abbc`, `/abbbc` | One or more `b`                            |
| `/ab?c`            | `/abc`, `/ac`             | Optional `b`                               |
| `/ab*cd`           | `/abcd`, `/ab123cd`       | Anything between `ab` and `cd`             |
| `/a(bc)d`          | `/ad`, `/abcd`            | Optional `bc`                              |
| `/a(bc)+d`         | `/abcd`, `/abcbcd`        | One or more `bc`                           |
| Regex `/a/`        | Matches route using regex | Useful for more advanced matching          |

---

## Summary

- Initialized Git & pushed code to GitHub.
- Learned basic and advanced routing in Express.js.
- Used Postman to test various API methods.
- Explored wildcard and pattern-based routes.

> 🧠 **Routing is core to building APIs — understanding order and pattern matching will save you from big bugs!**

---