GameRoot.graphics = (() => {
    let canvas = document.getElementById('canvas-main')

    let context = canvas.getContext('2d');
    
    function drawRectangle(){}

    return {
        drawRectangle,
    }
})();