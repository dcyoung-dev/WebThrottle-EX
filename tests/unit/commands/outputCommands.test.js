import {
    defineOutputCommand,
    deleteOutputCommand,
    listOutputsCommand,
    outputCommand
} from "../../../app/commands/outputCommands";

describe('outputCommand()', function () {
    const options = {
        output: 22,
        state: 0
    }
    const sendString = "<Z 22 0>"
    const returnString = "<Y 22 0>"


    test(`sendString is '${sendString}'`, () => {
        const command = outputCommand(options)
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = outputCommand(options)
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
});

describe("defineOutputCommand()", function () {
    const options = {
        output: 12,
        pin: 1234,
        iFlag: "101",
    }

    const sendString = "<Z 12 1234 101>"
    const returnString = "<0>"

    test(`sendString is '${sendString}'`, () => {
        const command = defineOutputCommand(options)
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = defineOutputCommand(options)
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
})

describe("deleteOutputCommand()", function () {
    const options = {
        output: 12,
    }

    const sendString = "<Z 12>"
    const returnString = "<0>"

    test(`sendString is '${sendString}'`, () => {
        const command = deleteOutputCommand(options)
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = deleteOutputCommand(options)
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
})

describe("listOutputsCommand()", function () {
    const sendString = "<Z>"
    const returnString = "<X>"

    test(`sendString is '${sendString}'`, () => {
        const command = listOutputsCommand()
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = listOutputsCommand()
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
})
