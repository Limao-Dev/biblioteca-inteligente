var lista = document.querySelector("#lista-agendamentos");
var agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

if (agendamentos.length == 0) {
  lista.textContent = "Ainda não há agendamentos.";
} else {
  for (var i = 0; i < agendamentos.length; i++) {
    var agendamento = document.createElement("div");
    agendamento.className = "agendamento";
    agendamento.textContent =
      "Pessoa: " + agendamentos[i].nome +
      " | Livro: " + agendamentos[i].livro +
      " | Retirada: " + agendamentos[i].retirada +
      " | Data: " + agendamentos[i].data;
    lista.appendChild(agendamento);
  }
}
