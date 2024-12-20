const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
  connectionLimit: 10,
  connectTimeout: 10000,
});

// Endpoint for signup
app.post('/signup', (req, res) => {
  const sqlCheck = "SELECT * FROM userinformation WHERE email = ?";
  const sqlInsert = "INSERT INTO userinformation (`name`, `email`, `password`, `repeat_password`) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.confirmpassword,
  ];

  db.query(sqlCheck, [req.body.email], (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (data.length > 0) {
      return res.status(409).json({ message: "Email already exists" }); // Conflict error
    }

    db.query(sqlInsert, values, (err) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ message: "Database error" });
      }

      return res.status(201).json({ message: "User registered successfully" });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Query the database
  const sql = "SELECT * FROM userinformation WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (data.length > 0) {
      return res.status(200).json({ message: "Login successful", user: data[0] });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

// Start the server
app.listen(3036, () => {
  console.log("Server running on http://localhost:3036");
});

