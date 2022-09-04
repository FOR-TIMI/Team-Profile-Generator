
const fs = require('fs');
const path = require('path');
const {setInnerCss, setInnerHTML, setJavaScript} = require('./fileData')


function createTeams(employeeData){
    const app = {};
    
    app.data = employeeData

    app.createFiles = function(){
         this.createHTMLfile();
         this.createAssetsFolder();
    }


    app.createAssetsFolder = function(){
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
    app.createHTMLfile = function(){
        const html = setInnerHTML(app.data)
        
        return fs.writeFile(path.join(__dirname, '../dist/app.html'),html, err =>{
                 if(err) throw new Error('error',err)
        })
    }

    //To create the javascript file
    app.createJsFile = function(){
        const js = setJavaScript();
        fs.writeFile(path.join(__dirname, '../dist/assets/js/index.js'),js , err =>{
            if(err) throw new Error('error',err); 
        })
    }

    //To create css file
    app.makeCssFile = function(){
        const css = setInnerCss()
        fs.writeFile(path.join(__dirname, '../dist/assets/css/styles.css'),css , err =>{
            if(err) throw new Error('error',err); 
        })
    
    }

    app.createFiles();

}


module.exports = { createTeams }









