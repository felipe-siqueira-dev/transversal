$(".nav li > a").click(function() {
	// assumo que esse código parece pouco otimizado, aceito sugestões
	$parent_list_item = $(this).parent("li");
	// Remove todas as classes ativas de todos os itens dessa lista, para não ter 2 ativos ao mesmo tempo no mesmo dropdown. Mas ignora o item atual para checarmos depois de precisamos minimizar-lo
$parent_list_item.parent("ul").find(".active").not($parent_list_item).removeClass("active");
	// adiciona classe ativa para o <li> (pai) do <a> clicado, se ele não for o item que já está ativo
	if (!$parent_list_item.hasClass("active")) {
		$parent_list_item.addClass("active");
	}else{
		// Se for o que já está ativo remove a classe
		$parent_list_item.removeClass("active");
	}
});
