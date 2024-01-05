import express from "express";
import cors from "cors";

const PORT = 8080;
const app = express();
const database = { data: "Hello World" };

app.use(cors());
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.json(database);
});

// Gets data from the database

app.post("/", (req, res) => {
  database.data = req.body.data;
  res.sendStatus(200);
});

// If the database data equals the required data, a successful 200 status is received

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
