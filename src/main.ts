import express from "express";
import cors from "cors"; //

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send({ hey: "hey" });
});

app.get("/test", (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.send({ hey: "hey" });
});

app.get("/", (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.send({ hey: "hey" });
});

app.listen(PORT, () => {
  console.log(PORT);
});
