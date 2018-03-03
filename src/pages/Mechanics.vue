<template>
    <div>
        <title-page title="Game Systems" :pid=2>
            Learn about Goals, Challenges & Rewards in a game.
            <title-button>Continue</title-button>            
        </title-page>
        <slide :sid=1>
            <div class="columns">
                <div class="column">
                    <h1 class="title">Game Systems</h1>
                    <h2 class="subtitle">
                        In this module, there are two videos for you to watch! The first of which will teach you about the design element of game creation, the second is about the programming and mechanics behind games.
                    </h2>
                    <iframe width="100%" height="600" src="https://www.youtube.com/embed/gnyKN7X8bJA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>

            <next-slide slot="foot"></next-slide>
        </slide>
        <slide :sid=2>
            <div class="columns">
                <div class="column">
                    <h1 class="title">Game Systems</h1>
                    <h2 class="subtitle">
                        In this episode of YGD Inspired we will learn about the programming and mechanics behind games. Pay attention, in the next section you will be quized!
                    </h2>
                    <iframe width="100%" height="600" src="https://www.youtube.com/embed/2zFGVJafHd4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>

            <next-slide slot="foot"></next-slide>
        </slide>
        <quiz :qid=1 v-if="currentSlide(2)"></quiz>
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
