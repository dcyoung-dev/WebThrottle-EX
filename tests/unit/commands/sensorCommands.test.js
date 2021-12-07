import {defineSensorCommand, deleteSensorCommand, listSensorsCommand} from "../../../app/commands/sensorCommands";

describe("defineSensorCommand()", function () {
  describe('with Linear address options', function () {
    const options = {
      sensor: 12,
      pin: 1234,
      pullUp: 1,
    }

    const sendString = "<S 12 1234 1>"
    const returnString = "<0>"

    test(`sendString is '${sendString}'`, () => {
      const command = defineSensorCommand(options)
      const sendValue = command.sendString
      expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
      const command = defineSensorCommand(options)
      const returnValue = command.returnString
      expect(returnValue).toBe(returnString)
    })
  });
})

describe("deleteServoCommand()", function () {
  const options = {
    sensor: 12,
  }

  const sendString = "<S 12>"
  const returnString = "<0>"

  test(`sendString is '${sendString}'`, () => {
    const command = deleteSensorCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = deleteSensorCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe("listSensorsCommand()", function () {
  const sendString = "<S>"
  const returnString = "<X>"

  test(`sendString is '${sendString}'`, () => {
    const command = listSensorsCommand()
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = listSensorsCommand()
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})
