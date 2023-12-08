<script lang="ts">
// Declaração do componente
export default {
  // Propriedades do componente
  props: {
    // Propriedade 'texto' do tipo String, obrigatória
    texto: { type: String, required: true },
  }
}
</script>

<template>
  <!-- Template do componente -->
  <button class="paragrafo-lg botao-principal">
    <!-- Exibe o texto passado como propriedade no botão -->
    {{ texto }}
  </button>
</template>


<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para o botão principal */
.botao-principal {
  width: 19.5rem;
  /* Largura do botão */
  height: 3.5rem;
  /* Altura do botão */
  padding: 0.5rem 1rem;
  /* Preenchimento interno do botão */
  border-radius: 2rem;
  /* Raio da borda para criar uma forma arredondada */
  font-weight: 700;
  /* Peso da fonte (negrito) */
  color: var(--creme, #FFFAF3);
  /* Cor do texto com fallback */
  background: var(--coral, #F0633C);
  /* Cor de fundo do botão com fallback */
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  /* Sombra do botão */
  cursor: pointer;
  /* Altera o cursor para indicar que o botão é clicável */
  transition: 0.2s;
  /* Adiciona uma transição suave de 0.2 segundos */

  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza horizontalmente */
  align-items: center;
  /* Centraliza verticalmente */
}

/* Efeito de hover para o botão principal */
.botao-principal:hover {
  background: var(--ocre-hover, #D1451E);
  /* Cor de fundo do botão ao passar o mouse */
}</style>
