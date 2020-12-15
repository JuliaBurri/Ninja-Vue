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

    .f{
        background-image: url("../../assets/caroflag.png") ;
    }

    .s {
        background-image: url("../../assets/helenschere.png") ;
    }

    .p {
        background-image: url("../../assets/helenpapier.png") ;
    }

    .r {
        background-image: url("../../assets/carostein.png") ;
    }

</style>