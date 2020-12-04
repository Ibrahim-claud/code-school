/*
const Logger = {
  log(name) {
    console.log(`your name is ${name}`);
  },
};
module.exports = Logger;
*/

//-----------EVENTS--------------//

const EventEmitter = require("events");

class MyEvent extends EventEmitter {
  log() {
    console.log("hi there");

    this.emit("messageLogger", { id: 9000000, name: "klin" });
  }
}

module.exports = MyEvent;
