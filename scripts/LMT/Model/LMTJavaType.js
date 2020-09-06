//********************************************
// title = "LMTJavaType"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.LMTJavaType === undefined) {





// class define
this.LMTJavaType = class {
    static getPBotCharacterAPI() {
        if (globalThis.PBotCharacterAPI !== undefined) return

        globalThis.PBotCharacterAPI = Java.type("haven.purus.pbot.PBotCharacterAPI")
    }

    static getPBotCheckbox() {
        if (globalThis.PBotCheckbox !== undefined) return

        globalThis.PBotCheckbox = Java.type("haven.purus.pbot.PBotCheckbox")
    }

    static getPBotGob() {
        if (globalThis.PBotGob !== undefined) return

        globalThis.PBotGob = Java.type("haven.purus.pbot.PBotGob")
    }

    static getPBotGobAPI() {
        if (globalThis.PBotGobAPI !== undefined) return

        globalThis.PBotGobAPI = Java.type("haven.purus.pbot.PBotGobAPI")
    }

    static getPBotInventory() {
        if (globalThis.PBotInventory !== undefined) return

        globalThis.PBotInventory = Java.type("haven.purus.pbot.PBotInventory")
    }

    static getPBotItem() {
        if (globalThis.PBotItem !== undefined) return

        globalThis.PBotItem = Java.type("haven.purus.pbot.PBotItem")
    }

    static getPBotUtils() {
        if (globalThis.PBotUtils !== undefined) return

        globalThis.PBotUtils = Java.type("haven.purus.pbot.PBotUtils")

        globalThis.describe = function(thing) { PBotUtils.sysMsg(String(thing)) }
        globalThis.sleep = function(millisecond) { PBotUtils.sleep(millisecond) }
    }

    static getPBotWindow() {
        if (globalThis.PBotWindow !== undefined) return

        globalThis.PBotWindow = Java.type("haven.purus.pbot.PBotWindow")
    }

    static getPBotWindowAPI() {
        if (globalThis.PBotWindowAPI !== undefined) return

        globalThis.PBotWindowAPI = Java.type("haven.purus.pbot.PBotWindowAPI")
    }

    static getCoord() {
        if (globalThis.Coord !== undefined) return

        globalThis.Coord = Java.type("haven.Coord")
    }

    static getThread() {
        if (globalThis.Thread !== undefined) return

        globalThis.Thread = Java.type("java.lang.Thread")
    }
}





}
