const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const interestSchema = new Schema({
    username: {
        type: String
    },
    interests: {
        type: [String], 
    },
})

const InterestsModel = model('Interests', interestSchema);

module.exports = InterestsModel;