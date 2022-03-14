<template>
  <v-container>
    <v-row>
      <v-col v-for="column of board.columns" :key="`${column.name}`">
        <v-card class="mx-auto" max-width="344" elevation="4">
          <v-card-title>{{ column.name }}</v-card-title>
          <!-- <v-card-text v-for="task of column.tasks" :key="task.id">
            {{ task.name }}
          </v-card-text> -->
          <v-list>
            <v-list-item-group>
              <v-list-item class="ma-2" v-for="task of column.tasks" :key="task.id">
                <v-list-item-title v-text="task.name"></v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["board"]),
};
</script>

<style>
</style>