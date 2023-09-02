
//character move functions, to move character on button press a certain distance, and to stop moving when the button is released//

function move(character) {
    character.style.position = 'fixed'
    character.style.zIndex = '5'

    function moveToCoordinates(left, bottom) {
        character.style.left = left + 'px'
        character.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
        let direction = null;
    let x = left;
    let y = bottom;

    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
    
    function moveCharacter(){ 
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        character.style.left = x + 'px'
        character.style.bottom = y + 'px'
    }
    
    setInterval(moveCharacter, 1)
    
   document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
    handleDirectionChange(direction)
})

document.addEventListener('keyup', function(e){
    direction = null
    handleDirectionChange(direction)
})

       
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}