const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const server = app.listen(port, () => console.log(`app listening on port ${port}!`))

function exit() {
  server.close(() => process.exit(0))
}

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use('/assets', express.static(path.join(__dirname, 'public')))
app.use('/build', express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => res.render('index', { title: 'Home' }))





