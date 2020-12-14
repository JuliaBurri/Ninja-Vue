<template>
    <div class="game">
        <b-container class="game-container" fluid>
            <b-row >

                <b-col class="col-6">
                    <field></field>
                </b-col>

                <b-col class="interaction col-2">
                    <interaction ></interaction>
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

        components: {
            interaction: Interaction,
            field: Field
        },

        created() {
            this.$options.sockets.onmessage = (data) => {
                console.log("onmessage")
                const json = JSON.parse(data.data);
                window.console.log("Came in: ", json);
            };
            //this.$socket.send(JSON.stringify({type: "json"}))
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