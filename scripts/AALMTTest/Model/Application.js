//********************************************
// const title = "Application"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.Application === undefined) {





// load java script files
load("../../LMT/Model/LMTApplication.js")

load("../Controller/ViewController.js")
load("../View/Window.js")





// class define
this.Application = class extends LMTApplication {
    static run() {
        new Window("testMessage", new ViewController(), ScriptID)
    }
}





}
