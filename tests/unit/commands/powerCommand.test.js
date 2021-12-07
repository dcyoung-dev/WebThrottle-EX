import {powerCommand} from "../../../app/commands/powerCommand";

const powerOff = {
    options: {
        power: 0,
    },
    returnString: "<p0>",
    sendString: "<0>"
}
const powerOn = {
    options: {
        power: 1,
    },
    returnString: "<p1>",
    sendString: "<1>"
}
const powerOffMain = {
    options: {
        power: 0,
        track: "MAIN"
    },
    returnString: "<p0 MAIN>",
    sendString: "<0 MAIN>"
}
const powerOnMain = {
    options: {
        power: 1,
        track: "MAIN"
    },
    returnString: "<p1 MAIN>",
    sendString: "<1 MAIN>"
}
const powerOffProg = {
    options: {
        power: 0,
        track: "PROG"
    },
    returnString: "<p0 PROG>",
    sendString: "<0 PROG>"
}
const powerOnProg = {
    options: {
        power: 1,
        track: "PROG"
    },
    returnString: "<p1 PROG>",
    sendString: "<1 PROG>"
}
const powerOffJoin = {
    options: {
        power: 0,
        track: "JOIN"
    },
    returnString: "<p0 JOIN>",
    sendString: "<0 JOIN>"
}
const powerOnJoin = {
    options: {
        power: 1,
        track: "JOIN"
    },
    returnString: "<p1 JOIN>",
    sendString: "<1 JOIN>"
}
const powerTestCases = [
    powerOff,
    powerOn,
    powerOffMain,
    powerOnMain,
    powerOffProg,
    powerOnProg,
    powerOffJoin,
    powerOnJoin,
]

describe('powerCommand()', function () {
    powerTestCases.forEach(({options, returnString, sendString}) => {
        test(`sendString is '${sendString}'`, () => {
            const command = powerCommand(options)
            const sendValue = command.sendString
            expect(sendValue).toBe(sendString)
        })

        test(`returnString is '${returnString}'`, () => {
            const command = powerCommand(options)
            const returnValue = command.returnString
            expect(returnValue).toBe(returnString)
        })
    })
});

