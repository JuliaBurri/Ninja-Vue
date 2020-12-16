<template>
    <div>
        <div class="form-group player1" v-if="this.state === 'INSERTING_NAME_1'">
            <label for="input-name1">Player1, insert your name</label>
            <input type="text" placeholder="Player1" class="form-control" id="input-name1">
            <button v-on:click="addPlayer1()" class="btn btn-primary m-2">Submit</button>
        </div>

        <div class="form-group player2" v-if="this.state === 'INSERTING_NAME_2'">
            <label for="input-name2">Player2, insert your name</label>
            <input type="text" placeholder="Player2" class="form-control" id="input-name2">
            <button v-on:click="addPlayer2()" class="btn btn-primary m-2">Submit</button>
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