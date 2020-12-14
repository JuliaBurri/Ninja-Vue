<template>
    <div>
        <div class="form-group player1">
            <label for="input-name1">Player1, insert your name</label>
            <input type="text" placeholder="Player1" class="form-control" id="input-name1">
            <button v-on:click="addPlayer1()" class="btn btn-primary m-2">Submit</button>
        </div>

        <div class="form-group player2">
            <label for="input-name2">Player2, insert your name</label>
            <input type="text" placeholder="Player2" class="form-control" id="input-name2">
            <button v-on:click="addPlayer2()" class="btn btn-primary m-2">Submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddPlayer",

        methods: {
            addPlayer1() {
                console.log("add player 1")
                this.$socket.send(JSON.stringify({
                    type: "player1",
                    name: document.getElementById("input-name1").value
                }))
            },
            addPlayer2() {
                console.log("add player 2")
                this.$socket.send(JSON.stringify({
                    type: "player2",
                    name: document.getElementById("input-name2").value
                }))
            }
        }
    }
</script>

<style scoped>

</style>