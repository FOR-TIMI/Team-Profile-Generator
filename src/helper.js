
const fs = require('fs');
const path = require('path');
const {setInnerCss, setInnerHTML, setJavaScript} = require('./fileData')





function init(){
    const app = {};

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
        return fs.writeFile(path.join(__dirname, '../dist/app.html'),setInnerHTML(data), err =>{
                 if(err) throw new Error('error',err)
        })
    }

    //To create the javascript file
    app.createJsFile = function(){
        fs.writeFile(path.join(__dirname, '../dist/assets/js/index.js'), setJavaScript(), err =>{
            if(err) throw new Error('error',err); 
        })
    }

    //To create css file
    app.makeCssFile = function(){
        fs.writeFile(path.join(__dirname, '../dist/assets/css/styles.css'), setInnerCss(), err =>{
            if(err) throw new Error('error',err); 
        })
    
    }

    app.createFiles();

}

init();









