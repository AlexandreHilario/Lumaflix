function enviarWhatsapp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Me chamo ${nome}. Meu e-mail é ${email}.%0A%0A${mensagem}`;
  const numero = "5581984630413"; // <-- troque para o número real com DDD e país
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}