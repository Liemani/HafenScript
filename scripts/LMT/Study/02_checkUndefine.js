function printSystemChatWindow(thing) {
    PBotUtils.sysMsg(String(thing))
}

const PBotUtils = Java.type("haven.purus.pbot.PBotUtils")

printSystemChatWindow("isFinite(NaN): " + isFinite(NaN))    // false
printSystemChatWindow("isFinite(null): " + isFinite(null))    // true
printSystemChatWindow("Number.isFinite(null): " + Number.isFinite(null))    // false

printSystemChatWindow("isNaN(NaN): " + isNaN(NaN))    // true
printSystemChatWindow("isNaN(PBotUtils.abcd): " + isNaN(PBotUtils.abcd))
printSystemChatWindow("void(PBotUtils.abcd): " + void(PBotUtils.abcd))
printSystemChatWindow("void(0): " + void(0))    // undefined: void(anything) always return undefined
printSystemChatWindow("(void(0) == undefined): " + (void(0) == undefined))    // true

printSystemChatWindow("typeof abcd: " + typeof abcd)    // number
printSystemChatWindow("typeof abcd: " + typeof aabbccdd)    // string
printSystemChatWindow("typeof abcd: " + typeof aabbccddeef)    / undefined