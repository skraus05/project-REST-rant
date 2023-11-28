const mongoose = require('mongoose')
const { modelName } = require('./places')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports.Place = require('./places')