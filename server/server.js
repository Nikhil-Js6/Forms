const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoute = require('./routes/formRoute');

const app = express();

mongoose.connect('mongodb://localhost:27017/forms', () => {
    console.log("Connected to the DB \u{1F525}");
});

app.use(cors({origin:'*'}));
app.use(express.json());
app.use("/", formRoute);

app.listen("3300", () =>{
    console.log("Server Started on port: 3300 \u{1F680}");
});
