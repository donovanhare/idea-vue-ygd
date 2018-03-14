<template>
    <slide>
        <div slot="head">
            <banner></banner>
            <tabs selected="0"></tabs>
        </div>

        <div class="box animated fadeIn" style="background-color: rgba(0,0,0,0.1)">              
            <h1 class="title has-text-centered">Game Concept</h1>
            <p class="subtitle has-text-centered">
            Welcome to the <strong>BAFTA Young Game Designers</strong> iDEA pathway!
            </p>
            <p class="content">
                We are delighted that you are interested in learning more about game design and cannot wait to see all of the fantastic new ideas you create.
                <!-- You are about to embark on the <strong>YGD Game Concept Badge</strong>!  -->
                <br/><br/>This badge has a number of activities for you to complete, don't worry if you have to leave the badge, your progress will be saved.
                <br/><br/>There is lots to learn, in this badge you will...
                <ul>
                    <li>Build a solid understanding as to what game development is.</li>
                    <li>Learn key terms associate with game development.</li>
                    <li>Learn why games are made how they are.</li>
                    <li>Be ready to plan your game for YGD 2018!</li>
                </ul>

            </p>
            <div class="has-text-centered">
                <title-button>Start Badge</title-button>
            </div>
        </div>

        <div slot="foot">
            <div class="image has-text-centered">
                <img src="../assets/imgs/banner-PalaceSkyline.svg" alt="">
            </div>
        </div>
    </slide>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 0);
    },
}
</script>

<style>
.box {
    color:white;
}
</style>
