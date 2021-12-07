import { makeCommandString } from './utils.js'

/**
 * Shows cab numbers and speed in reminder table.
 * https://dcc-ex.com/reference/software/command-reference.html#diagnostics
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, constant: string, returnsKey: null, key: string}}
 */
export function diagnosticCabsCommand () {
  const constant = 'CABS'
  return {
    key: 'D',
    returnsKey: null,
    constant,
    get sendString () {
      const attributes = [
        this.key,
        this.constant
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      // FIXME: Return string needed
      return null
    }
  }
}

/**
 * Shows remaining RAM
 * https://dcc-ex.com/reference/software/command-reference.html#diagnostics
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, constant: string, returnsKey: null, key: string}}
 */
export function diagnosticRAMCommand () {
  const constant = 'RAM'
  return {
    key: 'D',
    returnsKey: null,
    constant,
    get sendString () {
      const attributes = [
        this.key,
        this.constant
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      // FIXME: Return string needed
      return null
    }
  }
}

/**
 * Enables/Disables ACK diagnostics
 * @param {0 | 1} enable 0=OFF 1=ON
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, constant: string, enable, returnsKey: null, key: string}}
 */
export function diagnosticAckCommand ({ enable }) {
  const constant = 'ACK'
  return {
    key: 'D',
    returnsKey: null,
    constant,
    enable,
    get sendString () {
      const attributes = [
        this.key,
        this.constant,
        this.enable
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      // FIXME: Return string needed
      return null
    }
  }
}

/**
 * Enables/Disables Command Parser diagnostics
 * @param {0 | 1} enable 0=OFF 1=ON
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, constant: string, enable, returnsKey: null, key: string}}
 */
export function diagnosticParserCommand ({ enable }) {
  const constant = 'CMD'
  return {
    key: 'D',
    returnsKey: null,
    constant,
    enable,
    get sendString () {
      const attributes = [
        this.key,
        this.constant,
        this.enable
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      // FIXME: Return string needed
      return null
    }
  }
}

/**
 * Enables/Disables Wifi diagnostics
 * @param {0 | 1} enable 0=OFF 1=ON
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, constant: string, enable, returnsKey: null, key: string}}
 */
export function diagnosticWiFiCommand ({ enable }) {
  const constant = 'WIFI'
  return {
    key: 'D',
    returnsKey: null,
    constant,
    enable,
    get sendString () {
      const attributes = [
        this.key,
        this.constant,
        this.enable
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      // FIXME: Return string needed
      return null
    }
  }
}

/**
 * Enables/Disables Withrottle diagnostics
 * @param {0 | 1} enable 0=OFF 1=ON
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, constant: string, enable, returnsKey: null, key: string}}
 */
export function diagnosticWithrottleCommand ({ enable }) {
  const constant = 'WIT'
  return {
    key: 'D',
    returnsKey: null,
    constant,
    enable,
    get sendString () {
      const attributes = [
        this.key,
        this.constant,
        this.enable
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      // FIXME: Return string needed
      return null
    }
  }
}
