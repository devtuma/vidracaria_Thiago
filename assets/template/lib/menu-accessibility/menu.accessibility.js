/* Style Changer */

$(document).ready(function(){
	$('#menu-accessibility .chBut').click(function(){
	    $('#menu-accessibility').toggleClass("open");
	});
	
});

function fonte(e){
	var elemento = $(".acessibilidade");
	var fonte = elemento.css('font-size');
	if (e == 'Aumentar') {
		elemento.css("fontSize", parseInt(fonte) + 1);
	} else if('Dimunuir'){
		elemento.css("fontSize", parseInt(fonte) - 1);
	}
};
