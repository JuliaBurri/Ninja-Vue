<template>
    <div class="set-flag">

        <div>
            <p>Please select a Ninja</p>
            <button v-on:click="setFlag()" class="btn btn-primary m-2">Set Flag!</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SetFlag",
        methods: {
            setFlag() {
                console.log("set flag")
            }

        }



    }
</script>

<style scoped>

</style>