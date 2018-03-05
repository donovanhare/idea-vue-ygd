<template>
    <div>
        <title-page title="Concept" :pid=1>
            In this section we will learn about the importance of concepting a game.
            <title-button>Continue</title-button>
        </title-page>

        <slide :sid=1>
            <div class="columns">
                <div class="column">
                    <youtube title="The Concept" youtubeId="cRcHgvWu1bs">
                        Watch the first episode of YGD Inspired. Once you have understood the importance of concepting, move on to the next section where you will be quized!
                    </youtube>
                </div>
            </div>
            <next-slide slot="foot"></next-slide>
        </slide>

        <quiz :sid=2 :qid=0 onComplete="/mechanics"></quiz>
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
