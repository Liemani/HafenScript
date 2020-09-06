//********************************************
// const title = "LMTLabel"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.LMTLabel === undefined) {





// load java script files
load("LMTView")
load("LMTFrame")





// class definition
this.LMTLabel = class extends LMTView {
    constructor(text, x, y, width, height) {
        this.text = text
        this.frame = new Frame(x, y, width, height)
    }
}





}
