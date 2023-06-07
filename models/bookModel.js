const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add Name"]
    },
    img: {
        type: String,
        required: [true, "Please add image"]
    },
    summery: {
        type: String,
        required: [true, "Please add Summery"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Book", bookSchema);