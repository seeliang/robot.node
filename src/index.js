var init = require('./init.js'),
  command = require('./commands/command.js'),
  slice = require ( 'lodash/slice.js'),
  ciCommand = slice(process.argv,[2],[4]);

init();
command(ciCommand[0],ciCommand[1]);
console.log(global.robot)
