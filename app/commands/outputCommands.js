import { makeCommandString } from './utils.js'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#outputs-dio-pins
 * @param {number} output
 * @param {0 | 1} state
 * @returns {string|{output, readonly returnString: string, readonly sendString: string, state, returnsKey: string, key: string}}
 */
export function outputCommand ({ output, state }) {
  return {
    key: 'Z',
    returnsKey: 'Y',
    output,
    state,
    get sendString () {
      const attributes = [
        this.key,
        this.output,
        this.state
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      const attributes = [
        this.returnsKey,
        this.output,
        this.state
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    }
  }
}

/**
 *
 * @param {number} output
 * @param {number} pin
 * @param {string} iFlag #FIXME: Not sure what this should look like
 * @returns {string|{readonly returnString: string, readonly sendString: string, pin, iFlag, returnsKey: string, key: string}}
 */
export function defineOutputCommand ({ output, pin, iFlag }) {
  return {
    key: 'Z',
    returnsKey: '0',
    output,
    pin,
    iFlag,
    get sendString () {
      const attributes = [
        this.key,
        this.output,
        this.pin,
        this.iFlag
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      return makeCommandString(this.returnsKey)
    }
  }
}

/**
 *
 * @param {number} output
 * @returns {{readonly returnString: string, readonly sendString: string, turnout, returnsKey: string, key: string}|string}
 */
export function deleteOutputCommand ({ output }) {
  return {
    key: 'Z',
    returnsKey: '0',
    output,
    get sendString () {
      const attributes = [
        this.key,
        this.output
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      return makeCommandString(this.returnsKey)
    }
  }
}

/**
 *
 * @returns {string|{readonly returnString: string, readonly sendString: string, returnsKey: string, key: string}}
 */
export function listOutputsCommand () {
  return {
    key: 'Z',
    returnsKey: 'X',
    get sendString () {
      return makeCommandString(this.key)
    },
    get returnString () {
      return makeCommandString(this.returnsKey)
    }
  }
}
