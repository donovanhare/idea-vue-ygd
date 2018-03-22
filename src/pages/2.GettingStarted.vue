<template>
    <div>
        <title-page title="Getting Started" :tabid=0>
            <p>Let’s start at the very beginning!</p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <section class="container">
                <h1 class="title">
                    What makes the games we enjoy playing so much fun?
                </h1>
                <h2 class="content is-medium">
                    <p>
                        Think about games that you already enjoy playing:
                        <ul>
                            <li>What is the objective of the game?</li>
                            <li>Who is the target audience?</li>
                            <li>Why is it fun?</li>
                        </ul>
                    </p>

                    <p>
                        Different types of games are played on different platforms (Desktop, Console, Mobile/Tablet). <br>
                        Think of three very different games across different types platform and compare them using the points above. <br>
                        
                        
    
                    </p>
                    <exercise>
                        <p>Now download and complete the <a href="http://ygd.bafta.org/sites/default/files/uploads/YGDworksheet-session2task.pdf" target="_blank"><b>Game Remix Worksheet</b></a>, blending the three games together to see if you can create a completely new idea!</p>
                        
                    </exercise>
                </h2>
                <tip class="content">
                    <p>BAFTA YGD Games Glossary: Unsure what a game term or word means? See if you can find a definition here with our useful <a href="http://ygd.bafta.org/sites/default/files/uploads/ygd17glossary02.pdf"><b>Games Glossary</b></a></p>
                    
                </tip>
            </section>
            <next-slide slot="foot"></next-slide>                
            
        </slide>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 1);
    }
}
</script>

<style>

</style>
