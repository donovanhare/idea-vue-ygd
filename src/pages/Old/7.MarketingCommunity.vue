<template>
  <div>
        <title-page title="Marketing & Community" :tabid=5>
            Learn the importance of marketing and the benefits of building a strong community.  
            <title-button>Continue</title-button>            
        </title-page>

        <slide :sid=1>
            <youtube title="Prepare for takeoff!" youtubeId="3vIaKAE99kw">
                Learn all about marketing and community in this short video!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>

        <quiz :sid=2 :qid=3 onComplete="/finish"></quiz>        
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 6);
    }
}
</script>

<style>

</style>
