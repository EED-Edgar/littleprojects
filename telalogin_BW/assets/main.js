const moonbtn = document.getElementById('mode_icon');
const form = document.getElementById('login_form');

moonbtn.addEventListener('click', () => {
    if(moonbtn.classList.contains('fa-moon')){
        moonbtn.classList.remove('fa-moon');
        moonbtn.classList.add('fa-sun');
        form.classList.add('dark');
    }else{
        moonbtn.classList.remove('fa-sun');
        moonbtn.classList.add('fa-moon');
        form.classList.remove('dark');
    }
});