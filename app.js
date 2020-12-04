//---------MAIN------//

/*
const myLog = require("./logger");
myLog.log("klin");
*/

//-------PATH MODULE----------//
/*
const path = require("path");
console.log(path.parse(__filename));
*/

//------------OS MODULE---------//
/*
const os = require("os");
const totalMemery = os.totalmem();
const freeMemery = os.freemem();
console.log(totalMemery);
console.log(freeMemery);
*/

//----------FILE SYSTEM--------//
/*
const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) console.log(`your err is ${err}`);
  else console.log(`your files directory is ${files}`);
});
*/

//-----CREATE FILE--------------//
/*
fs.mkdir("./sub/sub1", (err) => {
  if (err) console.log(err);
  else console.log("directory created");
});
*/

const EventsClass = require("./logger");
const MyClass = new EventsClass();

//Register an Event
MyClass.on("messageLogger", (arg) => {
  console.log(`Data is ${arg}`);
});

MyClass.log();

const path = require("path");
const parser = path.parse(__filename);

console.log(parser);
console.log('hello');