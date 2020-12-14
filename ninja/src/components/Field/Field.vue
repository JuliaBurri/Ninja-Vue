<template>
    <div class="field">
        <b-container class="field-container">
            <div class="col ">
                <div class="row " v-for="row in rows" :key="row">
                    <b-button-group>
                        <div class="col slot " v-for="col in cols" :key="col">
                            <ninja type="rock"></ninja>
                        </div>
                    </b-button-group>
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
        data() {
            return {
                rows: 6,
                cols: 6
            }
        }
    }
</script>

<style scoped>
    .field-container {
    }


</style>