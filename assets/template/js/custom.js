$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

$(document).ready(function() {
  var owl = $('.home-depoimentos');
  owl.owlCarousel({
	margin: 30,
	autoplay:true,
	responsiveClass: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	nav: true,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	dots: false,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  650: {
		items: 2
	  },
	  1000: {
		items: 3
	  }
	}
  })
});

$(document).ready(function() {
  var owl = $('.home-parceiros');
  owl.owlCarousel({
	margin: 30,
	autoplay:true,
	responsiveClass: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	nav: true,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	dots: false,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  650: {
		items: 2
	  },
	  1000: {
		items: 4
	  }
	}
  })
});

$(document).ready(function() {
  var owl = $('.home-noticias');
  owl.owlCarousel({
	margin: 30,
	autoplay:true,
	responsiveClass: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	nav: true,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	dots: false,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  650: {
		items: 2
	  },
	  1000: {
		items: 3
	  }
	}
  })
});

$(document).ready(function() {
  var owl = $('.home-servicos');
  owl.owlCarousel({
	margin: 30,
	autoplay:true,
	responsiveClass: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	nav: true,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	dots: false,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  650: {
		items: 2
	  },
	  1000: {
		items: 3
	  }
	}
  })
});

$(document).ready(function() {
  var owl = $('.home-produtos');
  owl.owlCarousel({
	margin: 30,
	autoplay:true,
	responsiveClass: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	nav: true,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	dots: false,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  650: {
		items: 2
	  },
	  1000: {
		items: 4
	  }
	}
  })
});

$(document).ready(function() {
  var owl = $('.empresa-equipe');
  owl.owlCarousel({
	margin: 30,
	autoplay:true,
	responsiveClass: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	nav: true,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	dots: false,
	loop: true,
	responsive: {
	  0: {
		items: 1
	  },
	  650: {
		items: 2
	  },
	  1000: {
		items: 4
	  }
	}
  })
});


//fecha menu mobile se houve scroll ou click externo
$(function(){
	let container = $("#menu-accessibility");
	$(document).on("click", function(e){
	   $('.navbar-collapse').collapse('hide');
	   	// Fecha menu acessibilidade ao clicar fora
    	if ( container.hasClass( "open" ) ) {
			if (!container.is(e.target) && container.has(e.target).length === 0){
    	  		$("#menu-accessibility").removeClass("open");
    		}
		}
	});

	$(window).scroll(function(){
		$('.navbar-collapse').collapse('hide');
	});
});


// Verifica se há conteudo no Top Menu e devolve false/true
function visibleTop() {
	let menuSocialTopLeft = document.querySelector("#top_header .row .menu-social-top-left");
	let menuSocialTopRight = document.querySelector("#top_header .menu-social-top");
	let visible_top = true;
	if(menuSocialTopLeft.childNodes.length <= 1 && menuSocialTopRight.childNodes.length <= 1){
		visible_top = false;
	}
	return visible_top; // status utilizado em scrollFunction e 'Esdonde Top Menu';

}
visibleTop()
// Esconde o Top Menu e tira diferença da margem da tag abaixo
//window.addEventListener("load", () => {
function verifiVisibleTop(){
	let fixedTopHeader = document.querySelector(".fixed-top #top_header");
	let marginContentSection = document.querySelector(".margin-content-section");
	if(visibleTop() == false){
		fixedTopHeader.style ='display:none!important';
		marginContentSection.style = 'margin-top:'+ (marginContentSection.offsetTop - 57) + 'px';
	}
}
verifiVisibleTop();
//});


// Função para verificar se existe classe
//elemento.hasClass('classe1') ou elemento.hasClass('classe1 classe2')
/*
Node.prototype.hasClass = function(value) {
    var
        has = true,
        names = String(value).trim().split(/\s+/);

    for(var i = 0, len = names.length; i < len; i++){
        if(!(this.className.search(new RegExp('(?:\\s+|^)' + names[i] + '(?:\\s+|$)', 'i')) > -1)) {
            has = false;
            break;
        }
    }
    return has;
};
*/

// Função para verificar se existe classe 
/*
function hasClass(el, classe) {
    return !!(el.className.split(' ').indexOf(classe) + 1);
}
*/

//scrollFunction
window.addEventListener("load", () => {
	let navbar = document.querySelector(".navbar");
	let topHeader = document.querySelector("#top_header")
	let navbarImg = document.querySelector("nav img");

	window.addEventListener("scroll", () => {
		if(document.querySelector("body").contains(document.querySelector(".navbar"))){

		  	if (window.scrollY < 150) { // Show backToTopButton
		    	navbar.classList.remove('navbar-effect')
		    	navbarImg.style.width= "100%";
		  	}else {
				navbar.classList.add('navbar-effect')
				navbarImg.style.width= "60%";
		  	}
		}else{
			console.log('a classe existe sim')
		}

	  if(visibleTop() != false){
	  	if (window.scrollY < 150) { // Show top menu
			topHeader.style.display="block";	
	  	}else {
			topHeader.style.display = "none";
	  	}
	  }
	});
});

//removendo carrinho do menu mobile width <= 991px
//  if(document.querySelector("body").contains(document.querySelector(".navbar .navbar-nav.cart"))){
	//resizeFunction();
	//window.addEventListener("resize", resizeFunction);

