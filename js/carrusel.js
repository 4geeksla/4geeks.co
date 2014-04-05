function carrusel(id)
{
	document.getElementById("inmueble").className= "thumb";
	document.getElementById("cmo").className= "thumb";
	document.getElementById("catalog").className= "thumb";
	document.getElementById("quintodia").className= "thumb";
	document.getElementById("frontera").className= "thumb";
	if(id == "inmueble"){
		document.getElementById("geeky-row-carrusel").innerHTML = '<div class="col-md-offset-1 col-sm-3"><img class="img-responsive" src="./images/carousel/todoinmueble.png" style="margin-right:auto; margin-left:auto"/><p class="carousel-p">Una plataforma online que unifica el mundo inmobiliario enlazando a compradores, vendedores, corredores y constructoras, acelerando así la oferta y la demanda de inmuebles.</p> </div> <div class="col-sm-8" style="position:relative; "><img class="img-responsive" src="./images/carousel/screenshots/todoinmueble.png"/></div>';
		document.getElementById("inmueble").className= "thumb active";
	 }
	else if(id == "cmo"){
		document.getElementById("geeky-row-carrusel").innerHTML = '<div class="col-md-offset-1 col-sm-3"><img class="img-responsive" src="./images/carousel/cmo.png" style="margin-right:auto; margin-left:auto"/><p class="carousel-p"> El marketplace exclusivo de City Market que ofrece la búsqueda avanzada de productos y ofertas de cada tienda, dando a los clientes la confianza de los locales de City Market. </p></div><div class="col-sm-8" style="position:relative; "><img class="img-responsive" src="./images/carousel/screenshots/cmo.png"/></div> '
		document.getElementById("cmo").className= "thumb active";
	}
	else if(id == "catalog"){
		document.getElementById("geeky-row-carrusel").innerHTML = '<div class="col-md-offset-1 col-sm-3"><img class="img-responsive" src="./images/carousel/catalog.png"/><p class="carousel-p">Aplicación en Android para impulso y gestión de ventas al mayor con catálogo de productos y análisis de ventas por usuario. </p></div><div class="col-sm-8" style="position:relative; "><img class="img-responsive" src="./images/carousel/screenshots/catalog.png" /></div>'
		document.getElementById("catalog").className= "thumb active";
	}
	else if(id == "quintodia"){
		document.getElementById("geeky-row-carrusel").innerHTML = '<div class="col-md-offset-1 col-sm-3"><img class="img-responsive" src="./images/carousel/quintodia.png" style="margin-right:auto; margin-left:auto"/><p class="carousel-p">Portal online de uno de los semanarios más importantes de Venezuela, desarrollado para ajustarse a sus necesidades de publicación y anuncios. </p></div><div class="col-sm-8" style="position:relative; "><img class="img-responsive" src="./images/carousel/screenshots/quintodia.png"/></div>'
		document.getElementById("quintodia").className= "thumb active";
	}
	else if(id == "frontera"){
		document.getElementById("geeky-row-carrusel").innerHTML = '<div class="col-md-offset-1 col-sm-3"><img class="img-responsive" src="./images/carousel/fronteraspecial.png" style="margin-right:auto; margin-left:auto"/><p class="carousel-p"> Creativo diseño web para promocionar la nueva cosecha de vinos Frontera Specialties de la vinatería Concha y Toro. </p></div><div class="col-sm-8" style="position:relative; "><img class="img-responsive" src="./images/carousel/screenshots/frontera.png" /></div>';
		document.getElementById("frontera").className= "thumb active";
	}
}