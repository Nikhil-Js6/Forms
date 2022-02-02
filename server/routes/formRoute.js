const router = require('express').Router();
const Form = require('../models/Form');
const Response = require('../models/Response');


// Create the form

router.post("/form/create", async (req, res) => {
    const form = {...req.body};
    try {
        const newForm = new Form(form);
        const createdForm = await newForm.save();
        res.status(201).json(createdForm._id);
    }catch(err) {
        res.status(500).json("Something went Wrong!")
        console.log(err);
    }
});

// Get the form

router.get("/form/:id", async (req, res) => {
    const formId = req.params.id;
    try {
        const form = await Form.findById(formId);
        res.status(200).json(form);
    }catch(err) {
        res.status(500).json("Something went Wrong!");
        console.log(err);
    }
});

// Create Responses

router.post('/response/', async(req, res) => {
    const response = {...req.body};
    try {
        const newResponse = new Response(response);
        const savedResponse = await newResponse.save();
        res.status(201).json(savedResponse._id);
    }catch(err) {
        res.status(500).json("Something went Wrong!")
        console.log(err);
    }
});

// Get Responses

router.get('/response/:id', async(req, res) => {
    const responseId = req.params.id;
    try {
        const response = await Response.findById(responseId);
        res.status(200).json(response);
    }catch(err) {
        res.status(500).json("Something went Wrong!")
        console.log(err);
    }
});

// Update Responses

router.put('/response/:id', async(req, res) => {
    try {
        const response = await Response.findById(req.params.id);
        if(response.formId === req.body.formId){
            try {
                const updatedResponse = await Response.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedResponse);
            }catch(err) {
                res.status(500).json(err);
            }
        }
        else{
            res.status(403).json("You can't update the response!");
        }
    }catch(err) {
        res.status(500).json("Something went Wrong!");
        console.log(err);
    }
});

module.exports = router;
