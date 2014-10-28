.load grid.js
.load cell.js
.load pacman.js

grid = new Grid
grid.factory(Cell)
nicolle = new Pacman
grid.placing(nicolle, '4:6')