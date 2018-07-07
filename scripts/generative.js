	const par_curve = (y) => (x) => (t_in) => (t_fin) => (dt) => (color) =>
		{
		
		ctx.shadowColor = color;
		ctx.strokeStyle = color;
		ctx.fillStyle = color;
		
		
		if(t_in >= t_fin)
		{
		ctx.arc(x_o + x(t_in), y_o - y(t_in),2,0,2*Math.PI); //terminal points//
		ctx.fill();
		}
		else
		{
		ctx.beginPath();
		ctx.moveTo(x_o + x(t_in), y_o - y(t_in));
		ctx.lineTo(x_o + x(t_in + dt), y_o - y(t_in + dt));
		ctx.stroke();
		
		return par_curve(y)(x)(t_in + dt)(t_fin)(dt)(color);
		}
		}