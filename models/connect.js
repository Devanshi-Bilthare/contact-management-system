const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mern-test')
.then(() => console.log('database connected'))
.catch(err => console.log(err))