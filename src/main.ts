import express from "express";

const app = express();

const PORT = parseInt(process.env.PORT) || 8080;

app.get("", (req, res) => res.send("hey"));

app.listen(PORT, () => console.log("start at " + PORT));
