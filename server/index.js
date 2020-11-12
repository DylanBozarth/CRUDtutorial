const express = require("express");
const app = express();
// set code to a url 
// req = request  res = response
app.get("/", (req, res) => {
    res.send('AAAAa')
});
// see the package.json for the commands
app.listen(3003, () => {
    console.log('the backend words 2')
}
)