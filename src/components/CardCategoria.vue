<script lang="ts">
// Importa a interface ICategoria e o tipo PropType do Vue
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';

// Importa os componentes Tag e IngredienteSelecionavel
import Tag from './Tag.vue';
import IngredienteSelecionavel from './IngredienteSelecionavel.vue';

export default {
  // Propriedades do componente
  props: {
    // Propriedade 'categoria' do tipo ICategoria, obrigatória
    categoria: { type: Object as PropType<ICategoria>, required: true }
  },
  // Componentes usados neste componente
  components: { Tag, IngredienteSelecionavel },
  // Eventos emitidos pelo componente
  emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
  <!-- Template do componente -->
  <article class="categoria">
    <header class="categoria__cabecalho">
      <!-- Exibe a imagem da categoria -->
      <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">

      <!-- Exibe o nome da categoria -->
      <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <!-- Lista de ingredientes da categoria -->
    <ul class="categoria__ingredientes">
      <!-- Loop sobre os ingredientes e exibe o componente IngredienteSelecionavel para cada um -->
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
        <IngredienteSelecionavel :ingrediente="ingrediente" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
          @remover-ingrediente="$emit('removerIngrediente', $event)" />
      </li>
    </ul>
  </article>
</template>


<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para o componente de categoria */
.categoria {
  width: 19.5rem;
  /* Largura do componente de categoria */
  padding: 1rem;
  /* Preenchimento interno do componente */
  border-radius: 1rem;
  /* Raio da borda para criar uma forma arredondada */
  background: var(--branco, #FFF);
  /* Cor de fundo do componente com fallback */
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  /* Sombra do componente */
  height: 100%;
  /* Altura do componente, ocupando 100% da altura disponível */

  display: flex;
  /* Layout flexível */
  flex-direction: column;
  /* Orientação de coluna para itens do flexbox */
  align-items: center;
  /* Centraliza os itens no eixo transversal */
  gap: 2rem;
  /* Espaçamento entre os itens do flexbox */
}

/* Estilos para o cabeçalho da categoria */
.categoria__cabecalho {
  display: flex;
  /* Layout flexível */
  flex-direction: column;
  /* Orientação de coluna para itens do flexbox */
  align-items: center;
  /* Centraliza os itens no eixo transversal */
  gap: 0.5rem;
  /* Espaçamento entre os itens do flexbox */
}

/* Estilos para a imagem da categoria */
.categoria__imagem {
  width: 3.5rem;
  /* Largura da imagem da categoria */
}

/* Estilos para o nome da categoria */
.categoria__nome {
  text-align: center;
  /* Alinhamento do texto ao centro */
  color: var(--verde-medio, #3D6D4A);
  /* Cor do texto com fallback */
  font-weight: 700;
  /* Peso da fonte (negrito) */
}

/* Estilos para a lista de ingredientes da categoria */
.categoria__ingredientes {
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza horizontalmente os itens do flexbox */
  gap: 0.5rem;
  /* Espaçamento entre os itens do flexbox */
  flex-wrap: wrap;
  /* Permite que os itens quebrem para a próxima linha quando não houver espaço suficiente */
}</style>
