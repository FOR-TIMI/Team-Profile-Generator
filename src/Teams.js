
// import file system module 
const fs = require('fs');

//import path module
const path = require('path');

// Importing all texts from the text.js file 
const {setInnerCss, setInnerHTML, setJavaScript} = require('./Texts')

//to create the teams html, css, js folders and set the inner html,css and js
function createTeams(employeeData){
    const app = {};
    
    app.data = employeeData
 
    // initializing the creation of the html file and assets folder 
    app.createFiles = function(){
         this.createHTMLfile();
         this.createAssetsFolder();
    }

    //To create assets folder
    app.createAssetsFolder = function(){
        if(!fs.existsSync(path.join(__dirname, '../dist/assets'))){
        return fs.mkdir(path.join(__dirname, '../dist/assets'), (err) => {
            if(err) throw new Error('Couldn\'t create assets folder',err);
        
            this.makeCssFolder(); 
            this.makeJsFolder();
             
    })}

    }

    // if(!(fs.access(path.join(__dirname, '../dist/assets/css')), (err) => {
    //     if(err){
    //         fs.mkdir(path.join(__dirname, '../dist/assets/css', err => {
    //             if(err) throw new Error('Couldn\'t create assets folder', err)
    //             this.makeCssFile()
    //         })
        
    
    // )}

    //To create the css folder
    app.makeCssFolder = function(){
            fs.mkdir(path.join(__dirname, '../dist/assets/css'), (err) => {
                if(err) throw new Error('Couldn\'t create css folder',err);
                 this.makeCssFile()
                }) 
        }
    

    //To create JS folder
    app.makeJsFolder = function(){
        fs.mkdir(path.join(__dirname, '../dist/assets/js'), (err) => {
            if(err) throw new Error('Couldn\'t create js folder',err);
            this.createJsFile();
        })
    
    }
   
    //To create the index.html file and set inner HTML
    app.createHTMLfile = function(){
        const html = setInnerHTML(app.data)
        
        return fs.writeFile(path.join(__dirname, '../dist/app.html'),html, err =>{
                 if(err) throw new Error('Couldn\'t create HTML file',err)
        })
    }

    //To create the javascript file
    app.createJsFile = function(){
        const js = setJavaScript();
        fs.writeFile(path.join(__dirname, '../dist/assets/js/index.js'),js , err =>{
            if(err) throw new Error('Couldn\'t create javascript file',err); 
        })
    }

    //To create css file
    app.makeCssFile = function(){
        const css = setInnerCss()
        fs.writeFile(path.join(__dirname, '../dist/assets/css/styles.css'),css , err =>{
            if(err) throw new Error('Couldn\'t create css file',err); 
        })
    
    }

    app.createFiles();

}


module.exports = { createTeams }









