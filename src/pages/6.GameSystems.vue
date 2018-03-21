<template>
    <div>
        <title-page title="Game Systems" :tabid=0>
            <p>It is time to get a bit more technical and decide on how you want your game to work.  </p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <youtube title="Game Systems" youtubeId="2zFGVJafHd4">
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>

        <slide :sid=2>
            <section class="content is-large">
                <p>
                    You should have some idea what your game will look like and what players need to do, but now is the perfect time to start considering how your game will be played. 
                    <ul>
                        <li>On what platform will your game be played? Desktop (PC), Console (PS4, Xbox, Nintendo Switch, VR Headset) or Mobile/Tablet (Phone, iPad)?</li>
                        <li>What buttons/movements/instructions will players have to press or follow in order to play your game?</li>
                    </ul>
                </p>
            </section>
            <next-slide slot="foot"></next-slide>                            
        </slide>

        <slide :sid=3>
            <exercise>
                <p>Using the <a href="http://ygd.bafta.org/sites/default/files/uploads/session4conceptandlevel.pdf">Interaction Table</a> on the <a>Concept & Level Design Worksheet</a>.</p>
                <p><br>Fill in the table. On the left hand side you want to state what happens ‘when’ the player does something in your game (an ‘event’) and on the right hand side you want to fill in what the game ‘does’, how it responds to this event (the ‘action).</p>
                <p><br>For example, when the player presses the <b>Space Bar</b>, the main character <b>Jumps</b>. </p>
                <p><br><i>Hold off filling in the rest of the worksheet, as that will be part of your next task!</i></p>
            </exercise>
            <tip>
                Think about how you would play through the first minute (60 seconds) of your game. What instructions does the player need? What do they see? How do they play?  
            </tip>
            <next-slide slot="foot"></next-slide> 
        </slide>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 5);
    }
}
</script>

<style>

</style>
