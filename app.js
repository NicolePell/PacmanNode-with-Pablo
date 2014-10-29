var express = require('express')
var app = express()
var http = require('http').Server(app);

var cell = require('./game/cell.js');
var grid = require('./game/grid.js');
var pacman = require('./game/pacman.js');
var wall = require('./game/wall.js');

app.set('view engine', 'ejs')

var net = require('net');
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	socket.on('chat mesage', function(msg) {
		io.emit('chat message', msg);
	});
});

app.get('/', function(request, response){

	console.log(request.method + ' ' + request.url)
	
	board = new grid.init
	board.factory(cell.init)
	var pac = new pacman.init
	pac.name = 'Pablo'
	board.placing(pac, '4:6')
	var w = new wall.init
	board.placeHorizontalWalls(w)
	board.placeVerticalWalls(w)
	response.render('index', board);
})

app.get('*', function(request, response) {
	console.log(request.method + ' ' + request.url)
	response.send('This page does not exist')
})

app.listen(3000, function() {
	var c = new cell.init
	console.log(c)
	console.log(c.isAvailable)
	c.changeContent("I'm a cell")
	console.log(c.content)
	console.log("-------board")
	var board = new grid.init
	console.log(board.size)
	board.factory(cell.init)
	console.log(board)

	console.log("---------pacman")
	var pac = new pacman.init
	pac.name = "Pablo"
	board.placing(pac, '4:6')
	console.log(board['4:6'].content.name)
	console.log(board['4:6'].content.constructor.name)

	console.log("-----------wall")
	var w = new wall.init
	board.placeHorizontalWalls(w)
	board.placeVerticalWalls(w)
	console.log(board['1:5'].content.name)

	console.log(pac.currentCell)
	pac.move('down')
	console.log(pac.currentCell)

	console.log('listening to port 3000')
})