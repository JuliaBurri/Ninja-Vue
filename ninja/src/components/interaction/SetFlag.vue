<template>
    <div class="set-flag">

        <div class="set-flag1" v-if="this.state === 'SET_FLAG_1'">
            <p>Please select a Ninja</p>
            <button v-on:click="setFlag1()" class="btn btn-primary m-2">Set Flag!</button>
        </div>

        <div class="set-flag2" v-if="this.state === 'SET_FLAG_2'">
            <p>Please select a Ninja</p>
            <button v-on:click="setFlag2()" class="btn btn-primary m-2">Set Flag!</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SetFlag",

        props: {
            state: String,
            selected: String
        },

        methods: {
            setFlag1() {
                this.$socket.send(JSON.stringify({type: "setFlag1", row: this.selected.charAt(0), col: this.selected.charAt(1)}))
            },
            setFlag2() {
                this.$socket.send(JSON.stringify({type: "setFlag2", row: this.selected.charAt(0), col: this.selected.charAt(1)}))
            }
        }
    }
</script>

<style scoped>

</style>