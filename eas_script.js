//define global variables
var length = 20;
const colors = ["#000000", "#FFFFFF", "#FF6663", "#FEB144", "#FDFD97", "#9EE09E", "#9EC1CF", "#CC99C9", "random"];
var color = "#000000";

//create grid with dynamic length
function getGrid(length){
    var container = document.getElementById('grid');
    width = (480/length) + "px";
    for(var i=0; i<length; i++){
        var row = document.createElement("div");
        row.className = 'row';
        row.style.height = width;
        //row.style.margin = "0px";
        row.style.display = "inline-block";
        for(var j = 0; j<length; j++){
            var square = document.createElement("div");
            square.className = 'square';
            square.style.width = width;
            square.style.height = width;
            square.style.display = "inline-block";
            
            row.appendChild(square);
            square.addEventListener('mouseover', function() {
                draw(this);
            });
        }
        container.appendChild(row);
    }

    //resetGrid();
}

//create colour palette
function makePalette(colors){
    var palette = document.getElementById('palette');
    colors.forEach(function(color){
        var colorSquare = document.createElement("button");
        colorSquare.style.width = "50px";
        colorSquare.style.height = "50px";
        colorSquare.style.display = "inline-block";
        colorSquare.dataColor = color;
        colorSquare.classList.add("colorSquare");
        
        if(color == "#000000"){
            colorSquare.classList.add("black");
        }
        else if(color!="random"){
            colorSquare.style.background = color;
        }
        else{
            colorSquare.classList.add("rainbow");
        }
        palette.appendChild(colorSquare);
    })
}

//reset grid
function resetGrid(){
    var gridSquares = document.getElementsByClassName('square');
    //add draw function to each square
    for (var i = 0; i < gridSquares.length; i++){
        gridSquares[i].addEventListener('mouseover', function() {
            draw(this);
        });
    }
}

function clearGrid(){
    var grid = document.getElementById('grid');
    var child = grid.lastElementChild;
    while (child){
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}
//choose size
// function chooseSize(){
//     var value = document.getElementById
// }

//drawing function 
function draw(element){
    if (color=="rainbow"){
        //choose random
    }
    else
        element.style.background = color;
}

//clear function
function clear(){
    var gridSquares = document.getElementsByClassName('square');
    for (var i = 0; i < gridSquares.length; i++){
        gridSquares[i].style.background = "#d3d1d1";
    }
}
//load palette and grid
window.addEventListener('load', getGrid(length));
window.addEventListener('load', makePalette(colors));

//clear
var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', clear);

//erase
var eraseBtn = document.getElementById("eraseBtn");
eraseBtn.addEventListener('click', function(){
    color = "#d3d1d1";
})

//choose colour
var colorPalette = document.getElementsByClassName('colorSquare');
for(var i = 0; i < colorPalette.length; i++){
    colorPalette[i].addEventListener('click', function(){
        color = this.dataColor;
    })
}

//choose length
var sizeRange = document.getElementById('sizeRange');
sizeRange.addEventListener('click', function(){
    var value = this.value;
    length = value;
    clearGrid();
    getGrid(length);
});