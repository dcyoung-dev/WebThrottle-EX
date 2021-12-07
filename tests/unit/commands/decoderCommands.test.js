import {
    writeAddressProgramming,
    writeConfigurationBitMain,
    writeConfigurationByteMain
} from "../../../app/commands/decoderCommands";

describe('writeConfigurationByteMain()', function () {
    const options = {
        cab: 22,
        cv: 14,
        value: 134
    }
    const sendString = "<w 22 14 134>"
    const returnString = null

    test(`sendString is '${sendString}'`, () => {
        const command = writeConfigurationByteMain(options)
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = writeConfigurationByteMain(options)
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
});

describe('writeConfigurationBitMain()', function () {
    const options = {
        cab: 22,
        cv: 14,
        bit: 7,
        value: 1
    }
    const sendString = "<b 22 14 7 1>"
    const returnString = null

    test(`sendString is '${sendString}'`, () => {
        const command = writeConfigurationBitMain(options)
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = writeConfigurationBitMain(options)
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
});

describe('writeAddressProgramming()', function () {
    const options = {
        address: 1024
    }
    const sendString = "<W 1024>"
    const returnString = null

    test(`sendString is '${sendString}'`, () => {
        const command = writeAddressProgramming(options)
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = writeAddressProgramming(options)
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
});