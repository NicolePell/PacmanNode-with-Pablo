var grid = exports = module.exports = {}

grid.init = function() {
	DEFAULT_SIZE = 900
	this.size = DEFAULT_SIZE
	this.factory = grid.factory
	this.placing = grid.placing
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
	object.currentCell = position }
}
