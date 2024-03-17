// Get the modal_promociones
var modal_promociones = document.getElementById("myModal_promociones");

// Get the image and insert it inside the modal_promociones - use its "alt" text as a caption_promociones
var img_promociones = document.getElementById("01_promociones");
var modal_promocionesimg_promociones = document.getElementById("img01_promociones");
var caption_promocionesText = document.getElementById("caption_promociones");
img_promociones.onclick = function(){
  modal_promociones.style.display = "block";
  modal_promocionesimg_promociones.src = this.src;
  caption_promocionesText.innerHTML = this.alt;
}


var img_promociones = document.getElementById("01_promociones");
img_promociones.onclick = function(){
  modal_promociones.style.display = "block";
  modal_promocionesimg_promociones.src = this.src;
  caption_promocionesText.innerHTML = this.alt;
}

var img_promociones = document.getElementById("02_promociones");
img_promociones.onclick = function(){
  modal_promociones.style.display = "block";
  modal_promocionesimg_promociones.src = this.src;
  caption_promocionesText.innerHTML = this.alt;
}

var img_promociones = document.getElementById("03_promociones");
img_promociones.onclick = function(){
  modal_promociones.style.display = "block";
  modal_promocionesimg_promociones.src = this.src;
  caption_promocionesText.innerHTML = this.alt;
}

var img_promociones = document.getElementById("04_promociones");
img_promociones.onclick = function(){
  modal_promociones.style.display = "block";
  modal_promocionesimg_promociones.src = this.src;
  caption_promocionesText.innerHTML = this.alt;
}





// Get the <span_promociones> element that closes the modal_promociones
var span_promociones = document.getElementsByClassName("close")[0];

// When the user clicks on <span_promociones> (x), close the modal_promociones
span_promociones.onclick = function() {
  modal_promociones.style.display = "none";
} 



