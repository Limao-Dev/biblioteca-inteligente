document.addEventListener("DOMContentLoaded", () => {
  const irPara = (secao, detalhes = {}) => {
    const parametros = new URLSearchParams({ secao, ...detalhes });
    window.location.href = `pagina.html?${parametros.toString()}`;
  };

  document.querySelectorAll("[data-acao]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const acao = botao.dataset.acao;
      if (acao === "inicio") {
        window.location.href = "index.html";
        return;
      }
      if (acao === "catalogo") {
        window.location.href = "catalogo.html";
        return;
      }
      if (acao === "agendar") {
        window.location.href = "agendar.html";
        return;
      }
      if (acao === "emprestimos") {
        window.location.href = "agendamentos.html";
        return;
      }
      irPara(acao);
    });
  });

  const generos = {
    "Romance": "romance",
    "Suspence": "suspense",
    "Fantasia": "fantasia",
    "Terror": "terror",
    "Biografia": "biografia",
    "Distopia": "distopia",
    "Negocio e economia": "negocios",
    "Desenvolvimento pessoal": "desenvolvimento",
    "Drama": "drama",
    "Ficção": "ficcao"
  };

  document.querySelectorAll(".categoria button").forEach((botao) => {
    botao.addEventListener("click", () => {
      const genero = generos[botao.textContent.trim()];
      window.location.href = `catalogo.html#${genero}`;
    });
  });

  document.querySelector(".opçao")?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const termo = document.querySelector("#busca").value.trim();
    irPara("busca", { termo });
  });

  document.querySelector(".explora")?.addEventListener("click", () => irPara("catalogo"));
  document.querySelector(".opçao2 .agendar")?.addEventListener("click", () => {
    window.location.href = "agendar.html";
  });

  const slides = document.querySelector(".slides");
  const quantidadeSlides = slides?.children.length || 0;
  let slideAtual = 0;

  const mudarSlide = (direcao) => {
    if (!slides || quantidadeSlides === 0) return;
    slideAtual = (slideAtual + direcao + quantidadeSlides) % quantidadeSlides;
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
  };

  document.querySelector(".anterior")?.addEventListener("click", () => mudarSlide(-1));
  document.querySelector(".proximo")?.addEventListener("click", () => mudarSlide(1));
});
