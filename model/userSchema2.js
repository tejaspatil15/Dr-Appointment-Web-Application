const mongooose = require('mongoose');

const userSchema2 = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    date: {
         type: Date,
        required:true
    },
    
    time: {
        type: String,
       required:true
    },
    reason: {
        type: String,
       required:true
    }
})


const BOOK = mongooose.model('BOOK', userSchema2);

module.exports = BOOK;