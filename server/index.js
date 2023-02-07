const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const config = require("./config");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

 
app.listen(config.PORT, () => {
    console.log(`Application listening on:http://localhost:${config.PORT}`);
  });