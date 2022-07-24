

var container = document.getElementById('container');
for(var i=0; i<16; i++){
    console.log("hi");
    var row = document.createElement("div");
    row.className = 'row';
    row.style.margin = "0px";
    for(var j = 0; j<16; j++){
        var square = document.createElement("div");
        square.className = 'square';
        square.style.width = "25px";
        square.style.height = "25px";
        square.style.background = "black";
        square.style.display = "inline-block";
        square.style.borderStyle = "solid";
        row.appendChild(square);
    }
    container.appendChild(row);
}



