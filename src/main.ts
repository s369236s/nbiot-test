import express from "express";
import cors from "cors"; //

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  console.log(req.body);
  res.send({ hey: "hey" });
});

app.listen(PORT, () => {
  console.log(PORT);
});
