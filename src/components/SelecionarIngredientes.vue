<script lang="ts">
// Importa recursos necessários
import { obterCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';

export default {
  // Nome do componente
  name: 'SelecionarIngredientes',

  // Dados do componente
  data() {
    return {
      // Lista de categorias de ingredientes
      categorias: [] as ICategoria[]
    };
  },

  // Hook de ciclo de vida 'created' - chamado quando o componente é criado
  async created() {
    // Carrega a lista de categorias de ingredientes
    this.categorias = await obterCategorias();
  },

  // Componentes utilizados neste componente
  components: { CardCategoria, BotaoPrincipal },

  // Eventos emitidos pelo componente
  emits: ['adicionarIngrediente', 'removerIngrediente', 'buscarReceitas']
}
</script>

<template>
  <!-- Template do componente -->
  <section class="selecionar-ingredientes">
    <!-- Título da seção -->
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <!-- Instruções para o usuário -->
    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <!-- Lista de categorias de ingredientes -->
    <ul class="categorias">
      <!-- Renderiza um componente CardCategoria para cada categoria -->
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria :categoria="categoria" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
          @remover-ingrediente="$emit('removerIngrediente', $event)" />
      </li>
    </ul>

    <!-- Dica para o usuário -->
    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <!-- Botão para buscar receitas -->
    <BotaoPrincipal texto="Buscar receitas!" @click="$emit('buscarReceitas')" />
  </section>
</template>

<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para a seção de seleção de ingredientes */
.selecionar-ingredientes {
  display: flex;
  /* Layout flexível */
  flex-direction: column;
  /* Coluna principal de elementos */
  align-items: center;
  /* Centraliza os itens no eixo transversal */
}

/* Estilos para o título da seção de ingredientes */
.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  /* Cor do título com fallback */
  display: block;
  /* Exibe como bloco, ocupando largura total */
  margin-bottom: 1.5rem;
  /* Margem na parte inferior */
}

/* Estilos para as instruções da seção */
.instrucoes {
  margin-bottom: 2rem;
  /* Margem na parte inferior */
}

/* Estilos para as categorias de ingredientes */
.categorias {
  margin-bottom: 1rem;
  /* Margem na parte inferior */
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza os itens no eixo principal */
  gap: 1.5rem;
  /* Espaçamento entre as categorias */
  flex-wrap: wrap;
  /* Quebra de linha para telas menores */
}

/* Estilos para a dica na seção de ingredientes */
.dica {
  align-self: flex-start;
  /* Alinha à extremidade inicial do eixo transversal */
  margin-bottom: 3.5rem;
  /* Margem na parte inferior */
}

/* Estilos responsivos para telas de largura máxima 767px */
@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
    /* Ajuste da margem para telas menores */
  }
}</style>
