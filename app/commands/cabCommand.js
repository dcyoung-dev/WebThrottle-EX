import { makeCommandString } from './utils.js'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#cab-functions
 * @param {number} cab
 * @param {number} func
 * @param {0 | 1} value
 * @returns {string|{readonly returnString: null, readonly sendString: string, func, cab, returnsKey: null, value, key: string}|null}
 */
export function cabCommand ({ cab, func, value }) {
  return {
    key: 'F',
    returnsKey: null,
    cab,
    func,
    value,
    get sendString () {
      const attributes = [
        this.key,
        this.cab.toString(),
        this.func.toString(),
        this.value.toString()
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      return null
    }
  }
}
