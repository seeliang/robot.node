module.exports = function(command){
  var current = global.robot.report[2],
    newDirectionIndex = global.robot.directions.indexOf(global.robot.report[2]);

  if(command === 'LEFT') {
    newDirectionIndex-- ;
  } else {
    newDirectionIndex++ ;
  }
  newDirectionIndex = (newDirectionIndex === 4) ? 0 : newDirectionIndex;
  newDirectionIndex = (newDirectionIndex === -1) ? 3 : newDirectionIndex;

  global.robot.report[2] = global.robot.facing.index[newDirectionIndex];
};
