canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color="red"
width_of_line = 1;
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color = document.getElementById("color").value;
        width_of_line = document.getElementById("widthoftheline").value;
 last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
 last_position_of_y=e.touches[0].clientY-canvas.offsetTop

}.t
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;   
            ctx.moveTo(last_position_of_x,last_position_of_y)
            ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
                ctx.stroke()
        
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }



function cleararea(){
ctx.claerRect(0,0,canvas.width,canvas.height)
}
