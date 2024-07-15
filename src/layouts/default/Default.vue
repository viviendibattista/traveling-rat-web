<template>
  <v-app v-if="appStore.getState().loaded === true">
    <side-bar />
    <app-bar />
    <default-view />
  </v-app>
  <v-app v-else>
    <waiting-page />
  </v-app>
</template>

<script setup>
import { appStore } from "@/store/app";
import AppBar from "./AppBar.vue";
import SideBar from "./SideBar.vue";
import DefaultView from "./View.vue";
import WaitingPage from "./WaitingPage.vue";
</script>
