<script lang="ts">
// Importa o tipo PropType do Vue
import type { PropType } from 'vue';

// Importa o componente Tag
import Tag from './Tag.vue';

export default {
  // Registra o componente Tag para uso neste componente
  components: { Tag },

  // Propriedades do componente
  props: {
    // Propriedade 'ingredientes' do tipo Array de strings, obrigatória
    ingredientes: { type: Array as PropType<string[]>, required: true }
  },
}
</script>

<template>
  <!-- Template do componente -->
  <section>
    <!-- Título da seção -->
    <span class="subtitulo-lg sua-lista-texto">
      Sua lista:
    </span>

    <!-- Lista de ingredientes selecionados, exibida se houver ingredientes na lista -->
    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
      <!-- Renderiza um componente Tag para cada ingrediente na lista -->
      <li v-for="ingrediente in ingredientes" :key="ingrediente">
        <Tag :texto="ingrediente" ativa />
      </li>
    </ul>

    <!-- Mensagem exibida se a lista de ingredientes estiver vazia -->
    <p v-else class="paragrafo lista-vazia">
      <!-- Ícone de lista vazia -->
      <img src="../assets/imagens/icones/lista-vazia.svg" alt="Ícone de pesquisa">
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>


<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para o texto "Sua lista" */
.sua-lista-texto {
  color: var(--coral, #F0633C);
  /* Define a cor do texto com fallback */
  display: block;
  /* Exibe como bloco, ocupando largura total */
  text-align: center;
  /* Centraliza o texto */
  margin-bottom: 1.5rem;
  /* Margem na parte inferior */
}

/* Estilos para a lista de ingredientes selecionados */
.ingredientes-sua-lista {
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza os itens no eixo principal */
  gap: 1rem 1.5rem;
  /* Espaçamento entre os ingredientes */
  flex-wrap: wrap;
  /* Quebra de linha para telas menores */
}

/* Estilos para a mensagem de lista vazia */
.lista-vazia {
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza os itens no eixo principal */
  align-items: center;
  /* Centraliza os itens no eixo transversal */
  flex-wrap: wrap;
  /* Quebra de linha para telas menores */
  gap: 0.25rem;
  /* Espaçamento entre os itens */
  color: var(--coral, #F0633C);
  /* Cor do texto com fallback */
  text-align: center;
  /* Centraliza o texto */
}</style>
