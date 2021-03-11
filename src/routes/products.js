import express from "express";
import Products from "../models/Products";

const router = express.Router();

//read
router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});

//post
router.post("/", async (req, res) => {
  const { _id, title, description, image, price, availableSizes } = req.body;

  try {
    const newProduct = new Products({
      _id,
      title,
      description,
      image,
      price,
      availableSizes,
    });
    const product1 = await newProduct.save();
    res.json(product1);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete by id
router.delete("/:productsid", (req, res) => {
  Products.findByIdAndDelete(req.params.productsid)
    .then(() => res.json("product was deleted"))
    .catch((err) => res.status(400).json("error" + err));
});

export default router;
