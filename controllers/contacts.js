const { contacts }=  require('../data')

module.exports = {
    //GET
    list: (req,res) => {
        return res.json(contacts)
    },
    show: (req,res) => {
        const grabId = req.params._id
        res.send(contacts[grabId -1])
    },
    //POST
    create: (req,res) => {
        const record = {
            _id: contacts[contacts.length - 1]._id +1,
            ...req.body
        }
        contacts.push(record)
        return res.json(record)
    }
};