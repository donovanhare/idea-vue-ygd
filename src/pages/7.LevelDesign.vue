<template>
    <div>
        <title-page title="Concept & Level Design" :tabid=3>
            <p>It is time to break out the colouring pens and pencils or load up your favourite computer art programme to fill in the rest of the Concept and Level Design Worksheet.</p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <section class="content is-medium">
                <p>Think carefully about how your game will look whilst it is on-screen. </p>
                <p>Why not consider the other sorts of images you could produce?:
                    <ul>
                        <li>Designing a level (show us how your game will look when you are playing).</li>
                        <li>Character ideas.</li>
                        <li>Drawing a controller to show the controls your game will use.</li>
                        <li>Using a diagram or key to show game design.</li>
                        <li>Building a model of your game idea and taking a picture of it to upload.</li>
                    </ul>
                </p>
            </section>

            <exercise>
                Complete the <a href="http://ygd.bafta.org/sites/default/files/uploads/session4conceptandlevel.pdf">Concept & Level Design Worksheet</a> to show what your idea will look like when it is being played on a screen.
            </exercise>
            <next-slide slot="foot"></next-slide>                            
        </slide>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 6);
    }
}
</script>

<style>

</style>
