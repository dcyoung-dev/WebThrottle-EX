import {eraseCommand, storeCommand} from "../../../app/commands/eepromCommands.js";

describe('storeCommand()', function () {
    const sendString = "<E>"
    const returnString = "<0>"


    test(`sendString is '${sendString}'`, () => {
        const command = storeCommand()
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = storeCommand()
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
});

describe('eraseCommand()', function () {
    const sendString = "<e>"
    const returnString = "<0>"


    test(`sendString is '${sendString}'`, () => {
        const command = eraseCommand()
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = eraseCommand()
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
});


