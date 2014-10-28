var pacman = exports = module.exports = {}

pacman.init = function() {
	this.currentCell
	this.move = pacman.move
	this.name = 'pacman'
	
}

pacman.move = function(keyDirection) {
	if(keyDirection == "down")
	{
		this.currentCell = parseInt(this.currentCell[0]) + 1 + this.currentCell[1] + this.currentCell[2]
	}

	if(keyDirection == "up")
	{
		this.currentCell = parseInt(this.currentCell[0]) - 1 + this.currentCell[1] + this.currentCell[2]
	}
	if(keyDirection == "left")
	{
		this.currentCell = this.currentCell[0] + this.currentCell[1] + (parseInt(this.currentCell[2]) - 1)
	}
	if(keyDirection == "right")
	{
		this.currentCell = this.currentCell[0] + this.currentCell[1] + (parseInt(this.currentCell[2]) + 1)
	}
}
