class Path {
    constructor(string) {
        let _path = string
        
        // public property
        this.depth = _path.split("/").length - 1
        
        // public method
        this.pathForLoadByCurrentDepth = function(currentDepth) {
            let pathForLoadByCurrentDepth = _path
            for(let depth = 0; depth < currentDepth; depth++) {
                pathForLoadByCurrentDepth = "../" + pathForLoadByCurrentDepth
            }
            
            return pathForLoadByCurrentDepth
        }
    }
}
