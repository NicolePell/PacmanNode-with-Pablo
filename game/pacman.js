var pacman = exports = module.exports = {}

pacman.init = function() {
	this.currentCell
	this.move = pacman.move
	
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
// row:column
// 4:6
// arrow down --> 5:6
// arrow up -->  3:6
// arrow right --> 4:7
// arrow left --> 4:5