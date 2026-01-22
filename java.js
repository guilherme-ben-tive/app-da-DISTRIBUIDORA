<script>
    const cardapio = {
        "Whiskys": [
            { 
                nome: "Red Label", 
                preco: "R$ 120,00", 
                desc: "Whisky escocês Johnnie Walker, ideal para drinks ou puro com gelo.", 
                img: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=400" 
            },
            { 
                nome: "Jack Daniel's", 
                preco: "R$ 150,00", 
                desc: "O clássico Tennessee Whiskey com notas de baunilha e carvalho.", 
                img: "https://images.unsplash.com/photo-1527281473222-793929902640?q=80&w=400" 
            },
            { 
                nome: "Jack Daniel's Maçã", 
                preco: "R$ 160,00", 
                desc: "Jack Apple: a suavidade do Jack com o frescor da maçã verde.", 
                img: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?q=80&w=400" 
            },
            { 
                nome: "Jack Fire", 
                preco: "R$ 160,00", 
                desc: "Licor de whisky com canela picante e intensa.", 
                img: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=400" 
            },
            { 
                nome: "Passport Scotch", 
                preco: "R$ 75,00", 
                desc: "Whisky escocês suave, com notas frutadas e leve toque de mel.", 
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400" 
            }
        ],
        "Cervejas": [
            { 
                nome: "Cerveja Lata", 
                preco: "R$ 6,00", 
                desc: "Lata 350ml trincando de gelada.", 
                img: "https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?q=80&w=400" 
            }
        ],
        "Salgadinhos": [
            { 
                nome: "Coxinha de Frango", 
                preco: "R$ 7,00", 
                desc: "Massa crocante por fora e recheio suculento com requeijão.", 
                img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=400" 
            }
        ],
        "Sucos e Doces": [
            { 
                nome: "Suco de Laranja", 
                preco: "R$ 10,00", 
                desc: "Suco 100% natural feito na hora (500ml).", 
                img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400" 
            },
            { 
                nome: "Brigadeiro Gourmet", 
                preco: "R$ 5,00", 
                desc: "Feito com chocolate nobre e granulado de verdade.", 
                img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=400" 
            }
        ]
    };

    function carregarCardapio() {
        const container = document.getElementById('menu-container');
        container.innerHTML = ""; // Limpa para não duplicar

        for (let categoria in cardapio) {
            const titulo = document.createElement('h2');
            titulo.className = 'categoria-titulo';
            titulo.innerText = categoria;
            container.appendChild(titulo);

            cardapio[categoria].forEach(item => {
                const html = `
                    <div class="produto-card">
                        <img src="${item.img}" class="produto-img" alt="${item.nome}">
                        <div class="produto-info">
                            <p class="produto-nome">${item.nome}</p>
                            <p class="produto-descricao">${item.desc}</p>
                            <p class="produto-preco">${item.preco}</p>
                        </div>
                    </div>
                `;
                container.innerHTML += html;
            });
        }
    }
    window.onload = carregarCardapio;
</script>