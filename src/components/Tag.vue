<script lang="ts">
// Exporta o componente como padrão
export default {
  // Propriedades do componente
  props: {
    // Propriedade 'texto' do tipo String, obrigatória
    texto: { type: String, required: true },

    // Propriedade 'ativa' do tipo Boolean, opcional
    ativa: Boolean
  }
}
</script>

<template>
  <!-- Template do componente -->
  <span :class="['tag', { ativa }]">
    <!-- Exibe o texto associado à tag -->
    {{ texto }}
  </span>
</template>


<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para a tag */
.tag {
  display: inline-block;
  /* Exibe como bloco em linha */
  border-radius: 0.5rem;
  /* Borda arredondada */
  min-width: 4.25rem;
  /* Largura mínima */
  padding: 0.5rem;
  /* Espaçamento interno */
  text-align: center;
  /* Centraliza o texto */
  transition: 0.2s;
  /* Transição suave de propriedades animadas */
  color: var(--cinza);
  /* Cor do texto com fallback */
  background: var(--cinza-claro);
  /* Cor de fundo com fallback */
  font-weight: 400;
  /* Peso da fonte */
}

/* Estilos para a tag ativa (quando selecionada) */
.tag.ativa {
  color: var(--creme, #FFFAF3);
  /* Cor do texto ativo com fallback */
  background: var(--coral, #F0633C);
  /* Cor de fundo ativo com fallback */
  font-weight: 700;
  /* Peso da fonte quando ativo */
}</style>
