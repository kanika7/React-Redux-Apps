const express = require('express');
const projects = require('./routes/projects');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const DB =  'mongodb://localhost:27017/ProjectList';
mongoose.connect(DB, {useNewUrlParser: true})
         .then(
             () => {console.log('Database is connected')},
             err => {console.log('Error connecting to database',err)}
         )

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors());
const PORT = 3200;
app.use('/projects',projects);

app.listen(PORT, () => {
    console.log('Server is running on port: ',PORT);
})