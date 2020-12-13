<template>
    <div>
        <b-navbar class = "navbar" toggleable="lg" type ="dark">
            <b-navbar-brand href="#">
                <img class="logo" :src="require('@/assets/ninjaBlack.png')">
            </b-navbar-brand>

                <b-navbar-nav>
                    <b-nav-item href="/">Home</b-nav-item>
                    <b-nav-item href="/game">Game</b-nav-item>
                    <b-nav-item href="/highscore">Highscore</b-nav-item>
                    <b-nav-item href="/about">About</b-nav-item>
                </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default{
        name: "Navbar"
    }
</script>

<style scoped>
.navbar{
    background-color:slategrey;
}

    .logo {
        height: 40px;
    }
</style>