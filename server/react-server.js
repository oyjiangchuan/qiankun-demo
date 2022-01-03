const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 8002

// 设置跨域
app.use(cors())
app.use(express.static('../static/react-dist'))

app.get('*', (req, res) => {
  fs.readFile('../static/react-dist/index.html', 'utf-8', (err, html) => {
    res.send(html)
  })
})

app.listen(port, () => {
  console.log(`react app listening at http://localhost:${port}`)
})
