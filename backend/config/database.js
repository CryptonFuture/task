const mongoose = require('mongoose')

const connectDb = () => {
    mongoose.connect('mongodb+srv://admin:QV4PsdaKGE1Bj1Oe@cluster0.a3sd5kk.mongodb.net/' ,  {

    }).then((data) => {
        console.log(`mongodb connected...${data.connection.host}`);
    })
}

module.exports = connectDb