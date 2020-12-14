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
        },

        methods: {
            setFlag1() {
                console.log("set flag 1")
                this.$socket.send(JSON.stringify({type: "setFlag1", row: '0', col: '0'}))
            },
            setFlag2() {
                console.log("set flag 2")
                this.$socket.send(JSON.stringify({type: "setFlag2", row: '4', col: '4'}))
            }
        }
    }
</script>

<style scoped>

</style>