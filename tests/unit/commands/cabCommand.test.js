import {cabCommand} from "../../../app/commands/cabCommand";

const options = {
    cab: 22,
    func: 14,
    value: 0
}
const sendString = "<F 22 14 0>"
const returnString = null


describe('cabCommand()', function () {
    test(`sendString is '${sendString}'`, () => {
        const command = cabCommand(options)
        const sendValue = command.sendString
        expect(sendValue).toBe(sendString)
    })

    test(`returnString is '${returnString}'`, () => {
        const command = cabCommand(options)
        const returnValue = command.returnString
        expect(returnValue).toBe(returnString)
    })
});
