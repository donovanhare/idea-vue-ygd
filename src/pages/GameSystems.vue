<template>
    <div>
        <title-page title="Game Systems" :pid=2>
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
            <youtube title="Game Systems" youtubeId="2zFGVJafHd4">
                In this episode of YGD Inspired we will learn about the programming and mechanics behind games. Pay attention, in the next section you will be quized!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>
        <quiz :sid=3 :qid=1></quiz>
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
