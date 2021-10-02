const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const ejsMate = require('ejs-mate')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', ejsMate)

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(5000, () => {
    console.log('Serving on port 5000')
})