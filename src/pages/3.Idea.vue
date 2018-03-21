<template>
    <div>
        <title-page title="Ideas" :tabid=0>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <div class="columns">
                <div class="column">
                    <youtube title="YGD Inspired" youtubeId="cRcHgvWu1bs">
                        lLet's watch this episode of YGD Inspired series, it will help you on the following sections.
                    </youtube>
                </div>
            </div>
            <next-slide slot="foot"></next-slide>
        </slide>

        <slide :sid=2>
            <section class="content is-large">
                <p>
                    *IDEA GENERATOR*
                    (Downloadable versions of the cards can be found here: http://ygd.bafta.org/sites/default/files/uploads/IdeasGeneratorCards.pdf
                    Rules for playing as a card game:
                    http://ygd.bafta.org/sites/default/files/uploads/YGDIdeasGenerator.pdf )
                </p>
                <p>It is time to come up with some exciting new game ideas!</p>
                
                <p>You might already have some fantastic ideas ready but, if not, do not panic – we are here to help! </p>
                <p>Play the BAFTA YGD Idea Generator and see what new ideas you create. Record your best ideas using the Idea Capture Worksheet!</p>
                <a href="http://ygd.bafta.org/sites/default/files/uploads/session1ideascapture.pdf">Idea Capture Worksheet</a>
            </section>
            <next-slide slot="foot"></next-slide>                            
        </slide>
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
