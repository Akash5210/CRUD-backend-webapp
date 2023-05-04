// this file is responsible for storing all the routes i.e. endpoints and methods
const express = require("express");
const router = express.Router();
const {getRegistrations,
     createRegistration,
     getRegistration,
     updateRegistration,
     deleteRegistration} = require("../controllers/registerController");


router.route("/").get(getRegistrations);

router.route("/").post(createRegistration);

// the above two routes have the route so,it can be written as shorthand also like 
// router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getRegistration)

router.route("/:id").put(updateRegistration)

router.route("/:id").delete(deleteRegistration)

module.exports = router;