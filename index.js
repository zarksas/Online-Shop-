const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json());
app.use(require("./routes"));

mongoose
  .connect(
    "mongodb+srv://Yasin:yas565445@cluster0.6nddj.mongodb.net/online-shop"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
