const { vehicles } = require('../data')

module.exports = {
    list: (req,res) => {
        return res.json(vehicles);
    },
    show: (req,res) => {
        const grabId = req.params._id
        res.send(vehicles[grabId -1])
    },
    create: (req,res) => {
        theBody = {
            _id: vehicles[vehicles.length -1]._id +1,
            ...req.body
        }
        vehicles.push(theBody)
        return res.json(vehicles)
    }
}