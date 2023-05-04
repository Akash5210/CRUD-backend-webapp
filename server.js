const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();  //importing the env file after downloading dotenv the package important for running this app on different environment like local system or some remote server environment

connectDb();                                //connecting the mongoDb database
const app = express();

//for cross origin resourse sharing. It act as a middleware for the express app
app.use(cors());

//sysntax written using app.use() works as middleware
app.use(express.json());  //syntax for body parsar using express

//this syntax works as a middleware and store the common path /api/contacts
app.use('/api/registrations', require("./routes/contactRoutes"));

app.use(errorHandler); // use as middleware for errorhandler



const port = process.env.PORT || 5000;

// http://localhost:5001/api/contacts/
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})

// type in cmd to run server using nodemon: npm run dev