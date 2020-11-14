 setTimeout(() => {
    console.log('Ok nevermind')
    clearInterval(int)
}, 4000)

const int = setInterval(() => {
    console.log('fuck you')
}, 500)
 
// dir name and file name 
console.log(__dirname) // find directory 
console.log(__filename) // find directory with file 