const express = require('express')
const cors = require('cors')

const pool = require('./db')

// express backend app
const app = express()

// allows front end and backend to speak to each other while being on different ports
app.use(cors())

app.get('/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products')
        // return respomse object as a JSON so it can be returned in browser console
        res.json(result.rows)
    }
    catch (error) {
        console.log(error)
        // internal server error - return error text
        res.status(500).json({error: 'Database Error'})
    }
})

// Start server on port 3000
app.listen(3000)