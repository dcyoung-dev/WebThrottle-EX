import {makeCommandString} from "./makeCommandString.js";

/**
 * https://dcc-ex.com/reference/software/command-reference.html#engine-decoder-cab-operation-commands
 * @param {number} cab
 * @param {number} speed
 * @param {0 | 1 | -1} direction
 * @returns {string|{returnString(): string, sendString(): string, legacy: number, cab, returnsKey: string, key: string, speed, direction}}
 */
export function throttleCommand({cab = 0, speed = 0, direction = 1}) {
    return {
        key: "t",
        returnsKey: "T",
        legacy: 1,
        cab,
        speed,
        direction,
        get sendString() {
            const attributes = [
                this.key,
                this.legacy.toString(),
                this.cab.toString(),
                this.speed.toString(),
                this.direction.toString()
            ]
            const str = attributes.join(" ")
            return makeCommandString(str)
        },
        get returnString() {
            const attributes = [
                this.returnsKey,
                this.legacy.toString(),
                this.cab.toString(),
                this.speed.toString(),
                this.direction.toString()
            ]
            const str = attributes.join(" ")
            return makeCommandString(str)
        }
    }
}
