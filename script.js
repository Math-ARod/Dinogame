let character = document.querySelector('#character')
let square = document.querySelector('#square')
let square2 = document.querySelector('#square2')
let square3 = document.querySelector('#square3')

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

    let leftSquare2 = parseInt(
        window.getComputedStyle(square2).getPropertyValue('left')
    )

    let leftSquare3 = parseInt(
        window.getComputedStyle(square3).getPropertyValue('left')
    )

    if(leftSquare < 45 && leftSquare > 0 && topCharacter >= 130){
        square.style.animation = 'none'
        square.style.display = 'none'
        square2.style.animation = 'none'
        square2.style.display = 'none'
        square3.style.animation = 'none'
        square3.style.display = 'none'
        alert('GAME OVER!')
        location.reload()

    }
    
    else if(leftSquare2 < 45 && leftSquare2 > 0 && topCharacter >= 130){
        square2.style.animation = 'none'
        square2.style.display = 'none'
        square.style.animation = 'none'
        square.style.display = 'none'
        square3.style.animation = 'none'
        square3.style.display = 'none'
        alert('GAME OVER!')
        location.reload()
    }

    else if(leftSquare3 < 45 && leftSquare3 > 0 && topCharacter >= 130){
        square3.style.animation = 'none'
        square3.style.display = 'none'
        square2.style.animation = 'none'
        square2.style.display = 'none'
        square.style.animation = 'none'
        square.style.display = 'none'
        alert('GAME OVER!')
        location.reload()
    }

}, 10)