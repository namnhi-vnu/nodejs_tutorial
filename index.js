const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

// định nghĩa đường dẫn
app.get('/tin-tuc', (req, res) => {
    res.send('Hello World! Nam Nhi')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})