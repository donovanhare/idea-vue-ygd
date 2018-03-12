<template>
  <div>
        <title-page title="Finish!" :tabid=6>
            Congratulations for making it to the end of the BAFTA YGD iDEA pathway! You are now ready to embark on the a game making adventure. Why not enter the YGD competition...blah
            <title-button>Claim points on iDEA</title-button>            
        </title-page>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 7);
    }
}
</script>

<style>

</style>
