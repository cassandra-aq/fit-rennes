<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Fabien en forme</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn :to="{name:'Home'}" class="mr-1" exact>Accueil</v-btn>
      <v-btn :to="{name:'About'}" class="mr-1">A propos</v-btn>
      <v-btn :to="{name:'Admin'}" class="mr-1">Administration</v-btn>
      <v-btn :to="{name:'Member'}" class="mr-1">Espace Membre</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<style lang="scss">
</style>
