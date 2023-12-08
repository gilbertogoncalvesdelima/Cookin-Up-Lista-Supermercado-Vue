<script lang="ts">
// Importa o componente Tag
import Tag from './Tag.vue';

export default {
  // Registra o componente Tag para uso neste componente
  components: { Tag },

  // Propriedades do componente
  props: {
    // Propriedade 'ingrediente' do tipo String, obrigatória
    ingrediente: { type: String, required: true }
  },

  // Dados do componente
  data() {
    return {
      // Estado do botão (selecionado ou não)
      selecionado: false
    }
  },

  // Métodos do componente
  methods: {
    // Método chamado ao clicar no botão
    aoClicar() {
      // Alterna o estado 'selecionado'
      this.selecionado = !this.selecionado

      // Emite um evento para adicionar ou remover o ingrediente, dependendo do estado 'selecionado'
      if (this.selecionado) {
        this.$emit('adicionarIngrediente', this.ingrediente)
      } else {
        this.$emit('removerIngrediente', this.ingrediente);
      }
    }
  },

  // Eventos emitidos pelo componente
  emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
  <!-- Template do componente -->
  <button class="ingrediente" @click="aoClicar" :aria-pressed="selecionado">
    <!-- Usa o componente Tag para exibir o texto do ingrediente -->
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<style scoped>
/* Estiliza elementos dentro do escopo do componente Vue.js */

/* Estilos específicos para o componente de ingrediente */
.ingrediente {
  cursor: pointer;
  /* Altera o cursor para indicar que o elemento é clicável */
}
</style>

