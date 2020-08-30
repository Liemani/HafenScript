//********************************************
const title = "Importer"
// made by Lieman
//
// description:
//  root directory is where this Importer.js file is.
//********************************************





// import
// load("model/Path.js")





// class implementation
class Importer {
    constructor() {
        let depthDict = {}
        let fileStack = []

        // private method
        function hasImported(path) {
            return depthDict[path] != null ? true : false
        }

        function depthOf(path) {
            return path.split("/").length - 1
        }

        function loadFrom(path) {
            let currentFilePath = fileStack[fileStack.length - 1]
            
            let loadingPath = path
            for(let depth = 0; depth < depthOf(currentFilePath); depth++) {
                loadingPath = "../" + loadingPath
            }

            fileStack.push(path)
            load(loadingPath)
            fileStack.pop()
        }

        function import(path) {
            loadFrom(path)
            depthDict[path] = depthOf(path)
        }

        // public method
        this.import = function(path) {
            if(!hasImported(path)) {
                import(path)
            }
        }
    }
}
