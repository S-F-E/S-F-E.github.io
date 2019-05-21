
$(function(){
    $("#slider").slider({
        min:3,
        max:30,
        slide:function(event,ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
        }
    });   
    
    
    
    
var canvas =document.getElementById("paint");
var context = canvas.getContext('2d');
    
    //draw line
    //Declare new path
    context.beginPath();
    
    //set line width
    context.lineWidth = 40;
    context.strokeStyle = '#3fd137';
    
    //set cap to the line(round,butt,square)
    context.lineCap = "round";
    //Line join ( bevel,round,miter)
    context.lineJoin = "round";
    
    
    //positioned context point
    context.moveTo(50,50);
    //draw a straight line from starting point to new position.
    context.lineTo(200,200);
    
    //draw another line
    context.lineTo(400,100);
    
    context.stroke();
    
});