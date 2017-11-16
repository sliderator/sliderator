var content = "Frosty Pookie Eddy Eddie  I said peter piper picker pannnnn dan is da man, da man with da plan d d ddddd Guilty Gear"
var parse = require('./parser.js')(content);
console.log(parse);
console.log(parse[0].join('').length)
