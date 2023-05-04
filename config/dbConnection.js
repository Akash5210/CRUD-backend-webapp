const mongoose = require("mongoose");

const registerDb = async ()=> {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/myRegistration-backend', { useNewUrlParser: true});
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = registerDb;