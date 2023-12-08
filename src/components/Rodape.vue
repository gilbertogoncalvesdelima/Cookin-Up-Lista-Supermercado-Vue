<template>
  <footer class="rodape paragrafo">
    Desenvolvido por Alura | 2023 - Projeto fictício sem fins comerciais.
  </footer>
</template>

<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para o rodapé */
.rodape {
  background: var(--verde-escuro, #263A29);
  /* Cor de fundo com fallback */
  padding: 1.5rem 7.5rem;
  /* Preenchimento do rodapé (topo e base) */
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza os itens no eixo principal */
  align-items: center;
  /* Centraliza os itens no eixo transversal */
}

/* Estilos responsivos para telas de largura máxima 1300px */
@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
    /* Ajuste do preenchimento para telas menores */
  }
}

/* Estilos responsivos para telas de largura máxima 767px */
@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
    /* Ajuste do preenchimento para telas ainda menores */
  }
}</style>
