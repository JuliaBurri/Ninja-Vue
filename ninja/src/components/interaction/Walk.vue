<template>
    <div class="walk">
        <p>Select a Ninja and choose a direction</p>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
</template>

<script>
    export default {
        name: "Walk",

        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Please select a direction' },
                    { value: 'u', text: 'UP'},
                    { value: 'd', text: 'DOWN'},
                    { value: 'r', text: 'RIGHT'},
                    { value: 'l', text: 'LEFT'},

                ]
            }
        }
    }
</script>

<style scoped>
 .walk {
     width: 20vw;
     margin-left: 4vw;
 }
</style>