<template>
    <div class="walk" v-if="this.state === 'TURN'">
        <p>Select a Ninja and choose a direction</p>
        <b-form-select v-model="dir" :options="options"></b-form-select>
        <div class="mt-3">Selected: <strong>{{ dir }}</strong></div>
        <button v-on:click="walk()" class="btn btn-primary m-2">Walk!</button>
    </div>
</template>

<script>
    export default {
        name: "Walk",

        props: {
            state: String,
            selected: String
        },

        data() {
            return {
                dir: null,
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
                this.$socket.send(JSON.stringify({type: "walk", row: this.selected.charAt(0), col: this.selected.charAt(1), d: this.dir}))
            }
        }
    }
</script>

<style scoped>
 .walk {
     width: 20vw;
     margin-left: 7vw;
 }
</style>