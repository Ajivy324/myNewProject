const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "have to enter a joke"],
        minlength: [10, "must be at least 10 charaters"]
    },
    punchline: {
        type: String,
        required: [true, "have to enter a punchline"],
        minlength: [3, "must be at least 3 charaters"]
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
