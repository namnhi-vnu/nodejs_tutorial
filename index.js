const express = require('express')
const app = express()
const port = 3000
// định nghĩa đường dẫn
app.get('/tin-tuc', (req, res) => {
    res.send('Hello World! Nam Nhi')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})