
//To set innerHTML dynamically and return a string
function setInnerHTML(data){
    return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Up</title>
  <link rel="stylesheet" href="./assets/css/styles.css">
</head>
  <body>

    <!-- fixed-top  -->
    <header>
        <nav id="navbar" class="navbar">
            <a class="logo" href="#">TeamUp</a>
            <ul>
              <li>
                <a class=" active"  href="#manager">Manager</a>
              </li>
              <li>
                <a href="#engineer">Engineer</a>
              </li>
              <li>
                <a href="#intern">Intern</a>
              </li>
            </ul>
          </nav>
    </header>

    <ul class="navigation">
        <li class="selected"></li>
        <li></li>
        <li></li>
    </ul>

    <main class="container">


        ${setManagerHTML(data)}
      
        <section id="engineer">
          <div class="container">
            <h2>Engineers</h2>
            <div class="row">

         ${setOtherEmployeeHTML(data,'Engineer')}

            </div>
          </div>
        </section>


        <section id="intern">
          <div class="container">
            <h2>Interns</h2>
            <div class="row">
           
            ${setOtherEmployeeHTML(data,'Intern')}
            </div>
          </div>
        </section>
    </main>
   
   
   
   
   <script src="./assets/js/index.js"></script>
  </body>
</html>

    `
}

// returns a string for css contents 
function setInnerCss(){
    return `@font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-.ttf) format('truetype');
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.ttf) format('truetype');
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-.ttf) format('truetype');
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-.ttf) format('truetype');
    }
    * {
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }
    body {
      background: #E2E9FC;
      font-family: Montserrat;
      color: #570861;
    }
    header {
      position: absolute;
      top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    header nav {
      display: flex;
      position: fixed;
      width: 80%;
      height: 50px;
      margin: 30px;
      justify-content: space-between;
      align-items: center;
    }
    header nav ul {
      display: flex;
      list-style: none;
    }
    header nav ul li {
      margin-left: 40px;
    }
    header nav ul li a {
      transition: all ease 0.3s;
    }
    header nav ul li a:hover,
    header nav ul li a.active {
      padding: 0 0 5px 0;
      border-bottom: 3px solid #570861;
      transform: translateY(-10%);
    }
    header nav a {
      text-decoration: none;
      color: #570861;
    }
    header nav a.logo {
      font-size: 30px;
      font-weight: 500;
    }
    .navigation {
      position: fixed;
      right: 6%;
      list-style: none;
      top: 50%;
      transform: translateY(-50%);
    }
    .navigation li {
      width: 10px;
      height: 10px;
      border: 2.5px solid #570861;
      border-radius: 50%;
      margin-top: 20px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .navigation li:hover,
    .navigation li.selected {
      transform: scale(1.4);
    }
    .fully-centered {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    section {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    section h2 {
      text-align: center;
      font-size: 30px;
      font-weight: 400;
    }
    #manager h2 {
      margin-bottom: 70px;
    }
    #manager .card {
      display: flex;
      align-items: flex-end;
      margin-top: 30px;
    }
    #manager .card-img {
      width: 357px;
      height: 399px;
      background-color: #fff;
      background-image: url('https://img.freepik.com/free-vector/organization-abstract-concept_335657-3015.jpg?w=740&t=st=1662021506~exp=1662022106~hmac=4d1ee77ded81984d8bae611d91528d0a70a05d2b66ca4dcaa784405cf5e9d3b7');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      border-top-left-radius: 30px;
    }
    #manager .card-info {
      width: 499px;
      height: 300px;
      background-color: #b8c2df;
      border-top-right-radius: 30px;
    }
    #manager .card-info li {
      list-style: none;
      padding: 15px;
      background-color: #E2E9FC;
      margin: 20px 20px;
      border-radius: 7px;
    }
    #manager .card-info li span {
      font-weight: 600;
      margin-right: 15px;
    }
    #engineer .container,
    #intern .container {
      width: 80%;
    }
    #engineer h2,
    #intern h2 {
      width: 100%;
      margin-bottom: 30px;
    }
    #engineer .row,
    #intern .row {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    #engineer .card,
    #intern .card {
      width: 300px;
      height: 373px;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #engineer .card-img,
    #intern .card-img {
      width: 90%;
      height: 50%;
      background-color: #570861;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    #engineer .card-body,
    #intern .card-body {
      height: 60%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0;
    }
    #engineer .card-body .card-title,
    #intern .card-body .card-title {
      font-weight: 600;
      padding: 5px;
    }
    #engineer .card-info,
    #intern .card-info {
      width: 100%;
      height: 100%;
    }
    #engineer .card-info li,
    #intern .card-info li {
      list-style: none;
      padding: 6px;
      margin: 10px 10px;
      border-radius: 5px;
    }
    #engineer .card-info li span,
    #intern .card-info li span {
      margin-right: 5px;
    }
    #engineer {
      background: #fff;
    }
    #engineer .card-title {
      color: #E2E9FC;
    }
    #engineer .card {
      background-color: #767CC5;
    }
    #engineer .card .card-img {
      background-image: url('https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1662193451~exp=1662194051~hmac=9531d620ce969e97ac18ea0ba08f909d9dc65044eb7a1aaede381f4c16293adb');
      background-position: center;
      background-size: contain;
    }
    #engineer .card .card-info {
      background-color: #767CC5;
    }
    #engineer .card .card-info li {
      background-color: #E2E9FC;
    }
    #intern .card {
      background-color: #949FFE;
    }
    #intern .card .card-img {
      background-image: url('https://img.freepik.com/free-vector/internship-job-illustration_23-2148722413.jpg?w=740&t=st=1662194393~exp=1662194993~hmac=6753de134371ce2782447d0dd59dca48241f01da497f81962383ac028e94a6fd');
      background-position: top;
      background-size: cover;
    }
    #intern .card li {
      background-color: #fff;
    }
    `
}

// returns a string of the javascript
function setJavaScript(){
  
    return `const sections = document.querySelectorAll('section');
    const navigation = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('header nav a');
    
    //To get the windowHeight
    const windowHeight = window.innerHeight;
    
    window.addEventListener('scroll', function(){
        //To get the current position of the window on vertical scroll
    
        sections.forEach(function(section,i){
            //To get the percentage that is more visible and set navigator dynamically
            //OffestTop gives the top of the section
            //check if the offset top is less than the scroll top
    
          let top = window.scrollY;
          let offset = section.offsetTop - 350;
          let height= section.offsetHeight;
    
          if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
              link.classList.remove('active');
              document.querySelector('header nav a[href*=' +section.getAttribute('id')).classList.add('active');
            })
            navigation.children[i].classList.add('selected')
          }
          else{
            navigation.children[i].classList.remove('selected')
          }
        })
    })
    
    //To set navigation lis onclick scroll event
    document.querySelectorAll('.navigation li').forEach((li,i) => {
        li.addEventListener('click', ()=>{
          window.scrollTo({
            top: i * window.innerHeight,
            behavior: "smooth"
          })
        })
    })
    
    `
}

//returns a string of the inner html of the manager
function setManagerHTML(data){

    managerData = data[0];

    let name = managerData.getName();
    let id = managerData.getId();
    let email = managerData.getEmail();
    let role = managerData.getRole();
    let officeNumber = managerData.officeNumber;
    let html = ''

         
    return`
      <section id="manager">
        <div>
          <h2>${role}</h2>
            <div class="card">
              <div class="card-img"></div>
                <ul class="card-info">
                  <li><span>ID:</span>${id}</li>
                  <li><span>Name:</span>${name}</li>
                  <li><span>Email:</span> <a href="mailto:${email}">${email}</a></li>
                  <li><span>Office Number:</span>${officeNumber}</li>
                </ul>

            </div>
        </div>  
    </section>
    `



}

//returns a string of the inner html of the Intern or Engineer
function setOtherEmployeeHTML(data,role){
  let html = ''

  data.forEach(employee =>{
    if(employee.getRole() === role){
      html += createCard(employee);
    }
  })
return html;
}

//creates a html card for any employee
function createCard(employee){
    return `<div class="card">
    <div class="card-img"></div>
    <div class="card-body">
      <div class="card-title">${employee.getRole()}</div>
      <ul class="card-info">
        <li><span>ID:</span> ${employee.id}</li>
        <li><span>Name:</span>${employee.name}</li>
        <li><span>Email:</span> <a href="mailto:${employee.email}">${employee.email}</a></li>
        ${employee.github ? `<li><span>Github:</span><a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>` : '<li><span>School:</span>uofT</li>'}
      </ul>
    </div>
 </div>`
 }


module.exports = {
  setInnerCss,
  setInnerHTML,
  setJavaScript
}


