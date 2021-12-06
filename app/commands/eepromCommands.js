import {makeCommandString} from "./utils.js";

/**
 * Stores unsaved changes in EEPROM
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 * @return {string|{readonly returnString: string, readonly sendString: string, returnsKey: string, key: string}}
 */
export function storeCommand() {
    return {
        key: "E",
        returnsKey: "0",
        get sendString() {
            return makeCommandString(this.key)
        },
        get returnString() {
            return makeCommandString(this.returnsKey)
        }
    }
}

/**
 * ERASE everything; (turnouts, sensors, and outputs)
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 * @return {string|{readonly returnString: string, readonly sendString: string, returnsKey: string, key: string}}
 */
export function eraseCommand() {
    return {
        key: "e",
        returnsKey: "0",
        get sendString() {
            return makeCommandString(this.key)
        },
        get returnString() {
            return makeCommandString(this.returnsKey)
        }
    }
}
