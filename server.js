const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Importing routes
require('./app/routes/metric.route.js')(app)

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
})