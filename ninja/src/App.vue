<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Home from "./components/Home";

export default {
  name: 'App',

  components: {
    Home,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
