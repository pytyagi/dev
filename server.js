const express = require("express");
const path=require("path")
const connectDB = require("./config/db");
const app = express();

// Connect to Database
connectDB();

app.use(express.json());
// app.get("/", (req, res) => {
   
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//      console.log("/ Prod dashboard route");
//       res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
//   }
// });

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Define Routes(Middleware)
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
