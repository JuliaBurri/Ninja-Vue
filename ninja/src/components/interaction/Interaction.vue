<template>
    <div class="interaction">

        <add-player v-bind:state="this.state"></add-player>

        <set-flag v-bind:state="this.state" :selected="this.selected"></set-flag>

        <walk v-bind:state="this.state" :selected="this.selected"></walk>

        <next-player v-bind:state="this.state"></next-player>

    </div>

</template>

<script>
    import AddPlayer from "./AddPlayer";
    import SetFlag from "./SetFlag";
    import Walk from "./Walk";
    import NextPlayer from "./NextPlayer";

    export default {
        name: "Interaction",
        props: {
            state: String,
            selected: String,
        },

        components: {
            'add-player': AddPlayer,
            'set-flag': SetFlag,
            'walk' : Walk,
            'next-player': NextPlayer
        },
    }
</script>

<style scoped>
    .interaction {
        /*background-image: url("../../assets/paper.png");*/
        background-size: contain;
        background-repeat: no-repeat;
        height: 600px;
        width: 600px;
        padding-top: 5vw;
    }

</style>