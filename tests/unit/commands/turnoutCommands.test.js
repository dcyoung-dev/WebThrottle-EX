import {
  listTurnoutsCommand,
  defineDCCTurnoutCommand,
  defineServoTurnoutCommand, defineVPINTurnoutCommand, deleteTurnoutCommand,
  turnoutCommand
} from "../../../app/commands/turnoutCommands.js";

describe('turnoutCommand()', function () {
  const options = {
    turnout: 22,
    thrown: 0
  }
  const sendString = "<T 22 0>"
  const returnString = "<H 22 0>"


  test(`sendString is '${sendString}'`, () => {
    const command = turnoutCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = turnoutCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
});


describe("defineDCCTurnoutCommand()", function () {
  describe('with Linear address options', function () {
    const linearAddressOptions = {
      turnout: 12,
      address: 1234,
    }

    const sendString = "<T 12 DCC 1234>"
    const returnString = "<0>"

    test(`sendString is '${sendString}'`, () => {
      const command = defineDCCTurnoutCommand(linearAddressOptions)
      const sendValue = command.sendString
      expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
      const command = defineDCCTurnoutCommand(linearAddressOptions)
      const returnValue = command.returnString
      expect(returnValue).toBe(returnString)
    })
  });

  describe('with Dual Coil address options', function () {
    const dualCoilAddressOptions = {
      turnout: 12,
      address: {
        primaryAddress: 1234,
        subAddress: 2
      }
    }

    const sendString = "<T 12 DCC 1234 2>"
    const returnString = "<0>"


    test(`Accessory command sendString() is '${sendString}'`, () => {
      const command = defineDCCTurnoutCommand(dualCoilAddressOptions)
      const sendValue = command.sendString
      expect(sendValue).toBe(sendString)
    })

    test(`Accessory command returnString() is '${returnString}'`, () => {
      const command = defineDCCTurnoutCommand(dualCoilAddressOptions)
      const returnValue = command.returnString
      expect(returnValue).toBe(returnString)
    })
  });
})


describe("defineServoTurnoutCommand()", function () {
  const options = {
    turnout: 12,
    pin: 100,
    thrownPosition: 410,
    closedPosition: 205,
    profile: 2
  }

  const sendString = "<T 12 SERVO 100 410 205 2>"
  const returnString = "<0>"

  test(`sendString is '${sendString}'`, () => {
    const command = defineServoTurnoutCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = defineServoTurnoutCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe("defineVPINTurnoutCommand()", function () {
  const options = {
    turnout: 12,
    pin: 100,
  }

  const sendString = "<T 12 VPIN 100>"
  const returnString = "<0>"

  test(`sendString is '${sendString}'`, () => {
    const command = defineVPINTurnoutCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = defineVPINTurnoutCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe("deleteTurnoutCommand()", function () {
  const options = {
    turnout: 12,
  }

  const sendString = "<T 12>"
  const returnString = "<0>"

  test(`sendString is '${sendString}'`, () => {
    const command = deleteTurnoutCommand(options)
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = deleteTurnoutCommand(options)
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})

describe("listTurnoutsCommand()", function () {
  const sendString = "<T>"
  const returnString = "<X>"

  test(`sendString is '${sendString}'`, () => {
    const command = listTurnoutsCommand()
    const sendValue = command.sendString
    expect(sendValue).toBe(sendString)
  })

  test(`returnString is '${returnString}'`, () => {
    const command = listTurnoutsCommand()
    const returnValue = command.returnString
    expect(returnValue).toBe(returnString)
  })
})
