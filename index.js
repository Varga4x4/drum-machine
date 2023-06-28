// const KEYS = [
//     {
//         key: "Q",
//         id: "Heater-1",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
//     },
//     {
//         key: "A",
//         id: "Heater-4",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
//     },
//     {
//         key: "Z",
//         id: "Kick-n'-Hat",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
//     },
//     {
//         key: "W",
//         id: "Heater-2",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
//     },
//     {
//         key: "S",
//         id: "Clap",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
//     },
//     {
//         key: "X",
//         id: "Kick",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
//     },
//     {
//         key: "E",
//         id: "Heater-3",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
//     },
//     {
//         key: "D",
//         id: "Open-HH",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
//     },
//     {
//         key: "C",
//         id: "Closed-HH",
//         url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
//     }
// ]

const VOLUME_LEVEL_MIN = 0
const VOLUME_LEVEL_MAX = 100
const MODIFIER_INITIAL_VALUE = false
const VOLUME_INITIAL_VALUE = 50

const main = () => {

    // const handleDisplayValue = (param) => {
    //     const display = document.getElementById("display-content")
    //     display.innerText = param
    //     console.log("display", display)
    // }

    // const handleButtonOnClick = () => {
    //     console.log("handleButtonOnClick")
    //     const alfa = KEYS[0].id // Finished here
    //     console.log("alfa", alfa)
    //     handleDisplayValue(alfa)
    // }

    // const buttonQ = document.getElementById("Heater-1")
    // buttonQ.onclick = handleButtonOnClick

    // const buttonA = document.getElementById("Heater-4")
    // buttonA.onclick = handleButtonOnClick

    // const buttonZ = document.getElementById("Kick-n'-Hat")
    // buttonZ.onclick = handleButtonOnClick

    // const buttonW = document.getElementById("Heater-2")
    // buttonW.onclick = handleButtonOnClick

    // const buttonS = document.getElementById("Clap")
    // buttonS.onclick = handleButtonOnClick

    // const buttonX = document.getElementById("Kick")
    // buttonX.onclick = handleButtonOnClick

    // const buttonE = document.getElementById("Heater-3")
    // buttonE.onclick = handleButtonOnClick

    // const buttonD = document.getElementById("Open-HH")
    // buttonD.onclick = handleButtonOnClick

    // const buttonC = document.getElementById("Closed-HH")
    // buttonC.onclick = handleButtonOnClick

    // ----------------------------------------------------------


    // SETTING VARIABLES
    let isPowerOn = false
    let isModifierOn = MODIFIER_INITIAL_VALUE
    let volumeLevel = VOLUME_INITIAL_VALUE


    // GETTING ELEMENTS
    const modifierSwitchInputElement = document.getElementById("modifier-switch-input")
    const volumeSliderElement = document.getElementById("volume-slider")
    const powerSwitchInputElement = document.getElementById("power-switch-input")


    // SETTING POWER SWITCH INPUT
    const handlePowerSwitchInputElementOnChange = (event) => {
        console.log("handlePowerSwitchInputElementOnChange")

        isPowerOn = event.target.checked
        console.log({isPowerOn})

        modifierSwitchInputElement.disabled = !isPowerOn
        volumeSliderElement.disabled = !isPowerOn

        if (!isPowerOn) {
            isModifierOn = MODIFIER_INITIAL_VALUE
            modifierSwitchInputElement.checked = isModifierOn

            volumeLevel = VOLUME_INITIAL_VALUE
            volumeSliderElement.value =volumeLevel
        }
    }

    // console.log(powerSwitchInputElement)
    powerSwitchInputElement.onchange = handlePowerSwitchInputElementOnChange
    powerSwitchInputElement.checked = isPowerOn


    // SETTING VOLUME SLIDER INPUT
    const handleVolumeSliderElementOnChange = (event) => {
        console.log("handleVolumeSliderElementOnChange")
        // console.log({event})
        volumeLevel = event.target.valueAsNumber
        // console.log({volumeLevel})
    }

    console.log({volumeSliderElement})
    volumeSliderElement.min = VOLUME_LEVEL_MIN
    volumeSliderElement.max = VOLUME_LEVEL_MAX
    volumeSliderElement.value = volumeLevel
    volumeSliderElement.onchange = handleVolumeSliderElementOnChange
    volumeSliderElement.disabled = !isPowerOn

    
    // SETTING MODIFIER SWITCH INPUT
    const handleModifierSwitchInputElementOnChange = (event) => {
        console.log("handleModifierSwitchInputElementOnChange")

        isModifierOn = event.target.checked
        console.log({isModifierOn})
    }

    console.log(modifierSwitchInputElement)
    modifierSwitchInputElement.onchange = handleModifierSwitchInputElementOnChange
    modifierSwitchInputElement.checked = isModifierOn
    modifierSwitchInputElement.disabled = !isPowerOn

}
main()