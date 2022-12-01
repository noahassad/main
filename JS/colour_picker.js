var colorCanvas = document.getElementById('colour_canvas');
var ColorCtx = colorCanvas.getContext('2d');  // This create a 2D context for the canvas

var sliderCanvas = document.getElementById('colour_slider');
var sliderCtx = sliderCanvas.getContext('2d');  // This create a 2D context for the canvas

var previewCanvas = document.getElementById('preview_box');
var previewCtx = previewCanvas.getContext('2d');  // This create a 2D context for the canvas

var redBox = document.getElementById('rgbr');
var greenBox = document.getElementById('rgbg');
var blueBox = document.getElementById('rgbb');

// Create a horizontal gradient
function drawColorCanvas(colour) {
    var color = colour
    let gradientH = ColorCtx.createLinearGradient(0, 0, ColorCtx.canvas.width, 0);
    gradientH.addColorStop(0, '#fff');
    gradientH.addColorStop(1, color);
    ColorCtx.fillStyle = gradientH;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

    // Create a Vertical Gradient(white to black)
    let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
    gradientV.addColorStop(0, 'rgba(0,0,0,0)');
    gradientV.addColorStop(1, '#000');
    ColorCtx.fillStyle = gradientV;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height); 
}

function drawSliderCanvas() {
    // Create a Vertical Gradient(white to black)
    let gradientH = sliderCtx.createLinearGradient(0, 0, sliderCtx.canvas.width, 0);
    gradientH.addColorStop(0, '#d10000');
    gradientH.addColorStop(0.17, '#ff6622');
    gradientH.addColorStop(0.34, '#ffda21');
    gradientH.addColorStop(0.51, '#33dd00');
    gradientH.addColorStop(0.68, '#1133cc');
    gradientH.addColorStop(0.85, '#220066');
    gradientH.addColorStop(1, '#330044');
    sliderCtx.fillStyle = gradientH;
    sliderCtx.fillRect(0, 0, sliderCtx.canvas.width, 
    sliderCtx.canvas.height); 

    let gradientV = sliderCtx.createLinearGradient(0, 0, 0, 300);
    gradientV.addColorStop(0, 'rgba(0,0,0,0)');
    gradientV.addColorStop(1, '#000');
    sliderCtx.fillStyle = gradientV;
    sliderCtx.fillRect(0, 0, sliderCtx.canvas.width, sliderCtx.canvas.height); 
}

function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function drawEllipse(x1, y1, x2, y2) {

    var radiusX = (x2 - x1) * 0.5,   /// radius for x based on input
        radiusY = (y2 - y1) * 0.5,   /// radius for y based on input
        centerX = x1 + radiusX,      /// calc center
        centerY = y1 + radiusY,
        step = 0.01,                 /// resolution of ellipse
        a = step,                    /// counter
        pi2 = Math.PI * 2 - step;    /// end angle
    
    /// start a new path
    ColorCtx.beginPath();

    /// set start point at angle 0
    ColorCtx.moveTo(centerX + radiusX * Math.cos(0),
               centerY + radiusY * Math.sin(0));

    /// create the ellipse    
    for(; a < pi2; a += step) {
        ColorCtx.lineTo(centerX + radiusX * Math.cos(a),
                   centerY + radiusY * Math.sin(a));
    }
    
    /// close it and stroke it for demo
    ColorCtx.closePath();
    ColorCtx.strokeStyle = '#000';
    ColorCtx.stroke();
}

canvasBackground = "#0000ff"
drawColorCanvas(canvasBackground)
drawSliderCanvas()
diameter=10

colorCanvas.addEventListener('click',function(event){
    drawColorCanvas(canvasBackground)
    let x = event.clientX;  // Get X coordinate
    let y = event.clientY;  // Get Y coordinate
    let xOffset = getOffset(colorCanvas).left - window.scrollX
    let yOffset = getOffset(colorCanvas).top - window.scrollY
    pixel = ColorCtx.getImageData(x-xOffset,y-yOffset,1,1)['data'];   // Read pixel Color
    rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    drawEllipse(x-xOffset-(diameter/2), y-yOffset-(diameter/2), x-xOffset+(diameter/2), y-yOffset+(diameter/2))
    previewCtx.fillStyle = rgb;
    previewCtx.fillRect(0, 0,previewCtx.canvas.width,previewCtx.canvas.height);
    redBox.setAttribute('value', pixel[0])
    greenBox.setAttribute('value', pixel[1])
    blueBox.setAttribute('value', pixel[2])
    //console.log(x + " " + y)
    //console.log(window.scrollX + " " + window.scrollY);
});

sliderCanvas.addEventListener('click',function(event){
    drawSliderCanvas()
    let xSlider = event.clientX + window.scrollX;  // Get X coordinate
    let ySlider = event.clientY + window.scrollY;  // Get Y coordinate
    let xOffsetSlider = getOffset(sliderCanvas).left
    let yOffsetSlider = getOffset(sliderCanvas).top
    pixel = sliderCtx.getImageData(xSlider-xOffsetSlider,ySlider-yOffsetSlider,1,1)['data'];   // Read pixel Color
    rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    drawColorCanvas(rgb)
    canvasBackground = rgb
});

/* I based my work off of a tutorial and snippets of code regarding how to get the canvas working
   They will be cited below

   Colour Picker Tutorial: 

   B. Rana, “Create an HTML color picker using JavaScript,” DEV Community 👩‍💻👨‍💻, 04-Sep-2021. [Online]. Available: 
   https://dev.to/bhaskar95460442/create-an-html-color-picker-using-javascript-3obm. [Accessed: 21-Nov-2022]. 

   I am not sure how to IEEE cite stack overflow threads so I will include links to them here
   Finding offset of canvas to work on different screen sizes

   https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

   simple 2d graphics and drawing an elipse on a canvas

   https://stackoverflow.com/questions/21594756/drawing-circle-ellipse-on-html5-canvas-using-mouse-events
   
   
*/
