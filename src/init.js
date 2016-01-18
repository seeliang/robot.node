module.exports = function (){
  if(!global.robot) {
    global.robot = {
      report: [0,0,'NORTH'],
      placed: false,
      facingList: [ 'EAST', 'SOUTH', 'WEST', 'NORTH'],
      range: [0,0,5,5]
    }
  }
};
