const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [Array],
    image: String,
    description: String,
    showtimes: {
        type: [Array],
        default: ['13:00','15:30','14:00','17:50']
    }
});

module.exports = mongoose.model('Movie',movieSchema);