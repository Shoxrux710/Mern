const mongoose = require('mongoose')

module.exports = () => {
     
     mongoose.connect('mongodb+srv://center:710sh6465@cluster0.kzulh.mongodb.net/test',
     {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

     const db = mongoose.connection     
     db.on('open', () => console.log('mongodbga online ulandik'))
     db.on('error', (err) => console.log('qayerdadir xatolik bor', err))
}