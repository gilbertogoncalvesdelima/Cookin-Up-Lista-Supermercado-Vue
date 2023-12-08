<script lang="ts">
// Importa a interface IReceita e o tipo PropType do Vue
import type IReceita from '@/interfaces/IReceita';
import type { PropType } from 'vue';

export default {
  // Propriedades do componente
  props: {
    // Propriedade 'receita' do tipo IReceita, obrigatória
    receita: { type: Object as PropType<IReceita>, required: true }
  }
}
</script>

<template>
  <!-- Template do componente -->
  <article class="receita">
    <!-- Cabeçalho da receita com a imagem -->
    <header class="receita__cabecalho">
      <!-- Exibe a imagem da receita -->
      <img class="receita__imagem" :src="`/imagens/receitas/${receita.imagem}`" :alt="`Foto de ${receita.nome}`">
    </header>

    <!-- Corpo da receita com o nome -->
    <section class="receita__corpo">
      <!-- Exibe o nome da receita -->
      <h2 class="paragrafo receita__nome">
        {{ receita.nome }}
      </h2>
    </section>
  </article>
</template>

<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para o componente de receita */
.receita {
  display: flex;
  /* Layout flexível */
  width: 17.625rem;
  /* Largura inicial do componente de receita */
  max-width: 19.5rem;
  /* Largura máxima do componente de receita */
  flex-direction: column;
  /* Orientação de coluna para itens do flexbox */
  align-items: center;
  /* Centraliza os itens no eixo transversal */

  border-radius: 1rem;
  /* Raio da borda para criar uma forma arredondada */
  background: var(--Branco, #FFF);
  /* Cor de fundo do componente com fallback */
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
  /* Sombra do componente */
}

/* Estilos para o corpo da receita */
.receita__corpo {
  padding: 2rem 1rem;
  /* Preenchimento interno do corpo da receita */
}

/* Estilos para a imagem da receita */
.receita__imagem {
  width: 100%;
  /* Largura da imagem da receita ocupando 100% do contêiner */
  border-radius: 1rem 1rem 0rem 0rem;
  /* Raio da borda para criar uma forma arredondada (apenas no topo) */
  display: block;
  /* Torna a imagem um bloco */
}

/* Estilos para o nome da receita */
.receita__nome {
  font-weight: 700;
  /* Peso da fonte (negrito) */
  color: var(--cinza, #444);
  /* Cor do texto com fallback */
}</style>
