<template>
    <div class="next-player">
        <p>Next Player ? </p>
        <button v-on:click="nextPlayer()" class="btn btn-primary m-2">Next!</button>
    </div>
</template>

<script>
    export default {
        name: "NextPlayer",
        methods: {
            nextPlayer() {
                console.log("next")
            }
        }
    }
</script>

<style scoped>

</style>