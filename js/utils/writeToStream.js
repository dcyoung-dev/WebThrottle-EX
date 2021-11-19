import {displayLog} from "./displayLog.js";

export function writeToStream(...lines) {
  // Stops data being written to nonexistent port if using emulator
  if (port) {
    const writer = outputStream.getWriter();
    lines.forEach((line) => {
      writer.write('<' + line + '>' + '\n');
      console.log('<' + line + '>' + '\n')
      if (line == "\x03" || line == "echo(false);") {

      } else {
        displayLog('[SEND]' + line.toString());
      }
    });
    writer.releaseLock();
  } else {
    lines.forEach((line) => {
      displayLog('[SEND] ' + line.toString());
      message = emulator('<' + line + '>')
      console.log('<' + line + '>' + '\n')
      displayLog('[RECEIVE] ' + message);
    });
  }

}
