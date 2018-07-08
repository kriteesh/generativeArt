let canvas  = document.querySelector("canvas");
let w = canvas.width = document.getElementsByClassName("drawing")[0].clientWidth;
let h = canvas.height = document.getElementsByClassName("drawing")[0].clientHeight;
let ctx = canvas.getContext("2d");
			
let x_o = w/2;
let y_o = h/2;


let setting = (x,y) =>{
		ctx.fillStyle = "black";
		ctx.fillRect(0,0,w,h);
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(x,y,10,0,2*Math.PI);
		ctx.fill();
		}

let x = x_o;
let y = y_o;
let dx = 1.1;
let dy = 2.2;
			
let animate =() =>{
	ctx.clearRect(0,0,w,h);
	requestAnimationFrame(animate);			

	if((x>=w-10)||(x-10<=0)) dx = -dx;
	if((y>=h-10)||(y-10<=0)) dy = -dy;
				
	x = x + dx;
	y = y + dy;
					
	setting(x,y);
					

}
			
animate();