const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//Allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://salah:123@cluster0-rrfuk.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open',() => {
    console.log('Connection success');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('test');
});