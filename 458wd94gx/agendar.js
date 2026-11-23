var formulario = document.querySelector("#formulario-agendamento");
var mensagem = document.querySelector(".mensagem");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  var nome = document.querySelector("#nome").value;
  var livro = document.querySelector("#livro").value;
  var retirada = document.querySelector("#retirada").value;
  var data = document.querySelector("#data").value;

  var agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
  agendamentos.push({ nome: nome, livro: livro, retirada: retirada, data: data });
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  mensagem.textContent = "Agendamento solicitado para " + nome + ": " + livro + ". Retirada no " + retirada + " em " + data + ".";
  formulario.reset();
});
