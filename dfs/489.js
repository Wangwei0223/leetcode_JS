/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * 489. Robot Room Cleaner
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    let visit = new Set();
    let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    dfs(robot, visit, 0, 0, 0, dirs);
};

var dfs = function(robot, visit, r, c, dir, dirs){
    robot.clean();
    visit.add([r, c].toString());
    for(let i = 0; i < 4; i++){
        let cur = (i + dir) % 4, nr = r + dirs[cur][0], nc = c + dirs[cur][1];
        if(!visit.has([nr, nc].toString()) && robot.move()){
            dfs(robot, visit, nr, nc, cur, dirs);
            robot.turnRight();
            robot.turnRight();
            robot.move();
            robot.turnLeft();
            robot.turnLeft();
        }
        robot.turnRight();
    }
    
}