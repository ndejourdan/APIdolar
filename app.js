$(document).ready(function(){

$.ajax({
	url: 'http://mindicador.cl/api',
	method: 'GET'
}).then(function(data){
	console.log(data);
	$('#dolar').text(data.dolar.valor);
	$('#euro').text(data.euro.valor);
	$('#uf').text(data.uf.valor);
	$('#utm').text(data.utm.valor)
	var valdolar = data.dolar.valor;
	var valeuro = data.euro.valor;

$("#convert1").on('click', function(event){
	event.preventDefault();
	var clp = parseInt($('#clp').val());
	if ($('#clp').val() != ''){
		$('.dolar1').val('$ ' + clp * valdolar);
		$('.euro1').val('€ ' + clp * valeuro);
};
	

});

$("#convert2").on('click', function(event){
	event.preventDefault();
	var qdolar = parseInt($('#dolar2').val());
	if ($('#dolar2').val() != ''){
		$('.clp').val('$ ' + qdolar * valdolar);
};
	
});

});



})
