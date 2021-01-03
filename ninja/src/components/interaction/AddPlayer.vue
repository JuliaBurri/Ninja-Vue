<template>
    <div>
        <div class="form-group player1" v-if="this.state === 'INSERTING_NAME_1'">
            <p>Player1, insert your name</p><br>
            <v-text-field solo placeholder="Player1" class="name-input" id="input-name1"></v-text-field>
            <v-btn v-on:click="addPlayer1()" color="primary">Submit</v-btn>
        </div>

        <div class="form-group player2" v-if="this.state === 'INSERTING_NAME_2'">
            <p>Player2, insert your name</p><br>
            <v-text-field solo placeholder="Player2" class="name-input" id="input-name2"></v-text-field>
            <v-btn v-on:click="addPlayer2()" color="primary">Submit</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddPlayer",

        data() {
            return {
                playerName: null
            }
        },

        props: {
            state: String
        },

        methods: {
            addPlayer1() {
                this.$socket.send(JSON.stringify({
                    type: "player1",
                    name: document.getElementById("input-name1").value
                }))
                this.$store.commit('SET_PLAYER_NAME', 1)
            },
            addPlayer2() {
                this.$socket.send(JSON.stringify({
                    type: "player2",
                    name: document.getElementById("input-name2").value
                }))
                this.$store.commit('SET_PLAYER_NAME', 2)
            }
        }
    }
</script>

<style scoped>

</style>