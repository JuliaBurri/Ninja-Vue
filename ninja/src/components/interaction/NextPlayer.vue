<template>
    <div class="next-player" v-if="this.state === 'WALKED'">
        <p>Next Player ? </p>
        <v-btn v-on:click="nextPlayer()" color="primary">Next!</v-btn>
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