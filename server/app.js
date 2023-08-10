require('dotenv').config()
var cors = require('cors');
const express = require('express');
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => { console.log(`=== PUSYING PALA BARBIE ${port} KELILING ===`) })
