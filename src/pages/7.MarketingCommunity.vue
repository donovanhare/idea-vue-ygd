<template>
  <div>
        <title-page title="Marketing & Community" :tabid=5>
            Learn the importance of marketing and the benefits of building a strong community.  
            <title-button>Continue</title-button>            
        </title-page>

        <slide :sid=1>
            <youtube title="Sound in montion" youtubeId="3vIaKAE99kw">
                Sound is one of the most important aspects of any game. Without it, games simply wouldn't be the same - find out more in this short video!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>
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