if(document.querySelector("body").contains(document.querySelector(".navbar .navbar-nav.cart"))){
	resizeFunction();
	window.addEventListener("resize", resizeFunction);
	

}
function resizeFunction(){
	let cart = document.querySelector(".navbar .navbar-nav.cart");
	let navbarCollapse = document.querySelector(".navbar .navbar-collapse ul");
	let navbarCollapseCart = document.querySelector(".navbar .navbar-collapse ul.cart");
	let navbarContainer = document.querySelector("header .navbar .container");
	let navbarToggler = document.querySelector(".navbar-toggler")
	let width = window.innerWidth;
	if(width <= 991){
		if (navbarCollapseCart){
			navbarCollapse.removeChild(cart); 
			navbarContainer.insertBefore(cart, navbarToggler);
			cart.style.position = "relative";			
		}
		if(width <= 316){
			cart.style.right = "-7%";
		}else if (width <= 380) {
			cart.style.right = "-18%";			
		}else if (width <= 436) {
			cart.style.right = "-26%";			
		}else if (width <= 476) {
			cart.style.right = "-37%";			
		}else if (width <= 508) {
			cart.style.right = "-40%";			
		//}else if (width <= 600) {
		//	cart.style.right = "-55%";			
		}else if (width <= 767) {
			cart.style.right = "-45%";			
		}else{
			cart.style.right = "-54%";
		}
	}else{
		if (!navbarCollapseCart){
			navbarCollapse.appendChild(cart)
			cart.style.position = "unset";
			cart.style.right = "unset";
		}
	}
}

//SCROLL TOP
window.addEventListener("load", () => {
    const scrollAnima = document.querySelector('#back-to-top');
    function animaScroll(){
        if(window.scrollY > 600){
            scrollAnima.classList.add('show-item');
        }else{
            scrollAnima.classList.remove('show-item');
        }
    }

    //troca imagem
    let timeFirstImage = 4000,
    timeSecondImage = 1000,
    timeSetInterval = timeFirstImage + timeSecondImage;
    currentImageIndex = 0,
    images = document.querySelectorAll("#back-to-top .top div");
    max = images.length;

    function nextImage(){
        images[currentImageIndex].classList.remove("selected");
        currentImageIndex++
        if(currentImageIndex >= max){
            currentImageIndex = 0; 
        }
        images[currentImageIndex].classList.add("selected");
    }
    function startImageChange(){
        setInterval(() => {
            if(currentImageIndex == 0){
                setTimeout(() => {
                    nextImage()
                }, timeFirstImage)
            }else{
                setTimeout(() => {
                    nextImage()
                }, timeSecondImage)
            }
        }, timeSetInterval)
    }


// executa volta ao topo somente em desktop

    if(window.innerWidth > 767){
		startImageChange();
	    animaScroll();
        window.addEventListener('scroll', animaScroll);


        //scroll suave
	    const linkInterno = document.querySelector('#back-to-top a[href^="#"]');
	    linkInterno.addEventListener('click', function(e) {
	        e.preventDefault();
	        window.scroll({
	            top: 0,
	            left: 0,
	            behavior: 'smooth'
	        });
	    });
    }


})
//END SCROLL TOP

// ----------- FALSO PRELOADER
function falsePreloader(){
    let timer = 3000,
        boxImageSize = "120px",
        imageSize = "50px",
        boxLoadingBorderWidth = "13px",
        boxLoadingBorderColor = "rgba(0, 0, 0, 0.2) rgba(255, 255, 255) rgba(0, 5, 0, 0.5) rgb(255, 255, 255)",
        spinning = 30,
//        background = document.querySelector('a.nav-link.background-color-secundaria').style.background,
        img = document.querySelector('link[rel*="icon"]').href, // icone da página
        body = document.querySelector("body"),
        previousBodyAttribute = false;
    if(body.hasAttribute('style')){
        previousBodyAttribute = body.getAttribute('style');
    }
    body.setAttribute('style', 'overflow-y:scroll;position:fixed;width:100%;')
    let screenblock = document.getElementById("screen-block");
 	let image = document.createElement("img");
 		image.setAttribute("src", img);
 		image.setAttribute("alt","logo do preloader");
	let boxImage = document.createElement("div"),
		boxLoading = document.createElement("span");
 		boxImage.appendChild(image);
 		boxImage.appendChild(boxLoading);
 		screenblock.appendChild(boxImage);
	    body.appendChild(screenblock);

   	boxImage.style = `
   		position: relative;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
		display: inline-block;
		width:${boxImageSize};
		height:${boxImageSize};
    `;
   	boxLoading.style = `
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	border-width: ${boxLoadingBorderWidth};
    	border-style: solid;
    	border-color: ${boxLoadingBorderColor};
    	border-radius: 50%;
    	position: absolute;
        box-sizing:border-box;
    `;
	image.style = `
   		width:${imageSize};
    	position: relative;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
   	`;

	let rotate = 0;
	let intervalo = setInterval(function(){
		if(rotate== 360){rotate = 0}
		rotate = rotate + spinning;
		boxLoading.style.transform = "rotate("+rotate+"deg)";
	},100)

	//função de remoção dos elementos
	const removeScreenBlock = () => {
		clearInterval(intervalo);
        body.removeAttribute('style')
        if(previousBodyAttribute){
            body.setAttribute('style', previousBodyAttribute)
        }
       	screenblock.style.transition = '2s'
       	screenblock.style.opacity = '0';
       	setTimeout(function(){
    	   body.removeChild(screenblock);
       	}, 300)
	}
	//verificando se ja carregou
	window.addEventListener("load", function(){
    	const exists = document.body.contains(screenblock)
    	if(exists){
    		clearTimeout(remove_screen_block);
    		removeScreenBlock();
    	}
	});

	//executando função de remoção
    const remove_screen_block = setTimeout(function(){
    	removeScreenBlock();
    }, timer);
}
if(document.querySelector("body").contains(document.getElementById("screen-block"))){
	falsePreloader();	
	}

let infooo = sessionStorage.setItem('name', 'Treinaweb');
alert(infooo.name);