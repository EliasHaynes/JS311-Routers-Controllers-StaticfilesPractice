const { comments } = require('../data')

module.exports = {
    list: (req,res) => {
        return res.json(comments)
    },
    show: (req,res) => {
        const grabId = req.params._id
        console.log('The id:', grabId)
        res.send(comments[grabId -1])
        console.log('finished')
    },
    create: (req,res) => {
        const theBody = {
            _id: comments[comments.length -1]._id +1,
            ...req.body
        }
        comments.push(theBody)
        return res.json(comments)
    }
};