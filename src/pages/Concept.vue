<template>
    <div>
        <title-page title="Concept" :pid=1>
            In this section we will learn about the importance of concepting a game.
            <title-button>Continue</title-button>
        </title-page>
        <slide :sid=1>
            <div class="columns">
                <div class="column">
                    <h1 class="title">The Concept</h1>
                    <h2 class="subtitle">
                        Watch the first episode of YGD Inspired. Once you have understood the importance of concepting, move on to the next section where you will be quized!
                    </h2>
                    <iframe width="100%" height="600" src="https://www.youtube.com/embed/cRcHgvWu1bs?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>

            <next-slide slot="foot"></next-slide>
        </slide>

        <quiz :qid=0 onComplete="/mechanics" v-if="currentSlide(2)"></quiz>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 2);
    }
}
</script>

<style>

</style>
