import express from 'express'

const app = express()

const staticFolders = [
  'public',
]

// Setting static routes
staticFolders.forEach((folder) => {
  app.use(`/${folder}`, express.static(`./${folder}`))
})

// Setting views engine/folder
app.set('view engine', 'pug')
app.set('views', './views')

/* Routes */
/* main route */
app.get('/', (req, res) => {
  res.render('index')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}...`)
})
