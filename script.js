var x = document.getElementsByTagName("BODY")[0];
const text = document.querySelector('.searchtext');
const switchThemeButton = document.getElementById('switch-theme');
const headera = document.querySelectorAll('.containar a');
const signupbtn = document.querySelector('.buttons button');
const buttonimg = document.querySelectorAll('.buttons img');

const google = document.querySelectorAll('.google img');
const box = document.querySelector('.box');
const searchbox = document.querySelector('.searchtext');
const searchbuttons = document.querySelectorAll('.searchbuttons button');
const language1 = document.querySelector('.languages h6');
const language2 = document.querySelectorAll('.languages span');

const footer = document.querySelector('footer');
const footera = document.querySelectorAll('footer a');
const footerh6 = document.querySelector('footer h6');
const hr = document.querySelector('hr');

const appbox = document.querySelector('.apps');
const app1 = document.querySelectorAll('.app1 .app h6');
const app2 = document.querySelectorAll('.app2 .app h6');
const app = document.querySelectorAll('.apps .app');

const appsbtn = document.querySelector('.apps button');

//To display the textbox content in the alert box
document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        if (text.value !== "") alert(text.value)
    }
})

//To Switch theme
switchThemeButton.addEventListener('click', function(){

    switchThemeButton.classList.toggle('imglight');
    switchThemeButton.classList.toggle('imgdark');
    
    x.classList.toggle('whitebody');
    
    buttonimg[0].classList.toggle('dark');
    buttonimg[1].classList.toggle('light');

    google[0].classList.toggle('dark');
    google[1].classList.toggle('light');
    
    for (const b of headera){

        b.classList.toggle('textlight');
        b.classList.toggle('textdark');
    }

    signupbtn.classList.toggle('signuplight');

    box.classList.toggle('boxlight');

    searchbox.classList.toggle('searchtextlight');


    for (const button of searchbuttons){
        button.classList.toggle('searchbtnlight');
    }


    language1.classList.toggle('languagelight');

    for (const language of language2){

        language.classList.toggle('languageslight');
    }


    footer.classList.toggle('footerlight');

    footerh6.classList.toggle('footerh6light');

    for (const footer of footera) {
        footer.classList.toggle('footeralight');
    }
    
  
    hr.classList.toggle('footerhrlight');

    appbox.classList.toggle('appslight');
    for (const app of app1) {
        app.classList.toggle('h6light');
        app.classList.toggle('h6dark');
    }
    
    for (const app of app2) {
        app.classList.toggle('h6light');
        app.classList.toggle('h6dark');
    }

    for (const appdiv of app) {
        appdiv.classList.toggle('applight');
        appdiv.classList.toggle('apphover');
    }

    appsbtn.classList.toggle('appbtnlight');
    appsbtn.classList.toggle('appbtndark');

    appbox.classList.toggle('appscrollbardark');
    appbox.classList.toggle('appscrollbarlight');



})

//To Open and close the AppBox
const appbtn = document.querySelectorAll('#app-icon');

appbtn[0].addEventListener('click', function(){   
    appbox.classList.toggle('appshow');
})

appbtn[1].addEventListener('click', function(){   
    appbox.classList.toggle('appshow');
})

