console.log('JavaScript is working!')

function drawDiamond() {
    const canvas = document.getElementById('canvas');
    let color;
    if (canvas.getContext) {
        const x = 100;
        const y = 100;
        const w = 200;
        const h = 200;
        const ctx = canvas.getContext('2d');
        color = ('#0089ca');
        sketch(x, y, w, h, ctx, color);
    }
}

function sketch(x, y, w, h, ctx, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w / 2, y + 0.7 * h);
    ctx.lineTo(x + w / 2, y);
    ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + w / 2, y);
    ctx.lineTo(x + w / 2, y + 0.7 * h);
    ctx.lineTo(x + w, y);
    ctx.fill();

    // Upper left triangle
    ctx.beginPath();
    ctx.moveTo(x + w / 4, y - 0.3 * h);
    ctx.lineTo(x, y);
    ctx.lineTo(x + w / 2, y);
    ctx.fill();

    // centre inverted triangle
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + w / 4, y - 0.3 * h);
    ctx.lineTo(x + w / 2, y);
    ctx.lineTo(x + 0.75 * w, y - 0.3 * h);
    ctx.fill();

    //Upper left triangle.
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + 0.75 * w, y - 0.3 * h);
    ctx.lineTo(x + w / 2, y);
    ctx.lineTo(x + w, y);
    ctx.fill();
}