const express = require('express')
const app = express()
const port = 3000
const connection = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (request, response) => {
	response.send('Welcome to WildBookus server')
})

app.get('/wilders', (request, response) => {
	connection.query('SELECT * FROM wilder', (err, results) => {
		if (err) {
			console.log(err)
			response.status(500).send('Erreur retrieving wilders')
		} else {
			response.json(results)
		}
	})
})

app.get('/projects', (request, response) => {
	connection.query('SELECT * FROM project', (err, results) => {
		if (err) {
			console.log(err)
			response.status(500).send('Erreur retrieving projects')
		} else {
			response.json(results)
		}
	})
})

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened ...')
	}
	console.log(`Server is listening on ${port}`)
})
