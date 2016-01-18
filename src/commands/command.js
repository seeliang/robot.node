var place = require('./place.js'),
  moveRobot = require('./move.js');
module.exports = function (command, location){
  var feedback = 'Place use PLACE, MOVE, LEFT, RIGHT or REPROT',
    locationArray;

  if(!global.robot.placed) {
    feedback = 'Pleace place robot with PLACE command';
  }

  if(command === 'PLACE') {
    locationArray = location.split(',');
    place(locationArray);
    return
  }

  if(command === 'move') {
    moveRobot();
    return
  }


  if(command === 'REPORT') {
    console.log (global.robot.report.toString());
    return
  }

  console.log(feedback);
};
