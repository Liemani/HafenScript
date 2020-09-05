class Size {
    constructor(width, height) {    // constructor(width = 0, height = 0) {
        this.width = Number(width) ? Number(width) : 0    // Number(undefined) { width === undefined ? return 0 }
        this.height = Number(height) ? Number(height) : 0    // if the argument of Number function can't to be converted to Number type then Number function return NaN
    }
}

// '===' check shellowly so perfect for checking undefined
// contrast, '==' tests for loose equality and preforms type coercion. This means we compare two values after converting them to a common type.
// https://codeburst.io/javascript-null-vs-undefined-20f955215a2
function init(thing) { return thing === undefined ? 0 : thing }
