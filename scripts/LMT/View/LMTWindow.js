//********************************************
// const title = "LMTWindow"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.LMTWindow === undefined) {





// load java script files
load("../Model/LMTJavaType.js")
LMTJavaType.getPBotUtils()

load("../Controller/LMTViewController.js")
load("LMTSize.js")





// class define
this.LMTWindow = class {
    constructor(title, viewController, id) {    // constructor(width = 0, height = 0) {
        this.title = title
        this.size = viewController.size
        this.id = id

        PBotUtils.PBotWindow("testMessage", viewController.size.height, viewController.size.width, ScriptID)

        viewController.drawContents()
    }
}





}
