<template>
    <div class="about">
        <h1 class="about-header">
            About Ninja
        </h1>

        <p class="about-description">The game is based on a classic hand game- Rock Paper Scissors where each player has an
            army armed with Rocks, Paper, and Scissors.<br>To win the game capture your opponent's flag.
        </p>

        <v-img class="flag-img mx-auto" src="../assets/caroflag.png" width="80" height="80"/>

        <h2 class="rules-title">Rules</h2>
        <v-container class="rules-container">
            <v-row class="rules-row">
                <v-col>Scissor beats Paper</v-col>
                <v-col>Paper beats Rock</v-col>
                <v-col>Rock beats Scissor</v-col>
            </v-row>

            <v-row class="img-row ml-15">
                <v-col><v-img class="rules-img" src="../assets/helenschere.png"/></v-col>
                <v-col><v-img class="rules-img" src="../assets/helenpapier.png"/></v-col>
                <v-col><v-img class="rules-img" src="../assets/carostein.png"/></v-col>
            </v-row>
        </v-container>



        <div class="history">
            <h2>Creation of Rock Paper Scissors</h2>
            <p> The earliest form of Rock Paper Scissors was created in Japan and is called Janken.
                This is a variation of the Chinese games introduced in the 17th century.
                Janken uses the Rock, Paper and Scissors signs. It is the game that the modern version of Rock Paper
                Scissors derives from directly.
                Hand-games using gestures to represent the three conflicting elements of rock,
                paper and scissors have been most common since the modern version of the game was created in the late
                19th Century.
                This was between the Edo and Meiji periods.
                <br>
                By the early 20th century, Rock Paper Scissors had spread beyond Asia,
                especially through increased Japanese contact with the West.
                Its English language name is therefore taken from a translation of the names of the three Japanese
                hand-gestures
                for rock,paper and scissors; elsewhere in Asia the open-palm gesture represents “cloth” rather than
                “paper”.
                The shape of the scissors is also adopted from the Japanese style.
            </p>
        </div>

        <br><br>
        <p> Ninja is a Opensource Project, if you find Bugs please report here:
            <a href="https://github.com/HelenNganga/Ninja">Github</a></p>
        <strong>&copy; 2020 Helen Nganga &amp; Julia Burri </strong>
        <br><br>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

    .about {
        background-image: url("../assets/bambus.jpg");
    }

    .about-header {
        color: darkslategray;
        text-align: center;
        padding-top: 3vw;
        font-weight: bold
    }

    .about-description {
        text-align: center;
    }

    .flag-img {
        text-align: center;
    }

    .rules-title {
        color: darkslategray;
        text-align: center;
        font-weight: bold;
        margin-top: 5vw;
        text-align: center;
    }

    .rules-container {
        text-align: center;
        background-image: url("../assets/paper.png");
        background-size: contain;
        background-repeat: no-repeat;
        height: 500px;

    }

    .rules-row {
        padding-top: 9vw;
        margin-bottom: 2vw;
        font-weight: bold;
        width: 55vw;
    }

    .img-row {
        width: 55vw;
    }

    .rules-img {
        height: 100px;
        width: 100px;

    }

    .history {
        width: 50%;
        text-align: justify;
        margin-top: 5vw;
        margin-left: 5vw;
    }


</style>