import Product from "../models/product.model.js";

// Seed data
export const seedProducts = async () => {
  const products = [
    {
      name: "Essence Mascara Lash Princess",
      price: 9.99,
      image: "https://dummyjson.com/image/i/products/1/1.jpg",
    },
    {
      name: "iPhone 13 Pro Max",
      price: 1099.0,
      image: "https://api.slingacademy.com/public/sample-products/2.png",
    },
    {
      name: "Samsung Galaxy S22 Ultra",
      price: 1200.0,
      image: "https://api.slingacademy.com/public/sample-products/3.png",
    },
    {
      name: "Beats Studio Buds",
      price: 149.99,
      image:
        "https://fakestoreapi.com/img/61oYcB8kWNL._AC_UL600_SR600,600_.jpg",
    },
    {
      name: "Asus ROG Zephyrus G14",
      price: 1500.0,
      image: "https://api.slingacademy.com/public/sample-products/4.png",
    },
    {
      name: "Apple Watch Series 7",
      price: 399.99,
      image:
        "https://fakestoreapi.com/img/61oO99dL2UL._AC_UL600_SR600,600_.jpg",
    },
    {
      name: "Sony WH-1000XM4 Headphones",
      price: 349.99,
      image: "https://api.slingacademy.com/public/sample-products/6.png",
    },
    {
      name: "Logitech MX Master 3",
      price: 99.99,
      image: "https://dummyjson.com/image/i/products/5/1.jpg",
    },
    {
      name: "Dyson V11 Vacuum Cleaner",
      price: 599.99,
      image:
        "https://fakestoreapi.com/img/71jG+e7roXL._AC_UL600_SR600,600_.jpg",
    },
    {
      name: "Nintendo Switch OLED",
      price: 349.99,
      image: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    },
  ];
  await Product.insertMany(products);
  console.log("Products seeded successfully!");
};

// seedProducts();
