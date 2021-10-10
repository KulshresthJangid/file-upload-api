require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("DB server is connected")
}).catch((e) => [
    console.log("Unable to connect to server", e)
])