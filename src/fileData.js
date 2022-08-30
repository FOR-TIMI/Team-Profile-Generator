function setFileHtml(data){
    return `${data}`
}

       
function appendToFile(data){
  fs.appendFile('team.html',data,(err) =>{
    console.log(err)
  })
};  

module.exports = {
    setFileHtml,
    appendToFile
}