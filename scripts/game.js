//process input
//update game state
//render
//loop

GameRoot.main = (() => {
    let myRectangle = {
        position: {x: 100, y: 50},
        fill: 'blue',
        stroke: 'black',
        width: 200,
        height: 100,
    }

    function processInput(){

    }
    function updateGameState(){
        myRectangle.position.x += 5;
    }
    
    function render(){
        GameRoot.graphics.clear()
        const {position, fill, stroke, width, height} = myRectangle
        GameRoot.graphics.drawRectangle(position, width, height, stroke, fill)
    }

    function gameLoop(){
        processInput()
        updateGameState()
        render()
        requestAnimationFrame(gameLoop)
    }

    requestAnimationFrame(gameLoop)

})();