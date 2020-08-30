const express = require('express')
const cors = require('cors')
const root_routes = require('./routes/root-routes')

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(root_routes)

app.listen(8000, () => {
	console.log('mtg_price_api running on http://localhost:8000')
})