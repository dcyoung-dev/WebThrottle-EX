import {makeCommandString, parseAddress} from "./utils.js";

/**
 * https://dcc-ex.com/reference/software/command-reference.html#controlling-a-defined-turnout
 * @param {number} turnout
 * @param {0 | 1 } thrown 0=Closed 1=Thrown
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
 * @param {number} pin the pin number of the output to be controlled by the turnout object
 * @param {number} thrownPosition the PWM value corresponding to the servo position for THROWN state, normally in the range 102 to 490
 * @param {number} closedPosition the PWM value corresponding to the servo position for CLOSED state, normally in the range 102 to 490
 * @param {0 | 1 | 2 | 3 | 4} profile the profile for the transition between states. 0=Immediate, 1=Fast (0.5 sec), 2=Medium (1 sec), 3=Slow (2 sec), 3=Bounce (for semaphore signals).
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

/**
 *
 * @param {number} turnout
 * @returns {{readonly returnString: string, readonly sendString: string, turnout, returnsKey: string, key: string}|string}
 */
export function deleteTurnoutCommand({turnout}) {
  return {
    key: "T",
    returnsKey: "0",
    turnout,
    get sendString() {
      const attributes = [
        this.key,
        this.turnout,
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
 * @returns {string|{readonly returnString: string, readonly sendString: string, returnsKey: string, key: string}}
 */
export function listTurnoutsCommand() {
  return {
    key: "T",
    returnsKey: "X",
    get sendString() {
      return makeCommandString(this.key)
    },
    get returnString() {
      return makeCommandString(this.returnsKey)
    }
  }
}
