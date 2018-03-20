<template>
    <div>
        <title-page title="Concept" :tabid=1>
            In this section we will learn about the importance of concepting a game.
            <title-button>Continue</title-button>
        </title-page>


        <slide :sid=1>
            <div class="columns">
                <div class="column is-6">
                    <h1 class="title">
                    Come up with an idea!
                    </h1>
                    <h2 class="content">
                        <p>Before diving into the creation of a game, it is important to come up with a unique idea. Without a unique idea it is increadebly hard to stand out from the crowd!</p>
                        <p>See if you can come up with a unique idea for a game! </p>

                        
                        <article class="message is-info">
                            <div class="message-body">
                                <p><i>Use the <b><a href="http://ygd.bafta.org/sites/default/files/uploads/session1ideascapture.pdf" target="_blank">Idea Capture Worksheet</a></b> to help brainstorm your ideas!</i></p>
                            </div>
                        </article>
                        <div class="columns">
                            <div class="column is-hidden-touch">
                                <img src="../assets/imgs/ygd15illustrations01-concept.png">                                
                            </div>
                            <div class="column">
                                <img src="../assets/imgs/ygd15illustrations01-maker.png">
                            </div>
                        </div>
                    </h2>
                </div>
                <div class="column is-6">
                    <idea-generator></idea-generator><!-- Maybe their idea character on mobile? -->
                </div>
            </div>  

            <next-slide slot="foot"></next-slide>    
        </slide>

        <slide :sid=2>
            <div class="columns">
                <div class="column">
                    <youtube title="The Concept" youtubeId="cRcHgvWu1bs">
                        Watch the first episode of YGD Inspired. Once you have understood the importance of concepting, move on to the next section where you will be quizzed!
                    </youtube>
                </div>
            </div>
            <next-slide slot="foot"></next-slide>
        </slide>

        <quiz :sid=3 :qid=0 onComplete="/mechanics"></quiz>
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
