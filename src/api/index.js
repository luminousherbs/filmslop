import express from "express";
const app = express();
app.use(express.json());

app.get("/api/is-this-true", (req, res) => res.json({ message: "probs not" }));

export default app;
