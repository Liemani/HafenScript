//********************************************
// title = "JavaType"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.JavaType === undefined) {





// class define
class JavaType {
    static getPBotUtils() {
        if (this.globalObject.PBotUtils === undefined) {
            this.globalObject.PBotUtils = Java.type("haven.purus.pbot.PBotUtils")
        }

        this.globalObject.describe = function(thing) {
            JavaType.globalObject.PBotUtils.sysMsg(String(thing))
        }
    }

    static getPBotGobAPI() {
        if (this.globalObject.PBotGobAPI === undefined) {
            this.globalObject.PBotGobAPI = Java.type("haven.purus.pbot.PBotGobAPI")
        }
    }

    static getPBotWindowAPI() {
        if (this.globalObject.PBotWindowAPI === undefined) {
            this.globalObject.PBotWindowAPI = Java.type("haven.purus.pbot.PBotWindowAPI")
        }
    }

    static getCoord() {
        if (this.globalObject.Coord === undefined) {
            this.globalObject.Coord = Java.type("haven.Coord")
        }
    }

    static getThread() {
        if (this.globalObject.Thread === undefined) {
            this.globalObject.Thread = Java.type("java.lang.Thread")
        }
    }
}





// execute when loaded
JavaType.globalObject = this





}
