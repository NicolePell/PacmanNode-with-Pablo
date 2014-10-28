var express = require('express')
var app = express()
// var http = require('http').createServer(server);
var cell = require('./game/cell.js');
var grid = require('./game/grid.js');
var pacman = require('./game/pacman.js');
// app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(request, response){
	console.log(request.method + ' ' + request.url)
	
	board = new grid.init
	board.factory(cell.init)
	var pac = new pacman.init
	pac.name = 'Pablo'
	board.placing(pac, '4:6')

	response.render('index', board);
})

app.get('*', function(request, response) {
	console.log(request.method + ' ' + request.url)
	response.send('This page does not exist')
})

app.listen(3000, function() {
	console.log('listening to port 3000')
})