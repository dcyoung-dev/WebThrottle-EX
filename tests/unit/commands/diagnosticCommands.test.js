import {
  diagnosticAckCommand,
  diagnosticCabsCommand, diagnosticParserCommand,
  diagnosticRAMCommand, diagnosticWiFiCommand, diagnosticWithrottleCommand
} from '../../../app/commands/diagnosticCommands.js'

describe('diagnosticCabsCommand()', function () {
  const sendString = '<D CABS>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = diagnosticCabsCommand()
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = diagnosticCabsCommand()
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('diagnosticRAMCommand()', function () {
  const sendString = '<D RAM>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = diagnosticRAMCommand()
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = diagnosticRAMCommand()
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('diagnosticAckCommand()', function () {
  const options = {
    enable: 1
  }

  const sendString = '<D ACK 1>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = diagnosticAckCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = diagnosticAckCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('diagnosticParserCommand()', function () {
  const options = {
    enable: 1
  }

  const sendString = '<D CMD 1>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = diagnosticParserCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = diagnosticParserCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('diagnosticWiFiCommand()', function () {
  const options = {
    enable: 1
  }

  const sendString = '<D WIFI 1>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = diagnosticWiFiCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = diagnosticWiFiCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe('diagnosticWithrottleCommand()', function () {
  const options = {
    enable: 1
  }

  const sendString = '<D WIT 1>'
  const returnString = null

  test(`sendString is '${sendString}'`, () => {
    const command = diagnosticWithrottleCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = diagnosticWithrottleCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})
