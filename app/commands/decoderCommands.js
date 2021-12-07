import { makeCommandString } from './utils'

/**
 * WRITE CV BYTE TO ENGINE DECODER ON MAIN TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-byte-to-engine-decoder-on-main-track
 * @param {number} cab
 * @param {number} cv
 * @param {number} value
 * @returns {{readonly returnString: null, readonly sendString: string, cv, cab, returnsKey: null, value, key: string}|string|null}
 */
export function writeCVByteMainCommand ({ cab, cv, value }) {
  return {
    key: 'w',
    returnsKey: null,
    cab,
    cv,
    value,
    get sendString () {
      const attributes = [
        this.key,
        this.cab,
        this.cv,
        this.value
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      return null
    }
  }
}

/**
 * WRITE CV BIT TO ENGINE DECODER ON MAIN TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-bit-to-engine-decoder-on-main-track
 * @param {number} cab
 * @param {number} cv
 * @param {number} bit
 * @param {0 | 1} value
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, cv, cab, bit, returnsKey: null, value, key: string}}
 */
export function writeCVBitMainCommand ({ cab, cv, bit, value }) {
  return {
    key: 'b',
    returnsKey: null,
    cab,
    cv,
    bit,
    value,
    get sendString () {
      const attributes = [
        this.key,
        this.cab,
        this.cv,
        this.bit,
        this.value
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      return null
    }
  }
}

/**
 * WRITE LOCO ADDRESS TO ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-loco-address-to-engine-decoder-on-programming-track
 * @param {number} address
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, address, returnsKey: null, key: string}}
 */
export function writeAddressProgrammingCommand ({ address }) {
  return {
    key: 'W',
    returnsKey: null,
    address,
    get sendString () {
      const attributes = [
        this.key,
        this.address
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      return null
    }
  }
}

/**
 * WRITE CV BYTE TO ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-byte-to-engine-decoder-on-programming-track
 * @param {number} cv
 * @param {number} value
 * @param {number} callbackNum
 * @param {number} callbackSub
 * @returns {{readonly returnString: string, callbackNum, readonly sendString: string, cv, callbackSub, returnsKey: string, value, key: string}|string}
 */
export function writeCVByteProgrammingCommand ({ cv, value, callbackNum, callbackSub }) {
  return {
    key: 'W',
    returnsKey: 'r',
    cv,
    value,
    callbackNum,
    callbackSub,
    get sendString () {
      const attributes = [
        this.key,
        this.cv,
        this.value,
        this.callbackNum,
        this.callbackSub
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      const combined = [this.callbackNum, this.callbackSub, this.cv].join('|')
      const attributes = [
        this.returnsKey,
        combined,
        this.value
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    }
  }
}

/**
 * WRITE CV BIT TO ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-bit-to-engine-decoder-on-programming-track
 * @param {number} cv
 * @param {number} bit
 * @param {0 | 1} value
 * @param {number} callbackNum
 * @param {number} callbackSub
 * @returns {{readonly returnString: string, callbackNum, readonly sendString: string, cv, callbackSub, returnsKey: string, value, key: string}|string}
 */
export function writeCVBitProgrammingCommand ({ cv, bit, value, callbackNum, callbackSub }) {
  return {
    key: 'B',
    returnsKey: 'r',
    cv,
    bit,
    value,
    callbackNum,
    callbackSub,
    get sendString () {
      const attributes = [
        this.key,
        this.cv,
        this.bit,
        this.value,
        this.callbackNum,
        this.callbackSub
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    },
    get returnString () {
      const combined = [this.callbackNum, this.callbackSub, this.cv].join('|')
      const attributes = [
        this.returnsKey,
        combined,
        this.bit,
        this.value
      ]
      const str = attributes.join(' ')
      return makeCommandString(str)
    }
  }
}
