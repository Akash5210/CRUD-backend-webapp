// This file is responsible for storing the logic and access with mongodb database ..like a brain

//since we also use mongodb so the request are promise based therefore we need to use exception handler. use any one try catch or express-async-handler
const asyncHandler = require("express-async-handler"); // responsible for handling error using express same as try catch block but in clean way 
const Register = require("../models/registerModel");  //importing Register model from registerModel file


//@desc Get all registrations
//@route GET /api/registrations
//@access public
const getRegistrations = asyncHandler(async (req, res)=> {
    const registrations = await Register.find();
    res.status(200).json(registrations);
});

//@desc Create New registration
//@route POST /api/registrations
//@access public
const createRegistration = asyncHandler(async (req, res)=> {
    console.log("The request body is :", req.body);

    const {fullName, 
        email, 
        password,
        gender,
        dob,
        address,
        state,
        zip,
        contact,
        } = req.body;
    
    if(!fullName || !email || !password || !gender || !contact){      //error handling
        res.status(400);
        // res.send({msg: "error"})
        throw new Error("All fields are mandatory !!")
    }
    
    const registration = await Register.create({
        fullName: fullName,
        email: email,
        password: password,
        gender: gender,
        dob: dob,
        address:address,
        state: state,
        zip: zip,
        contact: contact
    })
    res.status(201).json(registration);
});

//@desc Get a registration
//@route GET /api/registrations/:id
//@access public
const getRegistration = asyncHandler(async (req, res)=> {
    const registration = await Register.findById(req.params.id);
    if(!registration){
        res.status(404);
        throw new Error("Registration not found !")
    }

    res.status(200).json(registration);
});

//@desc Update registration
//@route PUT /api/registrations/:id
//@access public
const updateRegistration = asyncHandler(async (req, res)=> {
    const registration = await Register.findById(req.params.id);
    if(!registration){
        res.status(404);
        throw new Error("Registration not found !")
    }
    const updatedRegistration = await Register.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    console.log(req.body);
    res.status(200).json(updatedRegistration);
});

//@desc Delete registration
//@route DELETE /api/registrations/:id
//@access public
const deleteRegistration = asyncHandler(async (req, res)=> {
    const registration = await Register.findById(req.params.id);
    if(!registration){
        res.status(404);
        throw new Error("Registration not found !");
    }
    const deletedRegistration = await Register.findByIdAndDelete(
        req.params.id,
        {new: true}
    )
    res.status(200).json(deletedRegistration);
});

module.exports = {getRegistrations, createRegistration,getRegistration,updateRegistration,deleteRegistration};