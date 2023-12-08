<script lang="ts">
// Importa o componente Banner.vue
import Banner from './components/Banner.vue';

// Importa o componente ConteudoPrincipal.vue
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';

// Importa o componente Rodape.vue
import Rodape from './components/Rodape.vue';

export default {
  // Registra os componentes para uso no template
  components: { Banner, ConteudoPrincipal, Rodape }
}
</script>

<template>
  <!-- Renderiza o componente Banner -->
  <Banner />

  <!-- Renderiza o componente ConteudoPrincipal -->
  <ConteudoPrincipal />

  <!-- Renderiza o componente Rodape -->
  <Rodape />
</template>
