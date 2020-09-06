//********************************************
// const title = "ViewController"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.ViewController === undefined) {





// load java script files
load("../../LMT/Controller/LMTViewController.js")
load("../../LMT/View/LMTButton.js")





// class define
this.ViewController = class extends LMTViewController {
    constructor() {
        super()
        this.viewArray.push(new LMTButton("Button1", 0, 0, 100, 50))
    }
}





}
