document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  const secao = parametros.get("secao") || "inicio";
  const titulo = document.querySelector("#titulo");
  const descricao = document.querySelector("#descricao");
  const detalhe = document.querySelector("#detalhe");

  const paginas = {
    catalogo: ["Catálogo de obras", "Explore as categorias disponíveis na biblioteca escolar.", "Selecione uma categoria na página inicial para ver mais detalhes."],
    agendar: ["Agendar empréstimo", "Para solicitar um empréstimo, escolha uma obra do catálogo e informe seus dados de aluno ou professor.", "A retirada pode ser feita no balcão ou em um armário inteligente, conforme disponibilidade."],
    emprestimos: ["Meus empréstimos", "A área de acompanhamento de empréstimos ainda não está disponível neste protótipo.", "Em breve será possível consultar prazos e solicitar renovações por aqui."],
    regras: ["Regras da biblioteca", "Consulte a equipe da biblioteca para conhecer as regras e os prazos de empréstimo.", "As orientações completas serão disponibilizadas nesta página."],
    categoria: [`Categoria: ${parametros.get("nome") || ""}`, "Você escolheu uma categoria do catálogo.", "A lista de obras desta categoria será adicionada quando o catálogo estiver disponível."],
    busca: ["Busca no catálogo", parametros.get("termo") ? `Sua busca: “${parametros.get("termo")}”.` : "Nenhum termo foi informado.", "O catálogo de obras ainda não está disponível para mostrar resultados."],
    slide: ["Destaques da biblioteca", "Você acessou os destaques do carrossel.", "Imagens e conteúdos dos destaques serão adicionados em breve."],
    inicio: ["Smart Library", "Sua Biblioteca Escolar: inteligente, rápida e organizada.", "Use os links para voltar ao início ou explorar as categorias."]
  };

  const conteudo = paginas[secao] || paginas.inicio;
  titulo.textContent = conteudo[0];
  descricao.textContent = conteudo[1];
  detalhe.textContent = conteudo[2];
  document.title = `${conteudo[0]} | Smart Library`;
});
