class Size {
    constructor(width, height) {    // constructor(width = 0, height = 0) {
        this.width = Number(width) ? Number(width) : 0    //  if height is undefined then Number(undefined) return 0
        this.height = Number(height) ? Number(height) : 0    // if the argument of Number function can't to be converted to Number type then Number function return NaN
    }
}

// function init(thing) { return thing != null ? thing : 0 }
function init(thing) { return thing === undefined ? 0 : thing }

// load("../testCode.js")