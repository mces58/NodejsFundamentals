const router = require("express").Router();

const data = {
  title: "User Page",
  categories: ["category 1", "category 2", "category 3"],
  products: [
    {
      id: 1,
      name: "product 1",
      price: 100,
      description: "lorem",
      image: "product1.jpg",
    },
    {
      id: 2,
      name: "product 2",
      price: 200,
      description: "lorem",
      image: "product2.jpg",
    },
    {
      id: 3,
      name: "product 3",
      price: 300,
      description: "lorem",
      image: "product3.jpg",
    },
    {
      id: 4,
      name: "product 4",
      price: 400,
      description: "lorem",
      image: "product4.jpg",
    },
  ],
};

router.get("/", (req, res, next) => {
  res.render("user/index", data);
});

module.exports = router;
