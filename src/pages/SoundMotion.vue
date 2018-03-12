<template>
  <div>
        <title-page title="Sound in motion" :tabid=4>
            Learn how sound plays a part in games.
            <title-button>Continue</title-button>            
        </title-page>

        <slide :sid=1>
            <youtube title="Sound in montion" youtubeId="70crSlVGMRQ">
                Sound is one of the most important aspects of any game. Without it, games simply wouldn't be the same - find out more in this short video!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 5);
    }
}
</script>

<style>

</style>
