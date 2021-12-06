import {makeCommandString} from "./makeCommandString.js";

/**
 * https://dcc-ex.com/reference/software/command-reference.html#accessory-decoder-commands
 * @param { number | {primaryAddress: number, subAddress: number}} address
 * @param {0 | 1} active
 * @returns {{returnString: null, sendString: string, address, active, returnsKey: null, key: string}}
 */
export function accessoryCommand({address, active}) {
    let linearAddress, primaryAddress, subAddress;

    if (typeof(address) === "number") {
        linearAddress = address
    } else {
        primaryAddress = address.primaryAddress
        subAddress = address.subAddress
    }

    return {
        key: "a",
        returnsKey: null,
        address,
        active,
        get sendString() {
            const addressSend = linearAddress || `${primaryAddress} ${subAddress}`
            const attributes = [
                this.key,
                addressSend,
                this.active.toString()
            ]
            const str = attributes.join(" ")
            return makeCommandString(str)
        },
        get returnString() {
            return null
        }
    }
}
