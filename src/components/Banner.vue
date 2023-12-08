<template>
  <header class="banner">
    <div class="apresentacao">
      <img src="../assets/imagens/logo.svg" alt="Logo do Cookin' Up" class="logo">

      <p class="cabecalho-lg frase-cabecalho">
        <span class="texto-verde">Um banquete de ideias para</span>
        despertar o chef que há em você!
      </p>

      <p class="subtitulo-lg">
        Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
      </p>
    </div>

    <img src="../assets/imagens/foto-banner.png"
      alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e está apoiando um celular entre seu rosto e ombro."
      class="foto-banner">
  </header>
</template>

<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para o componente de banner */
.banner {
  padding: 4rem 7.5rem;
  /* Preenchimento interno do banner */
  color: var(--creme);
  /* Cor do texto */
  display: flex;
  /* Layout flexível */
  justify-content: space-between;
  /* Alinhamento dos itens no eixo principal */
  align-items: center;
  /* Alinhamento dos itens no eixo transversal */
  column-gap: 3.25rem;
  /* Espaçamento entre colunas */
}

/* Estilos para o logotipo */
.logo {
  height: 4.5rem;
  /* Altura do logotipo */
  margin-bottom: 3rem;
  /* Margem inferior do logotipo */
}

/* Estilos para a frase do cabeçalho */
.frase-cabecalho {
  margin-bottom: 2rem;
  /* Margem inferior da frase do cabeçalho */
}

/* Estilos para o texto verde */
.texto-verde {
  color: var(--verde-medio, #3D6D4A);
  /* Cor do texto verde */
}

/* Estilos para a imagem do banner */
.foto-banner {
  width: 35rem;
  /* Largura da imagem do banner */
}

/* Estilos para telas com largura máxima de 1300 pixels */
@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    /* Ajuste de padding para orientação de coluna */
    flex-direction: column;
    /* Orientação de coluna para itens do flexbox */
    align-items: center;
    /* Centraliza os itens no eixo transversal */
    gap: 1rem;
    /* Espaçamento entre os itens do flexbox */
  }

  .logo {
    display: block;
    /* Transforma o logotipo em um bloco */
    margin-left: auto;
    /* Alinha à esquerda */
    margin-right: auto;
    /* Alinha à direita */
  }
}

/* Estilos para telas com largura máxima de 767 pixels */
@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
    /* Ajuste de padding para telas menores */
  }

  .foto-banner {
    width: min(100%, 21.25rem);
    /* Largura da imagem do banner com limite máximo */
  }
}</style>
