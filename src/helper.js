
const fs = require('fs');
const path = require('path');
let filepath = path.join(__dirname,'../dist/teams.html');


function init(){
    const app = {};

    // [
    //     Manager {
    //       name: 'lisa',
    //       id: '121412',
    //       email: 'lisa@gmail.com',
    //       officeNumber: '1412'
    //     },
    //     Engineer {
    //       name: 'dfgsefd',
    //       id: '12341234',
    //       email: 'asdfgsdfgh',
    //       github: 'FOR-TIMI'
    //     },
    //     Intern {
    //       name: 'chris',
    //       id: '11456568',
    //       email: 'chris@gmail.com',
    //       school: 'university of toronto'
    //     }
    //   ]

    app.setHtmlMarkup = function(obj){
     
    }

    app.createHtmlFile = function(data){
        fs.writeFile(filepath,data,(err) =>{
            if(err) throw err;
            console.log('Team html file generated')
          }).then(() => {
            
          })
    }


}










