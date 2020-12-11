<template>
    <div class="container">
        <interaction />
        <field></field>
    </div>
</template>

<script>
    import Interaction from "./interaction/Interaction"
    import Field from "./Field/Field"
    export default {
        name: "Game",
        components: {
            interaction: Interaction,
            field: Field
        }
    }
</script>

<style scoped>

</style>