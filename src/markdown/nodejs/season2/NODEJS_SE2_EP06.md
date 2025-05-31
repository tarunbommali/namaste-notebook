# 06.Database,Schema & Models

---

## 1. Project Structure

```
/config
  database.js      # MongoDB connection logic
/models
  User.js          # Mongoose User schema & model
app.js             # Main application file
```

---

## 2. Database Connection

**Create `/config/database.js`:**

```js
const mongoose = require("mongoose");

const CONNECTION_STRING = process.env.MONGODB_URI || "YOUR_CONNECTION_URI_HERE/devTinder?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("MongoDB connection established successfully to devTinder database.");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

- Replace `YOUR_CONNECTION_URI_HERE` with your MongoDB Atlas connection string.
- Store sensitive info in environment variables.

---

## 3. User Schema & Model

**Create `/models/User.js`:**

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true
  },
  emailId: {
    type: String,
    required: [true, "Email ID is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    // In production, hash the password!
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
```

---

## 4. Main Application Setup

**Example `/app.js`:**

```js
const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName || !emailId || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ emailId: emailId.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists." });
    }

    // IMPORTANT: Hash the password before saving in production!
    // const bcrypt = require('bcryptjs');
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      emailId,
      // password: hashedPassword
      password // Plain text for demo only!
    });

    await newUser.save();

    const userResponse = {
      _id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      emailId: newUser.emailId,
      createdAt: newUser.createdAt
    };

    res.status(201).json({ message: "User created successfully in devTinder DB", user: userResponse });

  } catch (e) {
    console.error("Signup error:", e.message);
    if (e.name === 'ValidationError') {
      return res.status(400).json({ error: e.message });
    }
    res.status(500).json({ message: "Error creating user. Please try again." });
  }
});

// Connect to DB and start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and connected to devTinder DB.`);
  });
};

startServer();
```

---

## 5. Installation

```sh
npm install mongoose express
# For password hashing (recommended in production):
# npm install bcryptjs
```

---

## 6. MongoDB Atlas Setup

1. **Create a free cluster** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. **Add a database user** and set network access.
3. **Get your connection string** and update `database.js`.

---

## 7. Testing the Signup API

- Start your server:
  ```sh
  node app.js
  ```
- Use Postman or similar tool:
  - **POST** `http://localhost:7777/signup`
  - **Headers:** `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "emailId": "john.doe@example.com",
      "password": "password123"
    }
    ```

**Expected Response:**
```json
{
  "message": "User created successfully in devTinder DB",
  "user": {
    "_id": "...",
    "firstName": "John",
    "lastName": "Doe",
    "emailId": "john.doe@example.com",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

---

## 8. Error Handling

- **Duplicate Email:** Returns 409 Conflict.
- **Missing Fields:** Returns 400 Bad Request.
- **Validation Errors:** Returns 400 with error message.

---

## 9. Key Takeaways

- **Separate configuration** for DB logic.
- **Connect to DB before** starting the server.
- **Define schemas** for data structure.
- **Use models** for DB operations.
- **Hash passwords** in production!
- **Async/await** for DB operations.
- **Handle errors** gracefully.

---

## 10. Next Steps

- Add more routes (login, profile, etc.)
- Implement password hashing with `bcryptjs`.
- Add input validation and authentication.

---
