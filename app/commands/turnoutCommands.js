import {makeCommandString} from "./makeCommandString.js";

/**
 * https://dcc-ex.com/reference/software/command-reference.html#engine-decoder-cab-operation-commands
 * @param {number} turnout
 * @param {0 | 1 } thrown
 * @return {{readonly returnString: string, readonly sendString: string, turnout, thrown, returnsKey: string, key: string}|string}
 */
export function turnoutCommand({turnout, thrown}) {
    return {
        key: "T",
        returnsKey: "H",
        turnout,
        thrown,
        get sendString() {
            const attributes = [
                this.key,
                this.turnout.toString(),
                this.thrown.toString(),
            ]
            const str = attributes.join(" ")
            return makeCommandString(str)
        },
        get returnString() {
            const attributes = [
                this.returnsKey,
                this.turnout.toString(),
                this.thrown.toString(),
            ]
            const str = attributes.join(" ")
            return makeCommandString(str)
        }
    }
}
