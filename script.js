let themeDot = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('null')
}else{
    setTheme(theme)
}

for(var i = 0; themeDot.length >i; i++){
    themeDot[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == null){
        document.getElementById('theme-style').href = 'default.css'
    }
    if(mode == "white"){
        document.getElementById('theme-style').href = 'styles/white.css'
    }
    if(mode == "blue"){
        document.getElementById('theme-style').href = 'styles/blue.css'
    }
    if(mode == "green"){
        document.getElementById('theme-style').href = 'styles/green.css'
    }
    if(mode == "purple"){
        document.getElementById('theme-style').href = 'styles/purple.css'
    }

    localStorage.setItem('theme', mode)
}
