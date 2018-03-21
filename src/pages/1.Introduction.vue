<template>
    <slide>
        <div slot="head">
            <banner></banner>
            <tabs selected="-1"></tabs>
        </div>

        <div class="box animated fadeIn" style="background-color: rgba(0,0,0,0.1)">              
            <h1 class="title has-text-centered">Game Concept</h1>
            <p class="subtitle has-text-centered">
            Welcome to the <strong>BAFTA Young Game Designers</strong> iDEA pathway!
            </p>
            <p class="content">
                <p>We are delighted that you are interested in learning more about Game Design and cannot wait to see all of the fantastic new ideas you create. </p>

                <br><p>The Game Concept Pathway introduces you to ideas on the creative processes involved in designing a new game. Follow our ten tasks, collecting points and badges along the way as we take you through some top tips on how to create and present a great game idea.</p> 

                <br><p>At the end of the 10 tasks you will be invited to earn an additional limited edition badge by entering the BAFTA Young Game Designers 2018 Competition (http://ygd.bafta.org) and getting your ideas put in front of top game industry professionals!*</p>
                <p>All of the tasks you complete in the Game Concept Pathway, including the worksheets, can be entered as ‘supporting materials’ in the BAFTA YGD competition.</p>

                <br><p>We are delighted that you are interested in learning more about game design and cannot wait to see all of the fantastic new ideas you create.</p>

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
        this.$store.dispatch('getUser');        
        this.$store.commit('page', 0);
    },
}
</script>

<style>
.box {
    color:white;
}
</style>
