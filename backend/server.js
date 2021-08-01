const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

const productRouter = require('./routes/Product')
const cartRouter = require('./routes/Cart')
const userRouter = require('./routes/Users')



// mongodb
const db = require('./config/db')
db()


app.use('/app', productRouter)
app.use('/cartapp', cartRouter)
app.use('/user', userRouter)


// listen
const PORT = 4000

app.listen(PORT, () => console.log(`server ${PORT} da ishladi`))