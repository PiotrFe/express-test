import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log(`Server listening on port ${PORT}`);
});
