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
	response.render('index');
})

app.get('*', function(request, response) {
	console.log(request.method + ' ' + request.url)
	response.send('This page does not exist')
})

app.listen(3000, function() {
	// newCell = new cell.init
	newGrid = new grid.init
	// console.log(newCell.isAvailable)
	console.log(newGrid.size)
	console.log(newGrid.factory(cell.init))
	console.log('listening to port 3000')
})