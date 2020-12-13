<template>
    <div class="field">
        <b-container>
        <div class="col ">
            <div class="row " v-for="row in rows" :key="row">
                <div class="col slot " v-for="col in cols" :key="col">
                    <flag-ninja></flag-ninja>
                </div>
            </div>
        </div>
        </b-container>
    </div>

</template>

<script>
    import FlagNinja from "./FlagNinja";

    export default {
        name: "Field",
        components:{
            "flag-ninja" : FlagNinja

        },
        data(){
            return{
                rows:6,
                cols:6
            }
        }
    }
</script>

<style scoped>


</style>