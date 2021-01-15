<template>
    <div class="highscore">

        <h1 class="highscore-header">Highscore</h1>
        <v-simple-table dark>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Points
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Mark</td>
                    <td>55</td>
                </tr>
                <tr>
                    <td>Toni</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>Larry</td>
                    <td>25</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

    </div>
</template>

<script>
    export default {
        name: "Highscore"
    }
</script>

<style scoped>
    .highscore-header {
        text-align: center;
        color: darkslategray;
        padding-top: 2vw
    }
</style>