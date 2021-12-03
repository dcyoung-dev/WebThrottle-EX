import {throttleCommand} from "../../../app/commands/throttleCommand";

const defaultOptions = {
    options: {},
    sendString: "<t 1 0 0 1>",
    returnString: "<T 1 0 0 1>"
}

const cabOptions = {
    options: {
        cab: 22
    },
    sendString: "<t 1 22 0 1>",
    returnString: "<T 1 22 0 1>"
}

const speedOptions = {
    options: {
        speed: 14
    },
    sendString: "<t 1 0 14 1>",
    returnString: "<T 1 0 14 1>"
}

const directionOptions = {
    options: {
        direction: 0
    },
    sendString: "<t 1 0 0 0>",
    returnString: "<T 1 0 0 0>"
}

const options = {
    options: {
        cab: 22,
        speed: 14,
        direction: 0
    },
    sendString: "<t 1 22 14 0>",
    returnString: "<T 1 22 14 0>"
}

const throttleTestCases = [
    defaultOptions,
    cabOptions,
    speedOptions,
    directionOptions,
    options
]

throttleTestCases.forEach(({options, returnString, sendString}) => {
    test(`Throttle command sendString() is '${sendString}'`, () => {
        const command = throttleCommand(options)
        const sendValue = command.sendString()
        expect(sendValue).toBe(sendString)
    })

    test(`Throttle command returnString() is '${returnString}'`, () => {
        const command = throttleCommand(options)
        const returnValue = command.returnString()
        expect(returnValue).toBe(returnString)
    })
})
