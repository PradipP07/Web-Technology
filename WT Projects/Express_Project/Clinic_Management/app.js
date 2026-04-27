const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const clinicRoutes = require("./Routes/clinic");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/api", clinicRoutes);

// Page routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/book", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "book.html"));
});

app.get("/queue", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "queue.html"));
});

app.get("/doctor", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "doctor.html"));
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})