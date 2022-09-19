// Basic configuration ng connection sa database gamit ang mongoose
//Initialiaze ang mongoose
const mongoose = require('mongoose')

// Use dotenv para maka-connect sa env files
require('dotenv').config({ path: './config.env' })

const MONGODB_URI = process.env.MONGODB_URI

const configDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = configDatabase
