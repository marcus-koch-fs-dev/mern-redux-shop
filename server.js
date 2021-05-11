require('dotenv').config({ path: './config/.env' })
const path = require('path')
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

// Routes
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes')
const privateRoutes = require('./routes/privateRoutes')

connectDB()
const app = express()

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/private', privateRoutes)
app.use('/api/products', productRoutes)
// on last position
app.use(errorHandler)

// Run local or on Server
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('Api running')
  })
}

const PORT = process.env.PORT ?? 5000

const server = app.listen(PORT, () =>
  console.log(`Server is listening on PORT: ${PORT}`)
)

// Avoid ugly errors
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => {
    process.exit(1)
  })
})
