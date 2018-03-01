<template>
    <div>
        <title-page title="Mechanics" :pid=2>
            Learn about Goals, Challenges & Rewards in a game.
            <title-button>Continue</title-button>            
        </title-page>
        <quiz :qid=1 v-if="currentSlide(0)"></quiz>
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
