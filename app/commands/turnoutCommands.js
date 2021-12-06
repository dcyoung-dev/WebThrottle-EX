import {makeCommandString, parseAddress} from "./utils.js";

/**
 * https://dcc-ex.com/reference/software/command-reference.html#controlling-a-defined-turnout
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

/**
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 * @param {number} turnout
 * @param { number | {primaryAddress: number, subAddress: number}} address
 * @return {{readonly returnString: string, readonly sendString: string, turnout, thrown, returnsKey: string, key: string}|string}
 */
export function defineDCCTurnoutCommand({turnout, address}) {
    const constant = "DCC";
    const {linearAddress, primaryAddress, subAddress} = parseAddress(address);

    return {
          key: "T",
          returnsKey: "0",
          turnout,
          constant,
          address,
          get sendString() {
              const addressSend = linearAddress || `${primaryAddress} ${subAddress}`
              const attributes = [
                  this.key,
                  this.turnout,
                  this.constant,
                  addressSend
              ]
              const str = attributes.join(" ")
              return makeCommandString(str)
          },
          get returnString() {
              return makeCommandString(this.returnsKey)
          }
      }
}

/**
 *
 * @param {number} turnout
 * @param {number} pin
 * @param {number} thrownPosition
 * @param {number} closedPosition
 * @param {0 | 1 | 2 | 3 | 4} profile
 * @returns {{readonly returnString: string, readonly sendString: string, constant: string, pin, turnout, closedPosition, thrownPosition, profile, returnsKey: string, key: string}|string}
 */
export function defineServoTurnoutCommand({turnout, pin, thrownPosition, closedPosition, profile}){
  const constant = "SERVO"
  return {
    key: "T",
    returnsKey: "0",
    turnout,
    constant,
    pin, thrownPosition,closedPosition, profile,
    get sendString() {
      const attributes = [
        this.key,
        this.turnout,
        this.constant,
        this.pin,
        this.thrownPosition,
        this.closedPosition,
        this.profile
      ]
      const str = attributes.join(" ")
      return makeCommandString(str)
    },
    get returnString() {
      return makeCommandString(this.returnsKey)
    }
  }
}

/**
 *
 * @param {number} turnout
 * @param {number} pin
 * @returns {{readonly returnString: string, readonly sendString: string, constant: string, pin, turnout, returnsKey: string, key: string}|string}
 */
export function defineVPINTurnoutCommand({turnout, pin}){
  const constant = "VPIN"
  return {
    key: "T",
    returnsKey: "0",
    turnout,
    constant,
    pin,
    get sendString() {
      const attributes = [
        this.key,
        this.turnout,
        this.constant,
        this.pin,
      ]
      const str = attributes.join(" ")
      return makeCommandString(str)
    },
    get returnString() {
      return makeCommandString(this.returnsKey)
    }
  }
}
