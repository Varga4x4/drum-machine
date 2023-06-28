const KEYS = [
    {
        key: "Q",
        name: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        modifiedName: "Chord-1",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
        key: "A",
        name: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        modifiedName: "Shaker",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
        key: "Z",
        name: "Kick-n'-Hat",
        url: "https://s3.,amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        modifiedName: "Punchy-Kick",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
        key: "W",
        name: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        modifiedName: "Chord-2",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
        key: "S",
        name: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        modifiedName: "Open-HH",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
        key: "X",
        name: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        modifiedName: "Side-Stick",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
        key: "E",
        name: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        modifiedName: "Chord-3",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
        key: "D",
        name: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        modifiedName: "Closed-HH",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
        key: "C",
        name: "Closed-HH",
        url: "https://s3.,amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        modifiedName: "Snare",
        modifiedUrl: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
]

const VOLUME_LEVEL_MIN = 0
const VOLUME_LEVEL_MAX = 100
const MODIFIER_INITIAL_VALUE = false
const VOLUME_INITIAL_VALUE = 50
const DISPLAY_INITIAL_VALUE = ""

const main = () => {

    // SETTING VARIABLES
    let isPowerOn = false
    let isModifierOn = MODIFIER_INITIAL_VALUE
    let volumeLevel = VOLUME_INITIAL_VALUE

    // GETTING ELEMENTS
    const modifierSwitchInputElement = document.getElementById("modifier-switch-input")
    const volumeSliderElement = document.getElementById("volume-slider")
    const powerSwitchInputElement = document.getElementById("power-switch-input")
    const display = document.getElementById("display-content")

    // SETTING POWER SWITCH INPUT
    const handlePowerSwitchInputElementOnChange = (event) => {
        // console.log("handlePowerSwitchInputElementOnChange")

        isPowerOn = event.target.checked
        console.log({ isPowerOn })

        modifierSwitchInputElement.disabled = !isPowerOn
        volumeSliderElement.disabled = !isPowerOn
        buttonQ.disabled = !isPowerOn
        buttonA.disabled = !isPowerOn
        buttonZ.disabled = !isPowerOn
        buttonW.disabled = !isPowerOn
        buttonS.disabled = !isPowerOn
        buttonX.disabled = !isPowerOn
        buttonE.disabled = !isPowerOn
        buttonD.disabled = !isPowerOn
        buttonD.disabled = !isPowerOn
        buttonC.disabled = !isPowerOn

        if (!isPowerOn) {
            isModifierOn = MODIFIER_INITIAL_VALUE
            modifierSwitchInputElement.checked = isModifierOn

            volumeLevel = VOLUME_INITIAL_VALUE
            volumeSliderElement.value = volumeLevel

            handleDisplayValue(DISPLAY_INITIAL_VALUE)

        }
    }

    // console.log(powerSwitchInputElement)
    powerSwitchInputElement.onchange = handlePowerSwitchInputElementOnChange
    powerSwitchInputElement.checked = isPowerOn

    const handleDisplayValue = (param) => {
        display.innerText = param
        // console.log("display", display)
    }

    // SETTING MODIFIER SWITCH INPUT
    const handleModifierSwitchInputElementOnChange = (event) => {
        // console.log("handleModifierSwitchInputElementOnChange")

        isModifierOn = event.target.checked
        console.log({ isModifierOn })
    }

    console.log(modifierSwitchInputElement)
    modifierSwitchInputElement.onchange = handleModifierSwitchInputElementOnChange
    modifierSwitchInputElement.checked = isModifierOn
    modifierSwitchInputElement.disabled = !isPowerOn

    const handleButtonOnClick = (param1) => {
        // console.log("handleButtonOnClick")

        const getParam1Id = param1.target.innerText

        if (!isModifierOn) {
            const indexOfObject = KEYS.findIndex(object => object.key === getParam1Id)
            const newParam1Id = KEYS[indexOfObject].name
            const audioOfObject = KEYS[indexOfObject].url
            const audio = new Audio(audioOfObject)

            audio.volume = volumeSliderElement.value / 100
            audio.play()
            handleDisplayValue(newParam1Id)

        } else {
            const indexOfObject = KEYS.findIndex(object => object.key === getParam1Id)
            const newParam1Id = KEYS[indexOfObject].modifiedName
            const audioOfObject = KEYS[indexOfObject].modifiedUrl
            const audio = new Audio(audioOfObject)

            audio.volume = volumeSliderElement.value / 100
            audio.play()
            handleDisplayValue(newParam1Id)
        }
    }

    // SETTING VOLUME SLIDER INPUT
    const handleVolumeSliderElementOnChange = (event) => {
        // console.log("handleVolumeSliderElementOnChange")
        // console.log({event})
        volumeLevel = event.target.valueAsNumber
        // console.log({volumeLevel})
    }

    console.log({ volumeSliderElement })
    volumeSliderElement.min = VOLUME_LEVEL_MIN
    volumeSliderElement.max = VOLUME_LEVEL_MAX
    volumeSliderElement.value = volumeLevel
    volumeSliderElement.onchange = handleVolumeSliderElementOnChange
    volumeSliderElement.disabled = !isPowerOn

    const toggleButtonDisabledProperty = (elementId, requiredValue) => {
        // console.log("toggleButtonDisabledProperty")

        const buttonElement = document.getElementById(elementId)

        let newValue = !buttonElement.disabled
        if (requiredValue !== undefined) {
            newValue = requiredValue
        }
        buttonElement.disabled = newValue
    }
    
    const buttonQ = document.getElementById("heater-1")
    buttonQ.onclick = handleButtonOnClick
    buttonQ.onchange = toggleButtonDisabledProperty
    buttonQ.disabled = !isPowerOn

    const buttonA = document.getElementById("heater-4")
    buttonA.onclick = handleButtonOnClick
    buttonA.onchange = toggleButtonDisabledProperty
    buttonA.disabled = !isPowerOn

    const buttonZ = document.getElementById("kick-n'-Hat")
    buttonZ.onclick = handleButtonOnClick
    buttonZ.onchange = toggleButtonDisabledProperty
    buttonZ.disabled = !isPowerOn

    const buttonW = document.getElementById("heater-2")
    buttonW.onclick = handleButtonOnClick
    buttonW.onchange = toggleButtonDisabledProperty
    buttonW.disabled = !isPowerOn

    const buttonS = document.getElementById("clap")
    buttonS.onclick = handleButtonOnClick
    buttonS.onchange = toggleButtonDisabledProperty
    buttonS.disabled = !isPowerOn

    const buttonX = document.getElementById("kick")
    buttonX.onclick = handleButtonOnClick
    buttonX.onchange = toggleButtonDisabledProperty
    buttonX.disabled = !isPowerOn

    const buttonE = document.getElementById("heater-3")
    buttonE.onclick = handleButtonOnClick
    buttonE.onchange = toggleButtonDisabledProperty
    buttonE.disabled = !isPowerOn

    const buttonD = document.getElementById("open-HH")
    buttonD.onclick = handleButtonOnClick
    buttonD.onchange = toggleButtonDisabledProperty
    buttonD.disabled = !isPowerOn

    const buttonC = document.getElementById("closed-HH")
    buttonC.onclick = handleButtonOnClick
    buttonC.onchange = toggleButtonDisabledProperty
    buttonC.disabled = !isPowerOn
}
main()