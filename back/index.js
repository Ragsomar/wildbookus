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
	connection.query(
		'SELECT * FROM wilder INNER JOIN wilder_has_project ON wilder.id = wilder_has_project.wilder_id',
		(err, results) => {
			if (err) {
				console.log(err)
				response.status(500).send('Erreur retrieving wilders')
			} else {
				results = results.reduce((acc, result) => {
					const match = acc.findIndex(value => value.id === result.id)
					if (match >= 0) {
						acc[match].projects.push(result.project_id)
					} else {
						result.projects = [result.project_id]
						result.wilder_id = undefined
						result.project_id = undefined
						acc.push(result)
					}
					return acc
				}, [])
				response.json(results)
			}
		}
	)
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
