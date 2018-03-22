<template>
    <div>
        <title-page title="Ideas" :tabid=1>
            <p>It is time to come up with some exciting new game ideas!</p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <div class="columns">
                <div class="column">
                    <youtube title="YGD Inspired" youtubeId="cRcHgvWu1bs">
                        Let's watch this episode of YGD Inspired series, it will help you on the following sections.
                    </youtube>
                </div>
            </div>
            <next-slide slot="foot"></next-slide>
        </slide>

        <slide :sid=2>
            <section class="content is-medium">
                <p class="title">Idea Generator</p>
                <p class="subtitle">You might already have some fantastic ideas ready but, if not, do not panic – we are here to help!</p>

                <div class="tile is-ancestor">
                    <div class="tile is-8 is-parent">
                        <div class="tile is-child  notification is-dark is-paddingless" style="background-color: #363636;">
                            <idea-generator></idea-generator>
                        </div>
                    </div>
                    <div class="tile is-vertical is-parent">
                        <div class="tile is-child notification is-dark">
                            <p class="title">Play</p>
                            <p class="subtitle">Play the BAFTA YGD Idea Generator and see what new ideas you create.</p>
                            
                            <p>Play as a physical card game:</p>
                            <a class="button" href="http://ygd.bafta.org/sites/default/files/uploads/IdeasGeneratorCards.pdf" target="_blank">
                                Playing Cards
                            </a>
                            <a class="button" href="http://ygd.bafta.org/sites/default/files/uploads/YGDIdeasGenerator.pdf" target="_blank">
                                Rules
                            </a>
                        </div>
                        <div class="tile is-child notification is-dark">
                            <p class="title">Record</p>
                            
                            <p class="subtitle">Record your best ideas using the Idea Capture Worksheet!</p>
                            <p>Download the Capture Worksheet:</p>
                            <a class="button" href="http://ygd.bafta.org/sites/default/files/uploads/session1ideascapture.pdf">Idea Capture Worksheet</a>
                        </div>
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
        this.$store.commit('page', 2);
    }
}
</script>

<style>

</style>
