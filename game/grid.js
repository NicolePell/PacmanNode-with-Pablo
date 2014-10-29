var grid = exports = module.exports = {}

grid.init = function() {
	DEFAULT_SIZE = 900
	this.size = DEFAULT_SIZE
	this.factory = grid.factory
	this.placing = grid.placing
	this.placeHorizontalWalls = grid.placeHorizontalWalls
	this.placeVerticalWalls = grid.placeVerticalWalls
}

grid.factory = function(object) {
	for(var i = 1; i < 31; i++) {
		for(var j = 1; j < 31; j++) {
			console.log(i + ':' + j)
			this[i + ':' + j] = new object
		}
	}
}

grid.placing = function(object,position) {
	if (this[position].isAvailable) {
	this[position].changeContent(object)
	object.currentCell = position
	this[position].name = object.name }
}


grid.placeHorizontalWalls = function(object) {
	for(var j = 1; j < 31; j++) {
		this.placing(object, [1 + ':' + j])
		this.placing(object, [30 + ':' + j])
	}
}

grid.placeVerticalWalls = function(object) {
for(var j = 2; j < 30; j++) {
	this.placing(object, [j + ':' + 1])
	this.placing(object, [j + ':' + 30])
	}
}