<template>
    <div>
        <b-btn class="ninja-btn" v-bind:class="this.type"></b-btn>
    </div>
</template>

<script>
    export default {
        name: "Ninja",

        props: {
            type: String
        },
    }
</script>

<style scoped>
    .ninja-btn {
        width: 80px;
        height: 80px;
        border-radius: 0px;
        background-repeat: no-repeat;
        background-size: 80px;
        background-color: transparent;
    }

    .flag {
        background-image: url("../../assets/caroflag.png") ;
    }

    .scissor {
        background-image: url("../../assets/helenschere.png") ;
    }

    .paper {
        background-image: url("../../assets/helenpapier.png") ;
    }

    .rock {
        background-image: url("../../assets/carostein.png") ;
    }

</style>