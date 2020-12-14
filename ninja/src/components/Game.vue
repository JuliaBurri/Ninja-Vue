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
        state: String,

        components: {
            interaction: Interaction,
            field: Field
        },

        created() {
            {
                // GET /someUrl
                this.$http.get('http://localhost:9000/json').then(response => {

                    // get body data
                  console.log(response.body);

                });
            }
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