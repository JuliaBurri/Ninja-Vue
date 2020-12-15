<template>
    <div class="field">
        <b-container>
            <div class="row mx-0">
            <div class="col-2" v-bind:key="i" v-for="i in 36">
                        <ninja :type="field[i-1].cell.ninja.weapon"></ninja>
            </div>
            </div>

        </b-container>

    </div>
</template>

<script>
    import Ninja from "./Ninja";

    export default {
        name: "Field",
        components: {
            'ninja': Ninja
        },

        props: {
            field: Array
        },

        data() {
            return {
                rows: 6,
                cols: 6,
                cells: 36
            }
        },
    }
</script>

<style scoped>


</style>