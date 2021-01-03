<template>
    <div class="field">
        <b-container>
            <div class="row">
                <div class="col-md-2" v-bind:key="i" v-for="i in 36">
                    <b-btn class="ninja-btn"
                           :class="getNinjaClass(i)"
                           :id="getNinjaId(field[i-1])"
                           v-on:click="onClickButton('clicked',getNinjaId(field[i-1]))"
                    >
                    </b-btn>
                </div>
            </div>
        </b-container>

    </div>
</template>

<script>

    export default {
        name: "Field",

        props: {
            field: Array,
            currentPlayer: Number,
        },

        data() {
            return {
                rows: 6,
                cols: 6,
                cells: 36,
            }
        },

        methods: {
            getNinjaId(cell) {
                let row = cell.row.toString();
                let col = cell.col.toString();
                let ninjaId = row.concat(col);
                return ninjaId
            },

            onClickButton(event, id) {
                this.$emit('clicked', id)
            },

            getPlayerFromStore() {
                return this.$store?.state.playerName
            },

            isEmptyButton(i) {
                return this.field[i - 1].cell.ninja === ''
            },

            getWeapon(i) {
                return this.field[i - 1].cell.ninja.weapon
            },

            isOpponentButton(i) {
                return this.getPlayerFromStore() != this.field[i-1].cell.ninja.playerId.toString()
            },

            getNinjaClass(i) {
                if (this.isEmptyButton(i)) {
                    return ''
                }
                if (this.isOpponentButton(i)) {
                    return 'd'
                }
                return this.getWeapon(i)
            }
        }
    }
</script>

<style scoped>
    .field {
        margin-left: 5vw;
        width: 60%;
    }

    .ninja-btn {
        width: 80px;
        height: 80px;
        background-repeat: no-repeat;
        background-size: 80px;
        background-color: lightgray;

    }

    .f {
        background-image: url("../../assets/caroflag.png");
    }

    .s {
        background-image: url("../../assets/helenschere.png");
    }

    .p {
        background-image: url("../../assets/helenpapier.png");
    }

    .r {
        background-image: url("../../assets/carostein.png");
    }

    .d {
        background-image: url("../../assets/ninja.png");
    }


</style>