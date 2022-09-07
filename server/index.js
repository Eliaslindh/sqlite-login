const { response } = require('express')
const express = require('express')
const { send } = require('process')
const { db } = require('./db.js')

const app = express()
app.use(express.static(__dirname + '/../public'))
app.use(express.urlencoded({ extended: true }))

app.post('/signup', async (request, respone) => {

    const rows = await db('users').insert(
        {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        })
    respone.send('saved')
})

app.post('/login', async (request, response) => {
    let data = await db('users').where({
        email: request.body.email,
        password: request.body.password
    })
    console.log(data)
    if (data.length !== 0) {
        response.sendFile('C:/Users/ellil/OneDrive/Dokument/år2/log in server/public/home.html');

    }

    else {
        response.send('wrong password')
    }
})

app.listen(3000, () => {
    console.log("server startedededede")
})

