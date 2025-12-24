const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

let products = [
  { id: 1, name: "Lace Black Corset", price: 350, type: "Corset", img: "IMG-20250918-WA0037.jpg" },
  { id: 2, name: "Classic Black Shapewear", price: 400, type: "Bodysuit", img: "IMG-20250918-WA0030.jpg" },
  { id: 3, name: "Elegant Body Corset", price: 350, type: "Corset", img: "IMG-20250918-WA0031.jpg" },
  { id: 4, name: "White Satin Corset", price: 350, type: "Corset", img: "IMG-20250918-WA0038.jpg" },
  { id: 5, name: "White Bustier Top", price: 350, type: "Corset", img: "IMG-20250918-WA0040.jpg" },
  { id: 6, name: "Black Lacy Shorts", price: 300, type: "Biker Shorts", img: "e9de166de2b94f719fcc0f5e9637f7e0.jpg" },
  { id: 7, name: "Tummy Tracker Pro", price: 300, type: "Tummy Tracker", img: "IMG-20250918-WA0042.jpg" },
  { id: 8, name: "Stylish Bodysuit", price: 400, type: "Bodysuit", img: "IMG-20250918-WA0044.jpg" },
  { id: 9, name: "Vintage Corset", price: 350, type: "Corset", img: "IMG-20250918-WA0047.jpg" }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const { password, product } = req.body;
  if(password !== "Mercy2025") return res.status(403).json({ message: "Unauthorized" });
  const newProduct = { id: products.length + 1, ...product };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));