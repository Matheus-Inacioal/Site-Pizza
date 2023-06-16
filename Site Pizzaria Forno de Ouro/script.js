// Implementar funcionalidade do botão "Adicionar ao carrinho"
var addButtons = document.querySelectorAll('.menu-item button');

for (var i = 0; i < addButtons.length; i++) {
addButtons[i].addEventListener('click', function() {
alert('Pizza adicionada ao carrinho!');
});
}