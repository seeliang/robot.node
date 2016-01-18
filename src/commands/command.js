var place = require('./place.js'),
  moveRobot = require('./move.js');
  turn = require('./turn.js');
module.exports = function (command, location){
  var feedback = 'Place use PLACE, MOVE, LEFT, RIGHT or REPROT',
    locationArray;
    // note: need input range checker
  if(!global.robot.placed) {
    feedback = 'Pleace place robot with PLACE command';
  }

  if(command === 'PLACE') {
    locationArray = location.split(',');
    place(locationArray);
    return
  }

  if(command === 'MOVE') {
    moveRobot();
    return
  }

  if(command === 'LEFT'  || command === 'RIGHT') {
    turn(command);
    return
  }

  if(command === 'REPORT') {
    console.log (global.robot.report.toString());
    return
  }

  console.log(feedback);
};
