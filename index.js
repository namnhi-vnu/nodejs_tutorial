const express = require('express')
const app = express()
const port = 3000
// định nghĩa đường dẫn
app.get('/tin-tuc', (req, res) => {
    var a = 20;
    var b = 15;
    var c = a + b;
    res.send('Hello World! Nam Nhi')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})