let repeat = 1;

function draw(){
  document.querySelectorAll(".cell").forEach(cell => { 
    cell.style.setProperty("--size",((Math.floor(Math.random() * 10) + 1)));
    cell.style.setProperty("--angle",((Math.floor(Math.random() * 360) + 1))+ "deg");
    cell.style.setProperty("--radius",((Math.floor(Math.random() * 300) + 1)) + '%');
    cell.style.setProperty("--radius2",((Math.floor(Math.random() * 300) + 1)) + '%');
    cell.style.setProperty("--radius3",((Math.floor(Math.random() * 300) + 1)) + '%');
    cell.style.setProperty("--radius4",((Math.floor(Math.random() * 300) + 1)) + '%');
  });
    
};

draw();

if (repeat == 1){
  setInterval(function(){ draw(); }, 4000);
}