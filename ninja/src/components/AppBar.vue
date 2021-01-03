<template>
    <v-app-bar
            color="#666666"
            dark
            height="100"
    >
        <router-link to="/" class="ml-2">
            <v-img class="logo mt-2" contain
                   :src="require('@/assets/ninjaBlack.png')"
                   max-width="60">
            </v-img>
        </router-link>
        <template>
            <v-tabs centered>
                <v-tab to="/">HOME</v-tab>
                <v-tab to="/game">GAME</v-tab>
                <v-tab to="/highscore">HIGHSCORE</v-tab>
                <v-tab to="/about">ABOUT</v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar"
    }
</script>

<style scoped>

</style>