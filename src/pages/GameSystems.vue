<template>
    <div>
        <title-page title="Game Systems" :tabid=2>
            Learn about Goals, Challenges & Rewards in a game.
            <title-button>Continue</title-button>            
        </title-page>
        <slide :sid=1>
            <youtube title="Design" youtubeId="gnyKN7X8bJA">
                The deign process is just as important as the 
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>

        <slide :sid=2>
            <sort-game></sort-game>
            <next-slide slot="foot"></next-slide>            
        </slide>

        <slide :sid=3>
            <h5 class="title">Bonus: Download the Design Factsheet!</h5>
            <h5 class="subtitle">You can print the sheet off and use it help you in your game development!</h5>
            <a href="http://ygd.bafta.org/sites/default/files/uploads/ygd17factSheet03.pdf" target="_blank" class="button is-dark">Download Design Sheet</a>
            <next-slide slot="foot"></next-slide>            
        </slide>

        <slide :sid=4>
            <youtube title="Game Systems" youtubeId="2zFGVJafHd4">
                In this episode of YGD Inspired we will learn about the programming and mechanics behind games. Pay attention, in the next section you will be quized!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>
        <quiz :sid=5 :qid=1></quiz>
    </div>

</template>

<script>
export default {    
    mounted() {
        this.$store.commit('page', 3);
    }
}
</script>

<style>

</style>
