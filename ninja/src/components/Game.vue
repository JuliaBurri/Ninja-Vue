<template>
    <div class="game">
        <b-container class="game-container" fluid>
            <b-row>

                <b-col class="col-6">
                    <Field @clicked="onClickChild" :field="this.field"></Field>
                </b-col>

                <b-col class="interaction col-2">
                    <interaction :state="this.state" :selected="this.selected"></interaction>
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
        selected: String,

        data() {
            return {
                state: String,
                field: Array,
                selected: String
            }
        },

        methods: {
            onClickChild(value) {
                this.selected = value;
                console.log("SELECTED: " + this.selected)
            },
        },

        components: {
            interaction: Interaction,
            Field: Field
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
                this.field = json.desk.field;
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