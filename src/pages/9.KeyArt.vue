<template>
    <div>
        <title-page title="Key Art" :tabid=0>
            <p>In this task you will think about how you might package your game.</p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <section class="content is-large">
                <p>A game brand can be very powerful in encouraging players to want to play your game. </p>
            </section>
            <hr>
            <exercise>
                <p>Using the <a href="http://ygd.bafta.org/sites/default/files/uploads/session6keyart.pdf">Key Art Worksheet:</a></p><br/>
                <p>Design some <b>Key Art</b> for your game (this might be a physical game box that you see in a shop or the artwork that would appear on an online store landing page).</p></br>
                <p>Design a <b>Game Icon</b> for your game to show how it would appear for an online store purchase or App download.</p>
            </exercise>
            <next-slide slot="foot"></next-slide>                            
        </slide>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 8);
    }
}
</script>

<style>

</style>
