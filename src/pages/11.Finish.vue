<template>
  <div>
        <title-page title="Finish!" :tabid=6>
            Congratulations for making it to the end of the BAFTA Young Game Designer iDEA pathway! You are now ready to embark on the a game making adventure. Click <a>HERE</a> to find out more about the BAFTA's YGD awards. 
            <title-button>Claim points on iDEA</title-button>            
        </title-page>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 10);
        this.$store.dispatch('postResult', 'pass');                
    }
}
</script>

<style>

</style>
