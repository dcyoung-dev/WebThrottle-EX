/**
 * https://dcc-ex.com/reference/software/command-reference.html#track-power-commands
 * @param {0 | 1} power
 * @param {"MAIN" | "PROG" | "JOIN"} track
 * @return {string|{returnString: string, sendString: string, track, returnsKey: string, key}}
 */
import {makeCommandString} from "./utils.js";

export function powerCommand({power, track}) {
  return {
    key: power,
    track: track,
    returnsKey: "p",
    get sendString() {
      const str = [this.key.toString(), this.track].filter(char => !!char).join(" ")
      return makeCommandString(str)
    },
    get returnString() {
      const returns = [`${this.returnsKey}${this.key}`, this.track].filter(char => !!char).join(" ")
      return makeCommandString(returns)
    }
  }
}
