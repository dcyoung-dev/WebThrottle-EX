import {makeCommandString} from "./makeCommandString.js";

/**
 * https://dcc-ex.com/reference/software/command-reference.html#cab-functions
 * @param {number} cab
 * @param {number} func
 * @param {0 | 1} value
 * @returns {string|{returnString(): string, sendString(): string, func, cab, returnsKey: string, value, key: string}}
 */
export function cabCommand({cab, func, value}) {
    return {
        key: "F",
        returnsKey: "NONE",
        cab,
        func,
        value,
        sendString() {
            const attributes = [
                this.key,
                this.cab.toString(),
                this.func.toString(),
                this.value.toString()
            ]
            const str = attributes.join(" ")
            return makeCommandString(str)
        },
        returnString() {
            return this.returnsKey;
        }
    }
}
