const http = require('http');
const express = require('express');
const { application } = require('express');
const port = process.env.PORT || 8000;
const path = require('path');
const app = express()

// app.use(express.static(path.join(__dirname, '../front')));

app.get('/', function(req, res){
	res.set('Content-Type', 'text/html');
	res.send('Hello World!');
}) 

app.listen(port, () => {
console.log("server listening on port : " + port + " http://localhost:8000");
});



