const fs = require('fs');
const path = require('path');
let filepath = path.join(__dirname,'../dist/teams.html');


// function setFileHtml(data){

//     if(fs.existsSync(filepath)){
//         return `<h1>I love you sunny</h1>`
//     }

//     //To return HTML boilerplate
    
//     return `<!DOCTYPE html>
//     <html lang="en">
//    <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Team</title>
//     </head>
//     <body>
       
        
//     </body>
//     </html>`
    
// }

       
function appendToFile(data){
  fs.appendFileSync(filepath,data,(err) =>{
    if(err) throw err;
  })
}; 


const jsonfilepath = path.join(__dirname,'../dist/teams.json')

function setJsonData(data){
  return JSON.stringify(data)
}

function createManager(name,id,email,officeNumber){
  return new Manager(name,id,email,officeNumber)
}

function saveData(data){
  const dataText = setJsonData(data) 
 fs.appendFileSync(jsonfilepath,dataText,err =>{
  throw new Error('unable to save data to json file',err)
 })
}

module.exports = {
 
    appendToFile,
    saveData,
    createManager
}