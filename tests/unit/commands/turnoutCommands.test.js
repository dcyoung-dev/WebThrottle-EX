import {turnoutCommand} from "../../../app/commands/turnoutCommands.js";

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
