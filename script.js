function clock() {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Setup canvas 
    ctx.save();  //save the default state '
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250);  //put 0,0 in the middle
    ctx.rotate(-Math.PI /2)  // rotate clock -90 degree

    // set default style 
    ctx.strokeStyle ='red';
    ctx.fillStyle ='yellow';
    ctx.linewidth = 5;
    ctx.lineCap = 'round';

  // Draw clock face/border 
  ctx.save();
  ctx.beginPath();
  ctx.linewidth = 5;
  ctx.strokeStyle = 'blue';
  ctx.arc(0, 0, 142, 0, Math.PI * 2,true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw clock hand 
  ctx.save();
  for(let i = 0; i < 12 ; i++) {
    ctx.beginPath();

    ctx.rotate(Math.PI / 6);
   ctx.moveTo(100, 0);
   ctx.lineTo(120, 0);
   ctx.stroke();

  }
   
  ctx.restore();
  // Draw minute hand 
  ctx.save();
  ctx.linewidth = 4;
  for(let i = 0; i < 60 ; i++) {
    if(i % 5!==0) {
      ctx.beginPath();
     ctx.moveTo(117, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
 }
   
  ctx.restore();

  //Get Current Time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hr}: ${min}:${sec}`);

  // draw hour hand 
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI/360) * min + (Math.PI/21600) * sec);
    ctx.strokeStyle = 'green';
    ctx.linewidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(80,0);
    ctx.stroke();
    

  ctx.restore();

   // draw minute hand 
   ctx.save();
   ctx.rotate(
     (Math.PI / 30) * min + (Math.PI/1800) * sec);
     ctx.strokeStyle = 'green';
     ctx.linewidth = 10;
     ctx.beginPath();
     ctx.moveTo(-28,0);
     ctx.lineTo(112,0);
     ctx.stroke();
     
 
   ctx.restore();

   // draw second hand 
   ctx.save();
   ctx.rotate((sec * Math.PI) / 30);
     ctx.strokeStyle = '#FF7F50';
     ctx.fillStyle ='#FF7F50';
     ctx.linewidth = 6;
     ctx.beginPath();
     ctx.moveTo(-30,0);
     ctx.lineTo(100,0);
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
     ctx.fill();
     
 
   ctx.restore();
 

  ctx.restore(); //restore default state 

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);