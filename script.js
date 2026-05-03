const sections = document.querySelectorAll('.section');
const skills = document.querySelectorAll('.skill');

window.addEventListener('scroll',()=>{
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 120){
      sec.classList.add('show');
    }
  });

  skills.forEach((skill,index)=>{
    const top = skill.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      setTimeout(()=>{
        skill.classList.add('show');
      }, index * 120);
    }
  });
});

function sendMsg(){
  alert("Thank you! I will contact you soon.");
}
