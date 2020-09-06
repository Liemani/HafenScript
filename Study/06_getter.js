class Size {
    constructor(width, height) {    // constructor(width = 0, height = 0) {
        this.width = Number(width) ? Number(width) : 0    //  if height is undefined then Number(undefined) return 0
        this.height = Number(height) ? Number(height) : 0    // if the argument of Number function can't to be converted to Number type then Number function return NaN
    }

    getWidth() {
        return this.width
    }

    get getWidth2() {
        return this.width
    }

    get getWidth3() {
        return width
    }
}

this.size = new Size(10, 20)
describe(this.size.getWidth())
describe(this.size.getWidth2)
// describe(this.size.getWidth3)    // auto using this enable
describe(this.size.width)