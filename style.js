const carros = [
  {
    nome: "Toyota Corolla",
    ano: "2022",
    preco: "R$ 139.990",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    nome: "Jeep Compass",
    ano: "2023",
    preco: "R$ 165.000",
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
  },
  {
    nome: "BMW 320i",
    ano: "2021",
    preco: "R$ 199.000",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
  }
];

const lista = document.getElementById("lista-carros");

carros.forEach(carro => {
  lista.innerHTML += `
    <div class="card">
      <img src="${carro.img}">
      <div class="card-content">
        <h3>${carro.nome}</h3>
        <p>Ano: ${carro.ano}</p>
        <p>${carro.preco}</p>
        <button onclick="whatsapp('${carro.nome}')">Comprar</button>
      </div>
    </div>
  `;
});

function whatsapp(nome) {
  const numero = "558699445616";
  const mensagem = `Olá, tenho interesse no ${nome}`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
}