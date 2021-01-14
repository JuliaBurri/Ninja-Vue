<template>
    <div>
        <v-navigation-drawer v-model="drawer" temporary fixed app>
            <v-list nav>
                <v-list-item-group
                        v-model="group">
                    <v-list-item class="drawer-buttons"
                                 v-for="item in this.tabs"
                                 :key="item.name" link :to="item.route">
                            <v-list-item-icon>
                                <v-icon>{{item.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                color="#666666"
                dark
                height="80"
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <router-link to="/home" class="ml-2">
                <v-img class="logo mt-2" contain
                       :src="require('@/assets/ninjaBlack.png')"
                       max-width="60">
                </v-img>
            </router-link>
            <v-spacer></v-spacer>
            <v-app-bar-title>NINJA</v-app-bar-title>
        </v-app-bar>
    </div>

</template>

<script>
    export default {
        name: "AppBar",
        data: () => ({
            drawer: false,
            group: null,
            tabs : [
                {name: "Home", route: '/home', icon: 'mdi-home'},
                {name: "Game", route: "/game", icon: 'mdi-play-circle'},
                {name: "Highscore", route: "/highscore", icon: 'mdi-clipboard-list'},
                {name: "About", route: "/about", icon: 'mdi-message-processing'},
            ],
        }),

    }
</script>

<style scoped>

</style>