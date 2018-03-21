<template>
    <div>
        <title-page title="Sound in Motion" :tabid=0>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <section class="content is-large">
                <p>In this task we challenge you to think about what your game would sound like. 
                    <ul>
                        <li>How would moving around in your game environment change the sounds your player would hear?</li>
                    </ul>
                </p>
                <p>Ready to see just how much sound influences games? Pick your favourite game and play through with the sound turned off:
                    <ul>
                        <li>How does it feel?</li>
                    </ul>
                </p>
                <p>Now try playing the same game with your eyes closed (and sounds on): 
                    <ul>
                        <li>What can you hear?</li>
                        <li>Can you still play the game?</li>
                    </ul>
                </p>
            </section>
            <next-slide slot="foot"></next-slide>                            
        </slide>

        <slide :sid=2>
            <youtube title="Sound in motion" youtubeId="70crSlVGMRQ">
                Find out more in this short video, then complete the quiz that follows!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>

        <quiz :sid=3 :qid=2></quiz>
        
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
