//********************************************
// const title = "LMTView"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.LMTView === undefined) {





// load java script files
load("LMTFrame.js")





// class define
this.LMTView = class {
    constructor(x, y, width, height) {    // constructor(width = 0, height = 0) {
        this.frame = new LMTFrame(x, y, width, height)
    }

    get x() { return this.frame.x}
    set x(value) { this.frame.x = value}

    get y() { return this.frame.y}
    set y(value) { this.frame.y = value}

    get width() { return this.frame.width}
    set width(value) { this.frame.width = value}

    get height() { return this.frame.height}
    set height(value) { this.frame.height = value}
}





}
