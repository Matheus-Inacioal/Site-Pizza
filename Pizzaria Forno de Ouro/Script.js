let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

// Cria um array para armazenar os itens do carrinho
let carrinho = [];

// Cria uma função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  // Cria um objeto com o nome e o preço do item
  let item = { nome: nome, preco: preco };
  // Adiciona o objeto ao array do carrinho
  carrinho.push(item);
  // Exibe uma mensagem para o usuário
  alert("Item adicionado ao carrinho!");
}
