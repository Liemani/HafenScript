//********************************************
// const title = "LMTFrame"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.LMTFrame === undefined) {





// load java script files
load("LMTPoint.js")
load("LMTSize.js")





// class definition
this.LMTFrame = class {
    constructor(x, y, width, height) {
        this.origin = new LMTPoint(x, y)
        this.size = new LMTSize(width, height)
    }

//    static initializeFromCoord(coord1, coord2) {
//        const x = coord1.x
//        const y = coord1.y
//        const width = coord2.x - coord1.x
//        const height = coord2.y - coord1.y
//
//        return new Frame(x, y, width, height)
//    }
//
//    get coordA() {
//        return new Coord(this.x, this.y)
//    }
//
//    get coordB() {
//        return new Coord(this.x + this.width, this.y + this.height)
//    }
//
//    get top() {
//        return this.y
//    }
//
//    get left() {
//        return this.x
//    }
//
//    get right() {
//        return this.x + this.width
//    }
//
//    get bottom() {
//        return this.y + this.hegith
//    }
//
//    get description() {
//        return "[class: Frame, x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", hegith: " + this.height + "]"
//    }
}





}
