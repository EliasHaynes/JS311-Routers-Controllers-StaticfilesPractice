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
        //Since index values in JavaScript begin at 0, the length property is always one more than the highest index value in the array we do -1
            // to get the real #, then later we add +1 to the id to get the next #
            _id: contacts[contacts.length - 1]._id +1,
            ...req.body
        }
        contacts.push(record)
        return res.json(contacts)
    }
};