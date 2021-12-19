//process input
//update game state
//render
//loop

GameRoot.main = (function(){
    let gameState = {};

    function porcessInput(){

    }
    function updateGameState(){}
    
    function render(){
        console.log('rendering')
    }

    function gameLoop(){
        porcessInput()
        updateGameState()
        render()
        requestAnimationFrame(gameLoop)
    }

    requestAnimationFrame(gameLoop)

})();