const f = ["file1.txt","file2.txt","file3.txt"]

function loadFiles(files,callback) {
    let resarr = [];

    resarr.push(...files)

    for(let i = 0 ;i < resarr.length;i++){
        readFile(resarr[i],callback)
    }
}

function readFile(file,callback) {
    setTimeout(()=>{
       callback('Content of ' + file)
    },1000)
}


loadFiles(f,(results)=>{
    console.log(results);
})