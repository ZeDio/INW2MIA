//npx json-server --watch db.json
const url = 'http://localhost:3000/produtos'
fetch(url)
    .then((req) => req.json())
    .then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
    const htmlProdutos = produtos.map(
        (produto) =>`
        <div class="oi">
        <img src=${produto.img} width=200 height=200><br>
        <div class="o">
        <h2>${produto.descricao}</h2>
        <h4>Valor : ${produto.valor}</h4>
        </div>
        </div>`
    );
    document.getElementById('app').innerHTML = htmlProdutos;
}