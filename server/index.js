const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`mongodb+srv://marwenkhorchani:marwen@cluster0.scqq4.mongodb.net/test:${port}`)
})