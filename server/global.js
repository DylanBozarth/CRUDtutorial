setTimeout(() => {
    console.log('Ok nevermind')
    clearInterval(int)
}, 4000)

const int = setInterval(() => {
    console.log('fuck you')
}, 500)