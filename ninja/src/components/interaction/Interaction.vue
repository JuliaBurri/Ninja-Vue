<template>
    <div class="interaction">
        <add-player
                v-bind:state="this.state"
                    v-if="this.state === 'INSERTING_NAME2' || this.state === 'INSERTING_NAME2'">
        </add-player>

        <set-flag v-if="this.state === 'SET_FLAG'"></set-flag>

        <walk v-if="this.state === 'WALK'"></walk>

        <next-player v-if="this.state === 'WALKED'"></next-player>

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
            state: String
        },

        components: {
            'add-player': AddPlayer,
            'set-flag': SetFlag,
            'walk' : Walk,
            'next-player': NextPlayer
        },

        created() {
            this.state = "SET_FLAG";
        }

    }
</script>

<style scoped>
    .interaction {
        background-image: url("../../assets/paper.png");
        background-size: contain;
        background-repeat: no-repeat;
        height: 400px;
        width: 500px;
        padding-top: 5vw;
    }

</style>