<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <Board />
    </v-main>
  </v-app>
</template>

<script>
import Board from '@/components/Board.vue'

export default {
  name: "IndexPage",
  components: {
    Board
  }
};
</script>
