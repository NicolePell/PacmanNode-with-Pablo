var cell = exports = module.exports = {}

cell.init = function() {
	this.content
	this.isAvailable = true
	this.changeContent = cell.changeContent

}

cell.changeContent = function(obj) {
	if (this.isAvailable) {
		this.content = obj
		this.isAvailable = false}
}


