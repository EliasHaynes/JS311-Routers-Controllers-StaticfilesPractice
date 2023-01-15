const { products } = require('../data')

module.exports = {
    list: (req,res) => {
        return res.json(products)
    },
    show: (req,res) => {
        const grabId = req.params._id
        res.send(products[grabId -1])
    },
    create: (req,res) => {
        theBody = {
            _id: products[products.length -1]._id +1,
            ...req.body
        }
        products.push(theBody)
        res.json(products)
    }
}