const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Serve images
app.use("/images", express.static(path.join(__dirname, "images")));

// ✅ Product data (clean & correct)
const products = [
  {
    id: 1,
    name: "Lace Black Corset",
    price: 350,
    type: "Corset",
    img: "images/IMG-20250918-WA0037.jpg"
  },
  {
    id: 2,
    name: "Classic Black Shapewear",
    price: 400,
    type: "Bodysuit",
    img: "images/IMG-20250918-WA0030.jpg"
  },
  {
    id: 3,
    name: "Elegant Body Corset",
    price: 350,
    type: "Corset",
    img: "images/IMG-20250918-WA0031.jpg"
  },
  {
    id: 4,
    name: "White Satin Corset",
    price: 350,
    type: "Corset",
    img: "images/IMG-20250918-WA0038.jpg"
  },
  {
    id: 5,
    name: "White Bustier Top",
    price: 350,
    type: "Corset",
    img: "images/IMG-20250918-WA0040.jpg"
  },
  {
    id: 6,
    name: "Black Lacy Shorts",
    price: 300,
    type: "Biker Shorts",
    img: "images/e9de166de2b94f719fcc0f5e9637f7e0.jpg"
  },
  {
    id: 7,
    name: "Tummy Tracker Pro",
    price: 300,
    type: "Tummy Tracker",
    img: "images/IMG-20250918-WA0042.jpg"
  },
  {
    id: 8,
    name: "Stylish Bodysuit",
    price: 400,
    type: "Bodysuit",
    img: "images/IMG-20250918-WA0044.jpg"
  },
  {
    id: 9,
    name: "Vintage Corset",
    price: 350,
    type: "Corset",
    img: "images/IMG-20250918-WA0047.jpg"
  }
];

// ✅ API route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ Start server (ONLY ONCE)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

