console.log('JavaScript is working!')

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var x=100; var y=100;
        var w=200; var h=200;
        var ctx = canvas.getContext('2d');
        colors=['#E3170D','#9D1309','#F22C1E'];
        sketch(x,y,w,h,ctx,colors);
    }
}

function sketch(x,y,w,h,ctx,colors){
    ctx.fillStyle=colors[0];
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+w/2,y+0.7*h);
    ctx.lineTo(x+w/2,y);
    ctx.fill();

    ctx.fillStyle=colors[1];
    ctx.beginPath();
    ctx.moveTo(x+w/2, y);
    ctx.lineTo(x+w/2,y+0.7*h);
    ctx.lineTo(x+w,y);
    ctx.fill();

    // Upper left triangle
    ctx.beginPath();
    ctx.moveTo(x+w/4,y-0.3*h);
    ctx.lineTo(x,y);
    ctx.lineTo(x+w/2,y);
    ctx.fill();

    // centre inverted triangle
    ctx.fillStyle=colors[2];
    ctx.beginPath();
    ctx.moveTo(x+w/4,y-0.3*h);
    ctx.lineTo(x+w/2,y);
    ctx.lineTo(x+0.75*w,y-0.3*h);
    ctx.fill();

    //Upper left triangle.
    ctx.fillStyle=colors[0];
    ctx.beginPath();
    ctx.moveTo(x+0.75*w,y-0.3*h);
    ctx.lineTo(x+w/2,y);
    ctx.lineTo(x+w,y);
    ctx.fill();

}

