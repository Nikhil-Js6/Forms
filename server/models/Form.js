const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    responseId: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    fields:[
        {
            question: {type: String},
            options: [
                {
                    optionType: {type: String},
                    optionLabel: {type: String}
                }
            ],
        }
    ]
});

module.exports = new mongoose.model("Form", formSchema);
