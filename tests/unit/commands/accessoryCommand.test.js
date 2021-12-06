import {accessoryCommand} from "../../../app/commands/accessoryCommand";

describe('accessoryCommand', function () {
    describe('with Linear address options', function () {
        const linearAddressOptions = {
            address: 1234,
            active: 0
        }

        const sendString = "<a 1234 0>"
        const returnString = null

        test(`sendString is '${sendString}'`, () => {
            const command = accessoryCommand(linearAddressOptions)
            const sendValue = command.sendString
            expect(sendValue).toBe(sendString)
        })

        test(`returnString is '${returnString}'`, () => {
            const command = accessoryCommand(linearAddressOptions)
            const returnValue = command.returnString
            expect(returnValue).toBe(returnString)
        })
    });

    describe('with Dual Coil address options', function () {
        const dualCoilAddressOptions = {
            address: {
                primaryAddress: 1234,
                subAddress: 2
            },
            active: 1
        }

        const sendString = "<a 1234 2 1>"
        const returnString = null


        test(`Accessory command sendString() is '${sendString}'`, () => {
            const command = accessoryCommand(dualCoilAddressOptions)
            const sendValue = command.sendString
            expect(sendValue).toBe(sendString)
        })

        test(`Accessory command returnString() is '${returnString}'`, () => {
            const command = accessoryCommand(dualCoilAddressOptions)
            const returnValue = command.returnString
            expect(returnValue).toBe(returnString)
        })
    });
});

