const sections = document.querySelectorAll('section');
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
      let id = section.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
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

