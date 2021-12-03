import {makeCommandString} from "./makeCommandString";

/**
 *
 * @param {0 | 1} power
 * @param {"MAIN" | "PROG" | "JOIN"} track
 * @return {string|{returnString(): string, sendString(): string, track, returnsKey: string, key}}
 */
export function powerCommand({power, track}) {
  return {
    key: power,
    track: track,
    returnsKey: "p",
    sendString() {
      const str = [this.key.toString(), this.track].filter(char => !!char).join(" ")
      return makeCommandString(str)
    },
    returnString() {
      const returns = [`${this.returnsKey}${this.key}`, this.track].filter(char => !!char).join(" ")
      return makeCommandString(returns)
    }
  }
}
