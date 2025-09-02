require('dotenv').config()
const { getter } = require('./utils.js')

const express = require('express')
const cors = require('cors')
//const knex = require('knex')( require('./knexfile')[process.env.NODE_ENV])
const app = express()
const port = process.env.EXPRESS_PORT

app.use(cors())
app.use(express.json())

app.listen(port, () => `Express has started on ${port}`)

app.get('/', (req,res) => {
  res.status(200).send('express up')
})

app.get('/units', async (req, res) => {
  try {
    let units = await getter('units')
    res.send(units)
  } catch (error) {
    console.error('Error fetching units:', error)
    res.status(500).send('Error fetching units')
  }
})