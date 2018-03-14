<template>
    <div>
        <title-page title="Design" :tabid=2>
            Learn about the creative elements of game design and development.
            <title-button>Continue</title-button>            
        </title-page>
        <slide :sid=1>
            <youtube title="Design" youtubeId="gnyKN7X8bJA">
                The deign process is just as important as any other part of game development. 
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>

        <slide :sid=2>
            <sort-game></sort-game>
            <next-slide slot="foot"></next-slide>            
        </slide>
        
        <slide :sid=3>
            <h5 class="title">Bonus: Download the Design Fact Sheet!</h5>
            <h5 class="subtitle">You can print the sheet off and use it help you in your game development!</h5>
            <a href="http://ygd.bafta.org/sites/default/files/uploads/ygd17factSheet03.pdf" target="_blank" class="button is-dark">Download Design Sheet</a>
            <next-slide slot="foot"></next-slide>            
        </slide>
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
