const mongoose = require('mongoose')


const fileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: Buffer
    }
},{
    timestamps: true
})

module.exports = mongoose.model("File", fileSchema)