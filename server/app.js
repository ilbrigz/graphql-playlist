const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise = global.Promise;
//make connection to database
mongoose.connect('mongodb://localhost:27017/graphqltest',{ useNewUrlParser: true });
	mongoose.connection.once('open',() => {
	console.log('connected to database');
})

const app = express();

//allo cross-origin request
app.use(cors());



app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
schema,
graphiql:true
}));




app.listen(4000, () => {
	console.log('now listening. . .')
});