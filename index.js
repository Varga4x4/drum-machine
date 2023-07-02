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

const BUTTON_ELEMENTS = [
    document.getElementById("button-heater-1"),
    document.getElementById("button-heater-4"),
    document.getElementById("button-kick-n'-Hat"),
    document.getElementById("button-heater-2"),
    document.getElementById("button-clap"),
    document.getElementById("button-kick"),
    document.getElementById("button-heater-3"),
    document.getElementById("button-open-HH"),
    document.getElementById("button-closed-HH")
]

const modifierSwitchInputElement = document.getElementById("modifier-switch-input")
const volumeSliderElement = document.getElementById("volume-slider")
const powerSwitchInputElement = document.getElementById("power-switch-input")
const displayContentElement = document.getElementById("display-content")

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

    // SETTING POWER SWITCH INPUT
    const handlePowerSwitchInputElementOnChange = (event) => {
        isPowerOn = event.target.checked

        const elementsToBeDisabled = [
            modifierSwitchInputElement,
            volumeSliderElement,
            ...BUTTON_ELEMENTS,
        ].forEach(elem => elem.disabled = !isPowerOn)

        if (!isPowerOn) {
            isModifierOn = MODIFIER_INITIAL_VALUE
            modifierSwitchInputElement.checked = isModifierOn

            volumeLevel = VOLUME_INITIAL_VALUE
            volumeSliderElement.value = volumeLevel

            handleDisplayValue(DISPLAY_INITIAL_VALUE)
        }

        const handleKeyDown = (event) => {
            const pressedKey = event.key.toUpperCase()
            const isCorrectKey = !!KEYS.find(key => key.key === pressedKey)

            if (isCorrectKey && isPowerOn) {
                const param1 = {
                    target: {
                        innerText: pressedKey
                    }
                }
                handleButtonOnClick(param1)
            }
        }

        if (isPowerOn) {
            document.addEventListener("keydown", handleKeyDown)
        } else {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }

    powerSwitchInputElement.onchange = handlePowerSwitchInputElementOnChange
    powerSwitchInputElement.checked = isPowerOn

    const handleDisplayValue = (param) => {
        displayContentElement.innerText = param
    }

    // SETTING MODIFIER SWITCH INPUT
    const handleModifierSwitchInputElementOnChange = (event) => {
        isModifierOn = event.target.checked
    }

    modifierSwitchInputElement.onchange = handleModifierSwitchInputElementOnChange
    modifierSwitchInputElement.checked = isModifierOn
    modifierSwitchInputElement.disabled = !isPowerOn

    const handleButtonOnClick = (param1) => {
        const getParam1Id = param1.target.innerText
        const findObject = KEYS.find(object => object.key === getParam1Id)

        let newParam1Id,
            audioOfObject
        if (!isModifierOn) {
            newParam1Id = findObject.name
            audioOfObject = findObject.url
        } else {
            newParam1Id = findObject.modifiedName
            audioOfObject = findObject.modifiedUrl
        }

        const audio = new Audio(audioOfObject)
        audio.volume = volumeSliderElement.value / 100
        audio.play()
        handleDisplayValue(newParam1Id)
    }

    // SETTING VOLUME SLIDER INPUT
    const handleVolumeSliderElementOnChange = (event) => {
        volumeLevel = event.target.valueAsNumber
    }

    volumeSliderElement.min = VOLUME_LEVEL_MIN
    volumeSliderElement.max = VOLUME_LEVEL_MAX
    volumeSliderElement.value = volumeLevel
    volumeSliderElement.onchange = handleVolumeSliderElementOnChange
    volumeSliderElement.disabled = !isPowerOn

    const toggleButtonDisabledProperty = (elementId, requiredValue) => {
        const buttonElement = document.getElementById(elementId)
        const newValue = requiredValue ? requiredValue : !buttonElement.disabled

        buttonElement.disabled = newValue
    }

    BUTTON_ELEMENTS.forEach(elem => {
        elem.onclick = handleButtonOnClick
        elem.onchange = toggleButtonDisabledProperty
        elem.disabled = !isPowerOn
    })
}

main()