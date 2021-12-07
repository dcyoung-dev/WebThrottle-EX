import {makeCommandString} from "./utils.js";

/**
 * https://dcc-ex.com/reference/software/command-reference.html#sensors-inputs
 * @param {number} sensor
 * @param {number} pin
 * @param {0 | 1} pullUp 1 = Use internal pull-up resistor for PIN (ACTIVE=LOW), 0 = don’t use internal pull-up resistor for PIN (ACTIVE=HIGH)
 * @returns {string|{readonly returnString: string, readonly sendString: string, pullUp, pin, sensor, returnsKey: string, key: string}}
 */
export function defineSensorCommand({sensor, pin, pullUp}) {
    return {
          key: "S",
          returnsKey: "0",
          sensor,
        pin,
        pullUp,
          get sendString() {
              const attributes = [
                  this.key,
                  this.sensor,
                  this.pin,
                  this.pullUp,
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
 * @param {number} sensor
 * @returns {{readonly returnString: string, readonly sendString: string, turnout, returnsKey: string, key: string}|string}
 */
export function deleteSensorCommand({sensor}) {
  return {
    key: "S",
    returnsKey: "0",
    sensor,
    get sendString() {
      const attributes = [
        this.key,
        this.sensor,
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
export function listSensorsCommand() {
  return {
    key: "S",
    returnsKey: "X",
    get sendString() {
      return makeCommandString(this.key)
    },
    get returnString() {
      return makeCommandString(this.returnsKey)
    }
  }
}
