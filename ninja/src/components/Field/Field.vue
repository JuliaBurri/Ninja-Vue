<template>
    <div class="field">
        <v-container class="field-lg hidden-sm-and-down">
            <v-row no-gutters class="col-9">
                <v-col v-bind:key="i" v-for="i in 36">
                    <v-card class="ninja-btn" width="60px" height="60px"
                           :class="getNinjaClass(i)"
                           :id="getNinjaId(field[i-1])"
                           v-on:click="onClickButton('clicked',getNinjaId(field[i-1]))"
                    >
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

            <v-container class="field-sm hidden-md-and-up">
            <v-row no-gutters>
                <v-col v-bind:key="i" v-for="i in 36">
                    <v-card class="ninja-btn" width="50px" height="50px"
                           :class="getNinjaClass(i)"
                           :id="getNinjaId(field[i-1])"
                           v-on:click="onClickButton('clicked',getNinjaId(field[i-1]))"
                    >
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

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
    .field-lg {
        margin-left: 5vh;
        width: 600px;
    }

    .field-sm {
        width: 350px;
    }

    .ninja-btn {
        background-repeat: no-repeat;
        background-size: contain;
        background-color: ghostwhite;
        border: lightgrey solid 1px;
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