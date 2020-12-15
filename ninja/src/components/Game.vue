<template>
    <div class="game">
        <b-container class="game-container" fluid>
            <b-row>

                <b-col class="col-6">
                    <field></field>
                </b-col>

                <b-col class="interaction col-2">
                    <interaction :state="this.state"></interaction>
                </b-col>

            </b-row>
        </b-container>
    </div>

</template>

<script>
    import Interaction from "./interaction/Interaction"
    import Field from "./Field/Field"

    export default {
        name: "Game",
        state: String,

        data() {
            return {
                state: String,
                desk: [],
            }
        },

        components: {
            interaction: Interaction,
            field: Field
        },

        created() {

            this.$socket.onopen = () => {
                console.log('WebSocket opened');
                this.$socket.send(JSON.stringify({type: "state"}))
            }
            this.$options.sockets.onmessage = (data) => {
                const json = JSON.parse(data.data);
                window.console.log("Came in: ", json);
                this.state = json.state;
                this.desk = json.desk;
            };

            this.$socket.send(JSON.stringify({type: "state"}))
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