<script lang="ts">
// Importa recursos necessários
import { itensDeLista1EstaoEmLista2 } from '@/operacoes/listas';
import type { PropType } from 'vue';
import { obterReceitas } from '@/http';
import type IReceita from '@/interfaces/IReceita';
import BotaoPrincipal from './BotaoPrincipal.vue';
import CardReceita from './CardReceita.vue';

export default {
  // Propriedades do componente
  props: {
    // Propriedade 'ingredientes' do tipo Array de strings, obrigatória
    ingredientes: { type: Array as PropType<string[]>, required: true }
  },

  // Dados do componente
  data() {
    return {
      // Lista de receitas encontradas
      receitasEncontradas: [] as IReceita[]
    };
  },

  // Hook de ciclo de vida 'created' - chamado quando o componente é criado
  async created() {
    // Obtém a lista completa de receitas
    const receitas = await obterReceitas();

    // Filtra as receitas com base nos ingredientes disponíveis
    this.receitasEncontradas = receitas.filter((receita) => {
      // Lógica que verifica se é possível fazer a receita com os ingredientes disponíveis
      const possoFazerReceita = itensDeLista1EstaoEmLista2(receita.ingredientes, this.ingredientes);

      // Retorna true se for possível fazer a receita
      return possoFazerReceita;
    });
  },

  // Componentes utilizados neste componente
  components: { BotaoPrincipal, CardReceita },

  // Eventos emitidos pelo componente
  emits: ['editarReceitas']
}
</script>

<template>
  <!-- Template do componente -->
  <section class="mostrar-receitas">
    <!-- Título da seção -->
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <!-- Número de resultados encontrados -->
    <p class="paragrafo-lg resultados-encontrados">
      Resultados encontrados: {{ receitasEncontradas.length }}
    </p>

    <!-- Se houver receitas encontradas -->
    <div v-if="receitasEncontradas.length" class="receitas-wrapper">
      <!-- Informações sobre as receitas encontradas -->
      <p class="paragrafo-lg informacoes">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>

      <!-- Lista de receitas -->
      <ul class="receitas">
        <!-- Renderiza um componente CardReceita para cada receita encontrada -->
        <li v-for="receita of receitasEncontradas" :key="receita.nome">
          <CardReceita :receita="receita" />
        </li>
      </ul>
    </div>

    <!-- Se não houver receitas encontradas -->
    <div v-else class="receitas-nao-encontradas">
      <!-- Mensagem quando não há resultados -->
      <p class="paragrafo-lg receitas-nao-encontradas__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
      </p>

      <!-- Imagem de ilustração quando não há receitas -->
      <img src="../assets/imagens/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
    </div>

    <!-- Botão para editar a lista de receitas -->
    <BotaoPrincipal texto="Editar lista" @click="$emit('editarReceitas')" />
  </section>
</template>


<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos para a seção de mostrar receitas */
.mostrar-receitas {
  display: flex;
  /* Layout flexível */
  flex-direction: column;
  /* Orientação de coluna para itens do flexbox */
  align-items: center;
  /* Centraliza os itens no eixo transversal */
  text-align: center;
  /* Alinhamento do texto ao centro */
}

/* Estilos para o título de receitas */
.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  /* Cor do texto com fallback */
  margin-bottom: 1.5rem;
  /* Margem inferior */
}

/* Estilos para a mensagem de resultados encontrados */
.resultados-encontrados {
  color: var(--verde-medio, #3D6D4A);
  /* Cor do texto com fallback */
  margin-bottom: 0.5rem;
  /* Margem inferior */
}

/* Estilos para o contêiner de receitas */
.receitas-wrapper {
  margin-bottom: 3.5rem;
  /* Margem inferior */
}

/* Estilos para informações sobre as receitas */
.informacoes {
  margin-bottom: 2rem;
  /* Margem inferior */
}

/* Estilos para a lista de receitas */
.receitas {
  display: flex;
  /* Layout flexível */
  justify-content: center;
  /* Centraliza horizontalmente os itens do flexbox */
  gap: 1.5rem;
  /* Espaçamento entre os itens do flexbox */
  flex-wrap: wrap;
  /* Permite que os itens quebrem para a próxima linha quando não houver espaço suficiente */
}

/* Estilos para a mensagem de receitas não encontradas */
.receitas-nao-encontradas {
  margin-bottom: 2rem;
  /* Margem inferior */
}

/* Estilos para a mensagem informativa de receitas não encontradas */
.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
  /* Margem inferior */
}

/* Estilos responsivos para telas de largura máxima 767px */
@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
    /* Ajuste da margem inferior para telas menores */
  }
}</style>
