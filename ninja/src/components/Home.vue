<template>
    <div class="home">
        <h1 class="home-header">Welcome to Ninja</h1>

        <br><br>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card shadow" >
                        <img class="card-img-top" src="../assets/highscore.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Highscore</h5>
                            <p class="card-text">Check out your rivals <br> </p>
                            <a href="/highscore" class="btn btn-secondary btn-block">Highscore</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card shadow" >
                        <img class="card-img-top" src="../assets/play.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Game</h5>
                            <p class="card-text">
                                Lets Play<br>
                            </p>
                            <a href="/game" class="btn btn-secondary btn-block">Game</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card shadow" >
                        <img class="card-img-top" src="../assets/about.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">About</h5>
                            <p class="card-text">
                                Learn more about Ninja <br></p>
                            <a href="/about" class="btn btn-secondary btn-block">About</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="card rating-card">
            <div class="card-horizontal">
                <div class="img-square-wrapper">
                    <img class="" src="../assets/avatar.png" alt="Card image cap" style="height: 10vw">
                </div>
                <div class="card-body">
                    <h4 class="card-title">Julia Burri</h4>
                    <p class="card-text">
                        Best Game EVER!!!!!! <br></p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>

            </div>
        </div>



        <div class="card rating-card">
            <div class="card-horizontal">
                <div class="img-square-wrapper">
                    <img class="" src="../assets/avatar.png" alt="Card image cap" style="height: 10vw">
                </div>
                <div class="card-body">
                    <h4 class="card-title">Helen Nganga</h4>
                    <p class="card-text">
                        Cool Game, but i always loose <br></p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>

            </div>
        </div>

        <br><br><br><br><br><br><br><br>

    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

    .home-header {
        text-align: center;
        color: darkslategray;
        padding-top: 2vw
    }

    .card-img-top {
        height: 15vw;
    }

    .card {
        width: 16rem
    }

    .checked {
        color: yellow
    }

    .card-horizontal {
        display: flex;
        flex: 1 1 auto;
    }

    .rating-card {
        width: 40rem;
        margin-left: 3vw;
        margin-top: 3vw
    }

</style>