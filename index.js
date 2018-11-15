import path from 'path'
import express from 'express'
const app = express()
app.use('/', express.static(__dirname));
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname + '/index.html')))

app.listen(3000, () => console.log(`Running on port ${3000}`))