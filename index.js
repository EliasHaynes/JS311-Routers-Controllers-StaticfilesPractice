const express = require("express");
const app = express();
const {comments, contacts, products, vehicles} = require('./data');
const routes =  require('./routes')
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(express.static('public'));
app.use(routes)


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});



