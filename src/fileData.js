const fs = require('fs');
const path = require('path');


function setFileHtml(data){
    return `<h1>I love you sunny</h1>`
}

       
function appendToFile(data){
  fs.appendFileSync(path.join(__dirname,'../dist/teams.html'),String(data),(err) =>{
    if(err) throw err;
  })
};  

module.exports = {
    setFileHtml,
    appendToFile
}