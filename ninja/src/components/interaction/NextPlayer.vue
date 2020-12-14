<template>
    <div class="next-player" v-if="this.state === 'WALKED'">
        <p>Next Player ? </p>
        <button v-on:click="nextPlayer()" class="btn btn-primary m-2">Next!</button>
    </div>
</template>

<script>
    export default {
        name: "NextPlayer",
        props: {
            state: String
        },
        methods: {
            nextPlayer() {
                this.$socket.send(JSON.stringify({type: "next"}))
            }
        }
    }
</script>

<style scoped>

</style>