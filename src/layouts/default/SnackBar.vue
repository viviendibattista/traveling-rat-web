<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="snackBarState.timeout"
      :color="snackBarState.color"
    >
      <template v-slot:default>
        <ul>
          <li v-for="(message, index) in snackBarState.messages" :key="index">
            <v-icon color="black" class="mr-2" right>
              {{ snackBarState.icon }}
            </v-icon>
            {{ message }}
          </li>
        </ul>
      </template>
      <template v-slot:actions>
        <v-btn color="black" variant="text" @click="snackbar = false">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { snackbarStore } from "../../store/snackbar";
import { ref, watch } from "vue";

const snackbar = ref(false);
const snackBarState = snackbarStore.getState();

watch(snackBarState, (newstate, prevVal) => {
  snackbar.value = snackBarState.show;
});
</script>
