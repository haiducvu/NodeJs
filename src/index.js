const express = require('express')
const morgan = require('morgan')
const path = require('path')
const hbs  = require('express-handlebars');
const app = express()
const port = 3000
// const __dirname = path.resolve(path.dirname(''));

// HTTP Logger
app.use(morgan('combined'));

// template engine 
app.engine('handlebars', hbs.engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname, 'resource/views'))

console.log('PATH', path.join(__dirname, 'resource/views'))

// route
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})