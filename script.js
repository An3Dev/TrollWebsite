function onClick(button)
{
    //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    document.getElementById("game").style = "display: block";
    button.parentNode.removeChild(button);
}

function moveButton(button)
{
    button.style.position = "absolute";
    button.style.transitionDuration = "1s";
    var minX = button.offsetWidth;
    var minY = button.offsetHeight;
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight - 100;

    var xPos = Math.random() * (maxX - minX) + minX;   
    var yPos = Math.random() * (maxY - minY) + minY;
    
    button.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;

    button.style.left = xPos + "px";
    button.style.top = yPos + "px";
}