<script lang="ts">
// Importa os componentes necessários
import MostrarReceitas from './MostrarReceitas.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';

// Define um tipo para representar a página atual
type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';

export default {
  // Dados do componente
  data() {
    return {
      // Lista de ingredientes selecionados
      ingredientes: [] as string[],

      // Página atual, inicializada como 'SelecionarIngredientes'
      conteudo: 'SelecionarIngredientes' as Pagina
    };
  },
  // Componentes usados neste componente
  components: { SelecionarIngredientes, Tag, SuaLista, MostrarReceitas },
  // Métodos do componente
  methods: {
    // Método para adicionar um ingrediente à lista
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
    // Método para remover um ingrediente da lista
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(iLista => ingrediente !== iLista);
    },
    // Método para navegar entre as páginas
    navegar(pagina: Pagina) {
      this.conteudo = pagina;
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'" @adicionar-ingrediente="adicionarIngrediente"
        @remover-ingrediente="removerIngrediente" @buscar-receitas="navegar('MostrarReceitas')" />

      <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'" :ingredientes="ingredientes"
        @editar-receitas="navegar('SelecionarIngredientes')" />
    </KeepAlive>
  </main>
</template>


<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para o conteúdo principal */
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  /* Preenchimento interno do conteúdo principal */
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  /* Raio da borda para criar uma forma arredondada (apenas no topo) */
  background: var(--creme, #FFFAF3);
  /* Cor de fundo do conteúdo principal com fallback */
  color: var(--cinza, #444);
  /* Cor do texto com fallback */

  display: flex;
  /* Layout flexível */
  flex-direction: column;
  /* Orientação de coluna para itens do flexbox */
  align-items: center;
  /* Centraliza os itens no eixo transversal */
  gap: 5rem;
  /* Espaçamento entre os itens do flexbox */
}

/* Estilos para o texto "Sua lista" */
.sua-lista-texto {
  color: var(--coral, #F0633C);
  /* Cor do texto "Sua lista" */
  display: block;
  /* Exibe como bloco (um por linha) */
  text-align: center;
  /* Alinhamento do texto ao centro */
  margin-bottom: 1.5rem;
  /* Margem inferior */
}

/* Estilos para a lista de ingredientes */
.ingredientes-sua-lista {
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza horizontalmente os itens do flexbox */
  gap: 1rem 1.5rem;
  /* Espaçamento entre os itens do flexbox */
  flex-wrap: wrap;
  /* Permite que os itens quebrem para a próxima linha quando não houver espaço suficiente */
}

/* Estilos para a mensagem de lista vazia */
.lista-vazia {
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza horizontalmente os itens do flexbox */
  align-items: center;
  /* Centraliza verticalmente os itens do flexbox */
  flex-wrap: wrap;
  /* Permite que os itens quebrem para a próxima linha quando não houver espaço suficiente */
  gap: 0.25rem;
  /* Espaçamento entre os itens do flexbox */

  color: var(--coral, #F0633C);
  /* Cor do texto com fallback */
  text-align: center;
  /* Alinhamento do texto ao centro */
}

/* Estilos responsivos para telas de largura máxima 1300px */
@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    /* Ajuste do preenchimento e espaçamento para telas menores */
    gap: 3.5rem;
    /* Ajuste do espaçamento entre os itens para telas menores */
  }
}

/* Estilos responsivos para telas de largura máxima 767px */
@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    /* Ajuste do preenchimento e espaçamento para telas ainda menores */
    gap: 4rem;
    /* Ajuste do espaçamento entre os itens para telas ainda menores */
  }
}</style>
