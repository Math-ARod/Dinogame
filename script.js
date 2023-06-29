let character = document.querySelector('#character')
let square = document.querySelector('#square')

function jump(){
    if(character.classList != 'anime'){
        character.classList.add('anime')
    }

    setTimeout(function(){
        character.classList.remove('anime')
    }, 500)
}