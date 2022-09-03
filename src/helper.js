
const fs = require('fs');
const path = require('path');
// let filepath = path.join(__dirname,'../dist/teams.html');


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

    app.createFiles = function(data){
         this.createHTMLfile();
         this.createAssetsFolder();
    }


    app.createAssetsFolder = function(data){
        return fs.mkdir(path.join(__dirname, '../dist/assets'), (err) => {
            if(err) throw new Error('error',err);
        
             this.makeJsFolder();
             this.makeCssFolder();
    })

    }

    //To create JS folder
    app.makeJsFolder = function(){
        fs.mkdir(path.join(__dirname, '../dist/assets/js'), (err) => {
            if(err) throw new Error('error',err);
            this.createJsFile();
        })
    
    }

    //To create the css folder
    app.makeCssFolder = function(){
        fs.mkdir(path.join(__dirname, '../dist/assets/css'), (err) => {
            if(err) throw new Error('error',err);
             this.makeCssFile()
            })
    }
   
    //To create the index.html file and set inner HTML
    app.createHTMLfile = function(data){
        return fs.writeFile(path.join(__dirname, '../dist/app.html'),'i love you', err =>{
                 if(err) throw new Error('error',err)
        })
    }

    //To create the javascript file
    app.createJsFile = function(){
        fs.writeFile(path.join(__dirname, '../dist/assets/js/index.js'), 'tj', err =>{
            if(err) throw new Error('error',err); 
        })
    }

    //To create css file
    app.makeCssFile = function(){
        fs.writeFile(path.join(__dirname, '../dist/assets/css/styles.css'), 'tj', err =>{
            if(err) throw new Error('error',err); 
        })
    
    }

    app.createFiles();


}

init();









