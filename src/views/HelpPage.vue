<template>
  <v-toolbar color="#F5F5F5">
    <v-toolbar-title align="center">
      <span style="color: #4a4a4a; font-weight: bold">
        Aide et documentation
      </span>
    </v-toolbar-title>
    <br />
  </v-toolbar>
  <v-container>
    <div class="mt-2 mb-5" align="center">
      Traveling Rat vous permet de consulter et déposer des tips de voyage
    </div>
    <div align="left">
      <v-expansion-panels multiple v-model="panel" variant="popout">
        <v-expansion-panel v-model="panel">
          <v-expansion-panel-title> Principe </v-expansion-panel-title>
          <v-expansion-panel-text> </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel v-model="panel" class="mt-5">
          <v-expansion-panel-title>
            Menu et fonctionnalités
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="my-4">
              <v-icon left color="primary" class="mb-1 mr-1">
                mdi-arrow-right-circle-outline
              </v-icon>
              L’interface est composé des pages suivantes :
            </div>
            <v-expansion-panels multiple v-model="panel_menu">
              <v-expansion-panel v-model="panel_menu">
                <v-expansion-panel-title>
                  Liste / affichage des tips
                </v-expansion-panel-title>
                <v-expansion-panel-text> </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel v-model="panel_menu" class="mt-5">
                <v-expansion-panel-title>
                  Ajouter un tip
                </v-expansion-panel-title>
                <v-expansion-panel-text> </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const panel = ref([0, 1]);
const panel_menu = ref([0, 1, 2, 3, 4]);
</script>
