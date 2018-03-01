<template>
    <section class="hero is-fullheight is-info is-bold">
        <div class="hero-head">
            <banner></banner>
            <tabs selected="0"></tabs>
        </div>
        <div class="hero-body">
            <div class="container">
                <div class="box animated fadeIn" style="background-color: rgba(0,0,0,0.1)">              
                    <h1 class="title has-text-centered">Game Concept</h1>
                    <p class="subtitle">
                    Welcome !
                    </p>
                    <p class="subtitle">
                        Welcome to the <strong>BAFTA Young Game Designers</strong> iDEA pathway! We are delighted that you are interested in learning more about game design and cannot wait to see all of the fantastic new ideas you create.
                        <!-- You are about to embark on the <strong>YGD Game Concept Badge</strong>!  -->
                        <br/><br/>This badge has a number of activities for you to complete, don't worry if you have to leave the badge - your progress will be saved.

                    </p>
                    <div class="has-text-centered">
                        <title-button>Start Badge</title-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-foot">
            
            <div class="image has-text-centered">
                <img src="../assets/imgs/banner-PalaceSkyline.svg" alt="">
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 0);
    },
}
</script>

<style>

</style>
