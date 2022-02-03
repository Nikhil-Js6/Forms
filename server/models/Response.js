const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    totalResponses: {type: Number},
    fields:[
        {
            question: {type: String},
            answers: [],
            responses: [
                {
                    responseOption: {type: String},
                    responseValue: {type: String},
                }
            ],
        },
    ],
});


module.exports = new mongoose.model("Responses", responseSchema);
