const cardapio = {
    "Cervejas": [
        { nome: "Cerveja Lata", preco: "R$ 6,00", desc: "Gelada 350ml", img: "img/cerveja.jpg" }
    ],
    "Bebidas Quentes": [
        { nome: "Café Expresso", preco: "R$ 5,00", desc: "Forte e aromático", img: "img/cafe.jpg" }
    ],
    "Drinks": [
        { nome: "Gin Tônica", preco: "R$ 20,00", desc: "Com especiarias", img: "img/gin.jpg" }
    ],
    "Salgadinhos": [
        { nome: "Coxinha", preco: "R$ 7,00", desc: "Frango com requeijão", img: "img/coxinha.jpg" }
    ],
    "Sucos e Doces": [
        { nome: "Suco Laranja", preco: "R$ 9,00", desc: "Natural 500ml", img: "img/suco.jpg" },
        { nome: "Pudim", preco: "R$ 8,00", desc: "Fatia generosa", img: "img/pudim.jpg" }
    ]
};

function carregarProdutos() {
    const container = document.getElementById('menu-container');
    
    for (let categoria in cardapio) {
        const section = document.createElement('section');
        section.innerHTML = `<h2 class="categoria-titulo">${categoria}</h2>`;
        
        cardapio[categoria].forEach(item => {
            section.innerHTML += `
                <div class="produto-card">
                    <img src="${item.img}" class="produto-img" alt="${item.nome}">
                    <div class="produto-info">
                        <p class="produto-nome">${item.nome}</p>
                        <p class="produto-descricao">${item.desc}</p>
                        <p class="produto-preco">${item.preco}</p>
                    </div>
                </div>
            `;
        });
        container.appendChild(section);
    }
}

document.addEventListener('DOMContentLoaded', carregarProdutos);