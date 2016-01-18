module.exports = function (){
  if(!global.robot) {
    global.robot = {
      report: [1,1,'NORTH'], // [0] towards EAST [1] towards NORTH
      placed: true,
      directions: [ 'EAST', 'SOUTH', 'WEST', 'NORTH'],
      range: [0,0,4,4]
    }
  }
};
