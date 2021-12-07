import {
  writeAddressProgrammingCommand,
  writeCVBitMainCommand, writeCVBitProgrammingCommand,
  writeCVByteMainCommand,
  writeCVByteProgrammingCommand
} from '../../../app/commands/decoderCommands'

describe('writeCVByteMainCommand()', function () {
  const options = {
    cab: 22,
    cv: 14,
    value: 134
  }
  const sendString = '<w 22 14 134>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = writeCVByteMainCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = writeCVByteMainCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('writeCVBitMainCommand()', function () {
  const options = {
    cab: 22,
    cv: 14,
    bit: 7,
    value: 1
  }
  const sendString = '<b 22 14 7 1>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = writeCVBitMainCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = writeCVBitMainCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('writeAddressProgrammingCommand()', function () {
  const options = {
    address: 1024
  }
  const sendString = '<W 1024>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = writeAddressProgrammingCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = writeAddressProgrammingCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('writeCVByteProgrammingCommand()', function () {
  const options = {
    cv: 14,
    value: 134,
    callbackNum: 1024,
    callbackSub: 3
  }
  const sendString = '<W 14 134 1024 3>'
  const returnString = '<r 1024|3|14 134>'

  test(`sendString is '${sendString}'`, () => {
    const command = writeCVByteProgrammingCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = writeCVByteProgrammingCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('writeCVBitProgrammingCommand()', function () {
  const options = {
    cv: 14,
    bit: 4,
    value: 134,
    callbackNum: 1024,
    callbackSub: 3
  }
  const sendString = '<B 14 4 134 1024 3>'
  const returnString = '<r 1024|3|14 4 134>'

  test(`sendString is '${sendString}'`, () => {
    const command = writeCVBitProgrammingCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = writeCVBitProgrammingCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})
