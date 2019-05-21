
$(function(){  
    
var paint = false; //paint or erase 
var paint_erase = "paint";

var canvas = document.getElementById("paint");//get canvas and context

var ctx = canvas.getContext("2d");//get context

var container = $("#container");//get container
    
var mouse = {x: 0,y:0};
    
//onload saved work from local storage
    if(localStorage.getItem("imgCanvas") != null){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img,0,0);
        }
        img.src = localStorage.getItem("imgCanvas");
    };
    
    
 
//Set drawing parameters
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.lineJoin = "round";
    

//click inside container
container.mousedown(function(e){
    paint = true;
    ctx.beginPath();
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    ctx.moveTo(mouse.x,mouse.y);
    
});
    
//move the mouse while holding down mouse key
container.mousemove(function(e){
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    if(paint==true){
        if(paint_erase=="paint"){
            //get color input
            ctx.strokeStyle = $("#paintColor").val();
        }else{
            //color white
            ctx.strokeStyle = "white";
        }
        ctx.lineTo(mouse.x,mouse.y);
        ctx.stroke();
    }
    
});

    
//mouse up we are not painting anymore
container.mouseup(function(){
    paint = false;
});
    
//reset button
$("#reset").click(function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    paint_erase = "paint";
    $("#erase").removeClass("eraseMode");
}); 
    

//click on save button
$("#save").click(function(){
    if(typeof(localStorage) != null){
    localStorage.setItem("imgCanvas",canvas.toDataURL());
      
}else{
   
};

});
    

//if we leave the container we are not painting anymore
container.mouseleave(function(){
    paint = false;
});

$("#erase").click(function(){
    if(paint_erase =="paint"){
        paint_erase = "erase";
    }else{
        paint_erase = "paint";
    }
    $(this).toggleClass("eraseMode");
});
    
    
//Color Input
    $("#paintColor").change(function(){
        $("#circle").css("background-color",
    $(this).val());
    })
    
//Change line width with slider
    $("#slider").slider({
    min:3,
    max:30,
    slide:function(event,ui){
        $("#circle").height(ui.value);
        $("#circle").width(ui.value);
        ctx.lineWidth = ui.value;
    }
}); 

    
    
    
    
    
});//end