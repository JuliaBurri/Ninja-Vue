<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Ninja",

        props: {
            type: String,
            id: String
        },

        data() {
            return {
                selected: ''
            }
        },
    }
</script>

<style scoped>
    .ninja-btn {
        width: 80px;
        height: 80px;
        background-repeat: no-repeat;
        background-size: 80px;
        background-color: lightgray;

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