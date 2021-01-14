<template>
    <div class="home">
        <h1 class="home-header">Welcome to Ninja</h1>

        <v-container v-if="!signedIn" class="text-center mt-2">
            <p>Please sign in first.</p>
            <v-btn href=":9000">TRY AGAIN</v-btn>
        </v-container>

        <br><br>
        <v-container v-if="signedIn">
            <v-row>
                <v-card class="mx-auto" max-width="300">
                    <v-img src="../assets/highscore.png"></v-img>
                    <v-card-title>Highscore</v-card-title>
                    <v-card-subtitle>Check out your rivals</v-card-subtitle>
                    <v-card-actions>
                        <v-btn to="/highscore" color="purple lighten-2" text>
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="mx-auto" max-width="300">
                    <v-img src="../assets/play.png" max-height="270"></v-img>
                    <v-card-title>Game</v-card-title>
                    <v-card-subtitle>Let's Play!</v-card-subtitle>
                    <v-card-actions>
                        <v-btn to="/game" color="blue lighten-2" text>
                            Play
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="mx-auto" max-width="300">
                    <v-img src="../assets/about.png" height="270"></v-img>
                    <v-card-title>About</v-card-title>
                    <v-card-subtitle>Learn more about NINJA</v-card-subtitle>
                    <v-card-actions>
                        <v-btn to="/about" color="green lighten-2" text>
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>

        <v-container class="mt-10">
            <v-card dark color="grey darken-2" max-width="500" class="mx-auto">
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="headline"> Julia Burri</v-card-title>
                        <v-card-subtitle>"BEST GAME EVER!!!"</v-card-subtitle>
                        <v-card-actions>
                            <v-rating
                                    background-color="grey"
                                    color="yellow"
                                    value="5"
                            ></v-rating>
                        </v-card-actions>
                    </div>
                    <v-avatar class="ma-3" size="125" tile>
                        <v-img src="../assets/avatar.png"></v-img>
                    </v-avatar>
                </div>
            </v-card>

            <v-card dark color="grey darken-2" max-width="500" class="mt-5 mx-auto">
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="headline"> Helen Nganga</v-card-title>
                        <v-card-subtitle>"Cool Game, but i always loose..."</v-card-subtitle>
                        <v-card-actions>
                            <v-rating
                                    background-color="grey"
                                    color="yellow"
                                    value="4"
                            ></v-rating>
                        </v-card-actions>
                    </div>
                    <v-avatar class="ma-3" size="125" tile>
                        <v-img src="../assets/avatar.png"></v-img>
                    </v-avatar>
                </div>
            </v-card>
        </v-container>
        <br><br><br>
    </div>
</template>

<script>
    export default {
        name: "Home",

        initSocket() {
            console.log("in Home")
            this.$options.sockets.onmessage = (data) => {
                console.log("onmessage")
                const json = JSON.parse(data.data);
                window.console.log("Came in: ", json);
            };
        },

        data: () => ({
            signedIn: false
        }),

    }


</script>

<style scoped>

    .home {
        background-image: url("../assets/bambus.jpg");
    }

    .home-header {
        text-align: center;
        color: darkslategray;
        padding-top: 2vw
    }

    .card-img-top {
        height: 15vw;
    }

    .card {
        width: 16rem
    }

    .checked {
        color: yellow
    }

    .card-horizontal {
        display: flex;
        flex: 1 1 auto;
    }

    .rating-card {
        width: 40rem;
        margin-left: 3vw;
        margin-top: 3vw
    }

</style>