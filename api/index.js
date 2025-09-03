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

app.get('/vehicles', async (req, res) => {
  try {
    let vehicles = await getter('vehicles')
    res.send(vehicles)
  } catch (error) {
    console.error('Error fetching vehicles:', error)
    res.status(500).send('Error fetching vehicles')
  }
})

app.patch('/users', async (req, res) => {
  try {
    let username = req.body.username
    let password = req.body.password
    let users = await getter('users')

    let foundUser = users.find(user => user.username === username)

    if (!foundUser) {
      return res.status(401).send(`User at username ${username} is not found. Register a new user or try again`)
    }
    if (foundUser.password === password) {
      return res.status(200).send({uic: foundUser.uic})
    } else {
      return res.status(401).send(`Password for ${username} is incorrect`)
    }
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).send('Error fetching users')
  }
})