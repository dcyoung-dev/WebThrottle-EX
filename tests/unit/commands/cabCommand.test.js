import {cabCommand} from "../../../app/commands/cabCommand";

const options = {
    cab: 22,
    func: 14,
    value: 0
}
const sendString = "<F 22 14 0>"
const returnString = "NONE"


test(`Cab command sendString() is '${sendString}'`, () => {
    const command = cabCommand(options)
    const sendValue = command.sendString()
    expect(sendValue).toBe(sendString)
})

test(`Cab command returnString() is '${returnString}'`, () => {
    const command = cabCommand(options)
    const returnValue = command.returnString()
    expect(returnValue).toBe(returnString)
})
