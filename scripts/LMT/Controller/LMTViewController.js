//********************************************
// const title = "LMTViewController"
// designed by Lieman
//
// description:
//  describe here...
//********************************************
if (this.LMTViewController === undefined) {





// load java script files
load("../View/LMTSize.js")





// class define
this.LMTViewController = class {
    constructor() {
        this.viewArray = []
    }

    get size() {
        let width = 0;
        let height = 0;
        let temp = 0;

        const lengthOfViewArray = this.viewArray.length

        for (let i = 0; i < lengthOfViewArray; ++i) {
            temp = this.viewArray[i].width
            if (width < temp) width = temp

            height += this.viewArray[i].height
        }

        return new LMTSize(width, height)
    }

    drawContents() {
        // draw contents
    }
}





}
