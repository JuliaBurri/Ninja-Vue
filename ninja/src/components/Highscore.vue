<template>
    <div class="highscore">

        <h1 class="highscore-header">Highscore</h1>

        <table class="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Points</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>55</td>

            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>50</td>

            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>43</td>

            </tr>
            </tbody>
        </table>

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