<template>
    <div>
        <title-page title="Game Systems" :tabid=3>
            Learn about Goals, Challenges & Rewards in a game.
            <title-button>Continue</title-button>            
        </title-page>

        <slide :sid=1>
            <youtube title="Game Systems" youtubeId="2zFGVJafHd4">
                In this episode of YGD Inspired we will learn about the programming and mechanics behind games. Pay attention, in the next section you will be quized!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>
        <quiz :sid=2 :qid=1></quiz>
    </div>

</template>

<script>
export default {    
    mounted() {
        this.$store.commit('page', 4);
    }
}
</script>

<style>

</style>
