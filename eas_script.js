function getGrid(){
    var container = document.getElementById('grid');
    for(var i=0; i<16; i++){
        var row = document.createElement("div");
        row.className = 'row';
        row.style.margin = "0px";
        for(var j = 0; j<16; j++){
            var square = document.createElement("div");
            square.className = 'square';
            square.style.width = "30px";
            square.style.height = "30px";
            square.style.display = "inline-block";
            

            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function makePalette(colors){
    var palette = document.getElementById('palette');
    colors.forEach(function(color){
        var colorSquare = document.createElement("button");
        colorSquare.style.width = "50px";
        colorSquare.style.height = "50px";
        colorSquare.style.display = "inline-block";
        colorSquare.dataColor = color;
        if(color == "#000000"){
            colorSquare.className = "black";
        }
        else if(color!="random"){
            colorSquare.style.background = color;
        }
        else{
            colorSquare.className = "rainbow";
            //colorSquare.style.background = "white";
        }
        palette.appendChild(colorSquare);
    })
}

const colors = ["#000000", "#FFFFFF", "#FF6663", "#FEB144", "#FDFD97", "#9EE09E", "#9EC1CF", "#CC99C9", "random"];



window.addEventListener('load', getGrid());
window.addEventListener('load', makePalette(colors));
