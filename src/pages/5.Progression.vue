<template>
    <div>
        <title-page title="Progression" :tabid=0>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <section class="content is-large">
                <p>Now that you have a great new game idea it is time to consider how your game will progress in difficulty. </p>
                <p>If you make your game too difficult at the start then players might be discouraged from continuing to play.</p>
            </section>
            <exercise>
                Look at the <a href="http://ygd.bafta.org/sites/default/files/uploads/session4progressionchart.pdf">Progression Chart</a> and try filling in the spaces to show how the different elements of your game might progress. The left hand column has been left for you to choose which elements to include, as games can differ vastly in regards to what changes as a player continues to play.  
            </exercise>
            
            <next-slide slot="foot"></next-slide>                            
        </slide>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 4);
    }
}
</script>

<style>

</style>
