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
// o numero acima se refere a milisegundos

let testcollision = setInterval(function(){

    let topCharacter = parseInt(
        window.getComputedStyle(character).getPropertyValue('top')
    )

    let leftSquare = parseInt(
        window.getComputedStyle(square).getPropertyValue('left')
    )

    if(leftSquare < 45 && leftSquare > 0 && topCharacter >= 130){
        square.style.animation = 'none'
        square.style.display = 'none'
        alert('SE FODEU!')
    }

}, 10)