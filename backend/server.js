const app = require('./app')
const dotenv= require('dotenv')
const connectDb = require('./config/database')

connectDb()

dotenv.config({path: '.env'})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is working on ${port}`);
})




[1,2,9,5,4,0]

min 



