const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res, next)=>{
  res.json({message : 'this is the API!'})
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error : err})
})

app.use((req, res, next) => {
  res.status(404).json({error: { message : '404! Page not found!'}})
})

app.listen(port, () => { console.log(`listening on port ${port}`)})
