const express = require("express"); // import express module (simplifies routing/requests, among other things)
const cors = require("cors"); // import the CORS library to allow Cross-origin resource sharing
const app = express(); // create an instance of the express module (app is the conventional variable name used)

const services = require("./services/api");

const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors()); // Enable CORS
app.use(express.json()); // Recognize Request Objects as JSON objects
app.use(express.static("build")); //load the front-end from public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/listAllProductNames/:sortType", async (req, res) => {
  var sortType = req.params.sortType ? req.params.sortType : 0;
  services
    .listAllProductNames(sortType)
    .then((result) => {
      res.status(200).json({
        status: "success",
        results: result.length,
        data: {
            products: result
        },
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: "success",
        error: err
      });
    });
});

app.get("/api/listAllProducts/:sortType", async (req, res) => {
  var sortType = req.params.sortType ? req.params.sortType : 0;
  services
    .listAllProducts(sortType)
    .then((result) => {
      res.status(200).json({
        status: "success",
        results: result.length,
        data: {
            products: result
        },
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: "success",
        error: err
      });
    });
});

app.get("/api/searchProductByName/:name", async (req, res) => {
  var params = req.params;
  var name = params.name ? params.name : "";
  if (name == "") {
    res.status(200).json({
      status: success,
      data: {},
      message: "Name of product is Mandatory",
    });
  } else {
    services
      .searchProductByName(name)
      .then((result) => {
        res.status(200).json({
          status: "success",
          data: {
            products: result
          },
        });
      })
      .catch((err) => {
        res.status(200).json({
          status: "success",
          error: err
        });
      });
  }
});

app.get("/api/checkProductExists/:name", async (req, res) => {
  var params = req.params;
  var name = params.name ? params.name : "";
  if (name == "") {
    res.status(200).json({
      status: success,
      data: {},
      message: "Name of product is Mandatory",
    });
  } else {
    services
      .checkProductExists(name)
      .then((result) => {
        res.status(200).json({
          status: "success",
          data: {
            products: result
          },
        });
      })
      .catch((err) => {
        res.status(200).json({
          status: "success",
          error: err
        });
      });
  }
}); 

app.listen(PORT, () => console.log(`Server running at port : ${PORT})`));
