//********************************************
// const title = "Importer.js"
// made by Lieman at 2020.05.17
//
// description:
//  root directory is where this Importer.js file is.
//********************************************





// class implementation
class Importer {
    constructor() {
        let depthDict = {}
        let fileStack = []

        // private method
        function hasImported(string) {
            return depthDict[string] != null ? true : false
        }

        function depthOf(string) {
            return string.split("/").length - 1
        }

        function loadFrom(string) {
            let currentFilePath = fileStack[fileStack.length - 1]
            let resultPath = string

            for(let depth = 0; depth < depthOf(string); depth++) {
                resultPath = "../" + resultPath
            }

            fileStack.push(string)
            load(resultPath)
            fileStack.pop()
        }

        function import(string) {
            loadFrom(string)
            depthDict[string] = depthOf(string)
        }

        // public method
        this.import = function(string) {
            if(!hasImported(string)) {
                import(string)
            }
        }
    }
}

// import custom js
function loadJS(string) {
    if() {
        load(string)
    }
}