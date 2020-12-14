<template>
    <div class="walk" v-if="this.state === 'TURN'">
        <p>Select a Ninja and choose a direction</p>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        <button v-on:click="walk()" class="btn btn-primary m-2">Walk!</button>
    </div>
</template>

<script>
    export default {
        name: "Walk",

        props: {
            state: String
        },

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
        },
        methods: {
            walk() {
                this.$socket.send(JSON.stringify({type: "walk", row: '1', col: '1', d: 'd'}))
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