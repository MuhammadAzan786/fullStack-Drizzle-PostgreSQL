import express from "express";
import productsRoute from "./routes/products/index";

const app = express();
const port = 3000;

app.use("/products", productsRoute);

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
