import Product from "../models/productModel.js";

export const handleGetProduct = async (req, res) => {
  res.send("Product1");
};
export const handleGetProducts = async (req, res) => {
  res.send("Product1");
};
export const handlePostProduct = async (req, res) => {
  const {
    brand,
    category,
    description,
    discountedPrice,
    imageUrls,
    inStock,
    price,
    review,
    slug,
    title,
  } = req.body;
  const productData = {
    brand,
    category,
    description,
    discountedPrice,
    imageUrls,
    inStock,
    price,
    review,
    slug,
    title,
  };

  const product = new Product(productData);
  const response = await product.save();
  console.log(response);
  res.send(response);
};
