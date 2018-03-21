<template>
    <div>
        <title-page title="Ready for Launch!" :tabid=0>
            <p>You have already come up with a fantastic new game idea – let’s make it even better!</p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <youtube title="Prepare for takeoff!" youtubeId="3vIaKAE99kw">
                Learn all about marketing and community in this short video!
            </youtube>

            <next-slide slot="foot"></next-slide>
        </slide>

        <slide :sid=2>
            <section class="content is-large">
                <p>In this task we challenge you to look carefully at your game idea and identify any areas in which you think it could improve.</p>
                <p>It can be very tricky to hear feedback on something you have created, so try to focus on what people really enjoyed about your game and how you can use that to make an awesome final product!</p>
            </section>
            <exercise>
                <div class="content">
                <p>Find three different people to whom you can pitch your idea to and make notes on any feedback.
                    <ul>
                        <li>What did the three people like?</li>
                        <li>Were there any areas people struggled to understand?</li>
                        <li>How could you improve on that?</li>
                    </ul>
                </p>
                </div>
            </exercise>
            <next-slide slot="foot"></next-slide>                            
        </slide>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 9);
    }
}
</script>

<style>

</style>
