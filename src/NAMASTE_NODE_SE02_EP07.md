# 07. Diving into the API's

## Table of Contents
- [Difference between JSON and JavaScript Object](#difference-between-json-and-javascript-object)
- [Reading the Request from User](#reading-the-request-from-user)
- [Express Middleware](#express-middleware)
- [GET APIs](#get-apis)
  - [Display All Users Details (Feed)](#display-all-users-details-feed)
  - [Display User Details by Email](#display-user-details-by-email)
- [DELETE API](#delete-api)
- [PATCH API](#patch-api)
- [Options for findByIdAndUpdate](#options-for-findbyidandupdate)
- [Work / To Do with Answers](#work--to-do-with-answers)

---

## Difference between JSON and JavaScript Object

- **JavaScript Object:**  
  Native data structure in JS. Can have properties, methods (functions), symbols, `undefined`, etc.  
  Example:  
  ```js
  const obj = { name: "example", greet: () => "Hello" };
  ```
- **JSON Object:**  
  Text-based data format (string). Only supports string, number, array, object, boolean, null.  
  No functions, `undefined`, or symbols allowed.  
  Example:  
  ```json
  { "name": "example" }
  ```
- **Why not interchangeable?**  
  - JSON must be stringified (`JSON.stringify`) before sending over network and parsed (`JSON.parse`) to use as JS object.
  - JS objects can have types and values that JSON does not support.

---

## Reading the Request from User

Example request body:
```json
{
  "firstName": "example",
  "email": "example@gmail.com",
  "password": "example@123"
}
```
Dynamic data is received when API is called.

```js
app.post("/signup", async (req, res) => {
  // Readable state
  console.log(req.body);
  // If output is undefined, add express.json() middleware.
});
```

---

## Express Middleware

```js
app.use(express.json());
```
This middleware parses incoming JSON requests and puts the parsed data in `req.body`.

---

## GET APIs

### Display All Users Details (Feed)
```js
app.get("/feed", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("users not found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});
```

### Display User Details by Email
```js
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("user not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});
```

---

## DELETE API

```js
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send(user);
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});
```

---

## PATCH API

```js
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("user updated");
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});
```

---

## Options for findByIdAndUpdate

```js
await User.findByIdAndUpdate(
  { _id: userId },
  data,
  { returnDocument: "before" }
);
```
- `returnDocument: "before"` returns the document before update.

---
## Work / To Do with Answers

- **JS object vs JSON (difference):**  
  JavaScript objects are native data structures that can include functions, symbols, and undefined values. JSON is a string-based data format that only supports string, number, array, object, boolean, and null. They are not interchangeable because JSON must be stringified and parsed, and cannot contain functions or undefined.

- **Add the express.json middleware to your app:**  
  Add this line before your routes:  
  ```js
  app.use(express.json());
  ```

- **Make your signup API dynamic to receive data from the end user:**  
  Use `req.body` in your POST route to access user data sent in the request body.

- **User.findOne with duplicate email ids, which object returned:**  
  `User.findOne` returns the first matching user object found in the database, or `null` if none is found.

- **API - Get user by email:**  
  ```js
  User.findOne({ emailId: req.body.email })
  ```

- **API - Feed API (get all the users from the database):**  
  Use:  
  ```js
  User.find({})
  ```
  Or filter as needed.

- **API - Get user by ID:**  
  Use:  
  ```js
  User.findById(req.body.userId)
  ```

- **Create a delete user API:**  
  Use:  
  ```js
  User.findByIdAndDelete(req.body.userId)
  ```

- **Difference between PATCH and PUT:**  
  - `PATCH` updates only the specified fields in the document.  
  - `PUT` replaces the entire document with the new data.

- **API - Update a user:**  
  Use:  
  ```js
  User.findByIdAndUpdate(req.body.userId, req.body)
  ```

- **Explore the Mongoose Documentation for Model methods:**  
  [Mongoose Model Docs](https://mongoosejs.com/docs/models.html)

- **What are options in a Model.findOneAndUpdate method:**  
  Options include:  
  - `new`: Return the modified document rather than the original.  
  - `upsert`: Create the document if it does not exist.  
  - `returnDocument`: Specify whether to return the document before or after the update.

- **Update the user with email ID:**  
  Use:  
  ```js
  User.findOneAndUpdate({ emailId: req.body.email }, req.body)
  ```

- **Explore more about it:**  
  Read the official [Mongoose documentation](https://mongoosejs.com/docs/) and [Express documentation](https://expressjs.com/) for advanced usage and best practices.

---