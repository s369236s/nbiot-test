import express from "express";

async function boostrap() {
  const app = express();

  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/test", (req, res) => {
    console.log(req.body);
    res.send({ hey: "hey" });
  });

  app.listen(PORT, () => {
    console.log(PORT);
  });
}

boostrap();
