const pool = require("../dbConfig")

const listAllProductNames = async function(sort = 0) {
    var query = 'SELECT "food_Name","image_Url" FROM public."Food_Products" ORDER BY "food_Product"'
    var sortType = ""
    if (sort == 1) {
        sortType = "ASC"
    } else if (sort == -1) {
        sortType = "DESC"
    }
    query = query + " " + sortType;
    const { rows } = await pool.query(query)
    return rows;
}

const listAllProducts = async function(sort = 0) {
    var query = 'SELECT * FROM public."Food_Products" ORDER BY "food_Name"'
    var sortType = ""
    if (sort == 1) {
        sortType = "ASC"
    } else if (sort == -1) {
        sortType = "DESC"
    }
    query = query + " " + sortType;
    const { rows } = await pool.query(query)
    return rows;
}

const searchProductByName = async function(productName) {
    var results = [];
    if (typeof recipeName != "string") {
        throw("The given productName is invalid");
    }
    const query = {
        text: `SELECT * FROM public."Food_Products" WHERE UPPER("productName") like UPPER('%${food_Name}%')`
    }
    const { rows } = await pool.query(query)
    return rows;
}

const checkProductExists = async function(recipeName) {
    const query = {
        text: `SELECT * FROM public."Food_Products" WHERE UPPER("food_Name") like UPPER('%${food_Name}%')`
    }
    const { rows } = await pool.query(query)
    return rows;
}

module.exports = { listAllProductNames, listAllProducts, searchProductByName, checkProductExists }