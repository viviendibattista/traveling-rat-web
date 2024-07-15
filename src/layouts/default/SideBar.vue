<template>
  <v-navigation-drawer
    color="#f2f2f2"
    permanent
    :rail="mobile"
    :expand-on-hover="mobile"
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-account"
        :title="appStore.getState().username"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list class="mt-2" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Liste des devis"
        :to="{ name: 'Home' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-help-box"
        title="Aide"
        :to="{ name: 'HelpPage' }"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { appStore } from "@/store/app";

const { mobile } = useDisplay();
</script>
