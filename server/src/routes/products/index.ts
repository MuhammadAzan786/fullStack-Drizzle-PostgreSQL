import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World !");
});

router.get("/products", (req, res) => {
  res.send("products !!");
});

router.get("/product/:id", (req, res) => {
  console.log(req.params.id);
  res.send("product !!");
});

router.post("/createProduct", (req, res) => {
  res.send("product created !");
});

export default router;
