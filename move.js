function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys (left, bottom, DirectionChange) {
        let direction = null;
        let x = 100;
        let y = 250;
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        function moveCharacter() {
            if (direction === 'north') {
            y = y + 1
        }
        
            if (direction === 'east') {
            x = x + 1
        }
        
            if (direction === 'south') {
            y = y - 1
        }
        
            if (direction === 'west') {
            x = x - 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;
        
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            DirectionChange(direction)
        })
        
        document.addEventListener ('keyup', function (e) {
            direction = null
            DirectionChange(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}