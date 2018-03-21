<template>
    <div>
        <title-page title="Goals, Challenges & Rewards" :tabid=0>
            <title-button>Continue</title-button>                        
        </title-page>
        
        <slide :sid=1>
            <youtube title="Discovering Design" youtubeId="gnyKN7X8bJA">
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>

        <slide :sid=2>
            <section class="content is-large">
                <p>It is time to decide which of the game ideas from your research in Task 2 you want to start to develop further. </p>
                <p>
                    Pick which idea you would most like to play and answer the following questions:
                    <ul>
                        <li>What will be the <b>Core Mechanic(s)</b> of your game?</li>
                        <li>Who will be your <b>Target Audience</b>?</li>
                        <li>What makes your game <b>different</b> to other games currently on the market?</li>
                    </ul>
                </p>
                <hr>
                <p>
                    Think carefully about the different <b>goals</b>, <b>challenges</b> and <b>rewards</b> that might be on offer in your game. 
                    <ul>
                        <li>Who (or what) do you play as?</li>
                        <li>Are there any useable objects or collectibles?</li>
                        <li>How do players ‘win’?</li>
                    </ul>
                </p>
                <p>The next section is a quiz, you might like to refer to the <a href="http://ygd.bafta.org/sites/default/files/uploads/ygd17factSheet03.pdf"><b>Design Fact Sheet</b></a>.</p>
            </section>
            <next-slide slot="foot"></next-slide>                            
        </slide>
        
        <quiz :sid=3 :qid=1></quiz>
        
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
