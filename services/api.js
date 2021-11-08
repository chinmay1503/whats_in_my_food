const pool = require("../dbConfig")

const listAllProductNames = async function(sort = 0) {
    var query = 'SELECT "food_name","image_url" FROM public."food_products" ORDER BY "food_name"'
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
    var query = 'SELECT * FROM public."food_products" ORDER BY "food_name"'
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
    if (typeof productName != "string") {
        throw("The given productName is invalid");
    }
    const query = {
        text: `SELECT * FROM public."food_products" WHERE UPPER("food_name") = UPPER('${productName}')`
    }
    const { rows } = await pool.query(query)
    return rows;
}

const checkProductExists = async function(productName) {
    const query = {
        text: `SELECT * FROM public."food_products" WHERE UPPER("food_Name") like UPPER('%${food_name}%')`
    }
    const { rows } = await pool.query(query)
    return rows;
}

module.exports = { listAllProductNames, listAllProducts, searchProductByName, checkProductExists }