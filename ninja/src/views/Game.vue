<template>
    <div class="game">

        <v-container v-if="!signedIn" class="text-center pt-15">
            <strong>Please sign in first.</strong>
            <v-btn class="mx-3" @click="reload">TRY AGAIN</v-btn>
            <v-btn @click="goToLogin">Login</v-btn>
        </v-container>

        <v-container class="game-container" fluid>
            <v-row>
                <v-col class="col-sm-12 col-md-6">
                    <Field @clicked="onClickChild" v-bind:field="this.field"
                           v-bind:current-player="this.currentPlayer"
                    ></Field>
                </v-col>

                <v-col class="interaction col-sm-12 col-md-2">
                    <interaction :state="this.state" :selected="this.selected"></interaction>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>
    import Interaction from "../components/interaction/Interaction"
    import Field from "../components/Field/Field"

    export default {
        name: "Game",
        state: '',


        data() {
            return {
                state: '',
                currentPlayer: null,
                field: [],
                selected: '',
                signedIn: false,
            }
        },

        methods: {
            onClickChild(value) {
                this.selected = value;
                console.log("SELECTED: " + this.selected)
            },
            reload() {
                this.$router.go(0)
            },

            goToLogin() {
                window.open("http://localhost:9000", '_blank');
            }
        },

        components: {
            interaction: Interaction,
            Field: Field
        },

        created() {
            console.log("JULIAN ist toll")
            this.$socket.onopen = () => {
                console.log('WebSocket opened');
                this.$socket.send(JSON.stringify({type: "state"}))
            }

                try {
                    this.$socket.send(JSON.stringify({type: "state"}));
                } catch {
                    console.log("socket send try catch")
                }


            this.$options.sockets.onmessage = (data) => {
                const json = JSON.parse(data.data);
                window.console.log("Came in: ", json);
                this.state = json.state;
                this.field = json.desk.field;

                if (json.desk.player1.state == 'go') {
                    this.currentPlayer = json.desk.player1.id;
                } else if (json.desk.player2.state == 'go') {
                    this.currentPlayer = json.desk.player2.id;
                }
            };
            // this.$socket.send(JSON.stringify({type: "state"}))
        }
    }
</script>

<style scoped>
    .game {
        background-image: url("../assets/bambus.jpg");
    }

    .game-container {
        padding-top: 5vw;
        padding-bottom: 15vw;
    }

    .interaction {
        margin-top: 4vw;
    }
</style>