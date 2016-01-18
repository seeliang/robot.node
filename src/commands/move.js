module.exports = function(){
  function _normalizer (number,min,max) {
    number = (number > max) ? max : number;
    number = (number < min) ? min : number;
    return number;
  }
  if(global.robot.report[2] === 'EAST') {
    global.robot.report[0]++;
  }
  if(global.robot.report[2] === 'WEST') {
    global.robot.report[0]--;
  }
  if(global.robot.report[2] === 'NORTH') {
    global.robot.report[1]++;
  }
  if(global.robot.report[2] === 'SOUTH') {
    global.robot.report[1]--;
  }
  global.robot.report[0] = _normalizer(global.robot.report[0], global.robot.range[0], global.robot.range[2] );

  global.robot.report[1] = _normalizer(global.robot.report[1], global.robot.range[1], global.robot.range[3]);
};
