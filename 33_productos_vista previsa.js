// Get the modal_productos
var modal_productos = document.getElementById("mymodal_productos");

// Get the image and insert it inside the modal_productos - use its "alt" text as a caption
var img_productos = document.getElementById("polo01_productos");
var modal_productosimg_productos = document.getElementById("img01_productos");
var captionproductosText = document.getElementById("captionproductos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}


var img_productos = document.getElementById("polo01_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}

var img_productos = document.getElementById("polo02_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}

var img_productos = document.getElementById("polo03_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}

var img_productos = document.getElementById("polo04_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}

var img_productos = document.getElementById("polo05_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}
var img_productos = document.getElementById("polo06_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}
var img_productos = document.getElementById("polo07_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}
var img_productos = document.getElementById("body01_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}

var img_productos = document.getElementById("body02_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}
var img_productos = document.getElementById("body03_productos");
img_productos.onclick = function(){
  modal_productos.style.display = "block";
  modal_productosimg_productos.src = this.src;
  captionproductosText.innerHTML = this.alt;
}





// Get the <span_productos> element that closeproductos the modal_productos
var span_productos = document.getElementsByClassName("closeproductos")[0];

// When the user clicks on <span_productos> (x), closeproductos the modal_productos
span_productos.onclick = function() {
  modal_productos.style.display = "none";
} 



