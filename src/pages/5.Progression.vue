<template>
    <div>
        <title-page title="Progression" :tabid=2>
            <p>Now that you have a great new game idea it is time to consider how your game will progress in difficulty.</p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <section class="content is-large">
            <div class="columns">
                <div class="column">
                    <p>If you make your game too difficult at the start then players might be discouraged from continuing to play.</p>
                </div>
                <div class="column">
                    <exercise>
                        Look at the <a href="http://ygd.bafta.org/sites/default/files/uploads/session4progressionchart.pdf">Progression Chart</a> and try filling in the spaces to show how the different elements of your game might progress. The left hand column has been left for you to choose which elements to include, as games can differ vastly in regards to what changes as a player continues to play.  
                    </exercise>
                </div>
            </div>
            </section>
            
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
