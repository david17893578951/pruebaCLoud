var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Universidad Tecnica Del Norte')
  response.send('Fecha: 13/11/2017')
  response.send('Integrantes: Tayan David, Flores David.')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
