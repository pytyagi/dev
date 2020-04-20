const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect to Database
connectDB();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("API Running");
});

// Define Routes(Middleware)
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.process || 5050;

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});