const express = require('express')
const app = express()
const port = 3000

//GET Requests
app.get('/', (req, res) => {
    res.send('Node App at Last!')
})

app.listen(port, () => {
    console.log(`Example app on listening on port ${port}`)
})