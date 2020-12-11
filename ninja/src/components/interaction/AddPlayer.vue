<template>
    <div>
    <div class="form-group player1 ">
        <label for="input-name1">Name</label>
        <input type="text"  class="form-control" id="input-name1">
        <button v-on:click="addPlayer1()" class="btn btn-primary m-2">Confirm name</button>
    </div>
    <div class="form-group player2 ">
        <label for="input-name2">Name</label>
        <input type="text"  class="form-control" id="input-name2">
        <button v-on:click="addPlayer2()" class="btn btn-primary m-2">Confirm name</button>
    </div>
    </div>
</template>

<script>
    export default {
        name: "AddPlayer",
        methods:{
            addPlayer1() {
                this.$socket.send(JSON.stringify({
                    type: "player1",
                    name: document.getElementById("input-name1").value
                }))
            },
            addPlayer2() {
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