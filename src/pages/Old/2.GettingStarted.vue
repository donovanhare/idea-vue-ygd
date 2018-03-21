<template>
    <div>
        <title-page title="Getting Started" :tabid=0>
            <p>First, we will get you up to speed with games.</p>
            <title-button>Continue</title-button>                        
        </title-page>

        <slide :sid=1>
            <section class="container">
                <div class="columns">
                    <div class="column">
                        <h1 class="title">
                            What is a game?
                        </h1>
                        <h2 class="content">
                            <p>A game is an activity done for fun. You can play a game by yourself or with a team, games usually have a set of rules that need to be followed.</p>

                            <p>
                                Games come in many different forms, in this badge we will focus on video games. 
                                Video games are played using a digital platform such as a games console. Do remember that there are other types of games including board games and card games.</p>
                        </h2>
                    </div>
                    <div class="column">
                    <img src="../assets/imgs/controller.png" alt="">
                    </div>
                </div>    
            </section>

            <section class="container">
                <div class="columns">
                    <div class="column">
                        <img src="../assets/imgs/109OdMg.png" alt="">
                    </div>
                    <div class="column">
                        <h1 class="title">
                            What makes a good game?
                        </h1>
                        <h2 class="content">
                            <p>Everyone has their own opinion about what makes a good game. But a game usually needs good graphics, interesting stories, characters and nice music to make it enjoyable. </p>
                            <p>Other aspects that are important include gameplay, difficulty, feedback.</p>
                        </h2>
                    </div>
                </div>
            </section>

            <next-slide slot="foot"></next-slide>                
        </slide>

        <slide :sid=2>

            <h5 class="title">What is a platform?</h5>
            <p class="subtitle">The <i>platform</i>, sometime referred to as <i>game platform</i>, is the term used to refer to the device on which a game is played. There are three distinct platforms in digital gaming, they are console, mobile and PC. Each platform differs drastically, offering players unique gaming experiences.</p>
            <br>
            <h5 class="title">What is an audience?</h5>
            <p class="subtitle">Audience simply refers to the people that play a game, just like a film's audience are the people watching the film!</p>
            <br>
            <h5 class="title">What are game mechanics?</h5>
            <p class="subtitle">A game’s core mechanic is the action of play: the activity players do over and over again in the game, like jumping, collecting, flying, or shooting.</p>
            <br>
            
            
            <next-slide slot="foot"></next-slide>
        </slide>

        <!-- <slide :sid=3>
            <h5 class="title">Platforms</h5>            
            <p class="subtitle">When concepting a game, you need to think about the platform that it will be played on. The platform the game is designed for can have a huge effect on the game produced. </p>
            <p class="subtitle">Below is some more information on each platform category, take some time to read through the information, you may need it later on! </p>
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child ">
                        <h6 class="title">Mobile <span class="tag is-light is-pulled-right">Apple/Andriod</span></h6>
                        <p>Mobile gaming is now the most popular way to play games. The popularity is largely down to portability, affordability & availability of content (games).  Mobiles also benefit from features such as GPS, cameras, & gyroscopes all of which can be used to provide an interesting gaming experience. </p>
                        <br><p>An example of a game that uses all three of those features is <b>Pokémon Go</b> which is a worldwide mega hit on this platform.</p>
                        
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child ">
                        <h6 class="title">Console <span class="tag is-light is-pulled-right">PS4/Xbox One</span></h6>                    
                        <p>Another extremely popular platform to play games on. With standardised hardware, and huge online networks, console games are guaranteed to. Console further benefit from exclusive content. i.e last of us PS4</p>
                        
                    </article>
                </div>
                
                <div class="tile is-parent">
                    <article class="tile is-child ">
                        <h6 class="title">PC <span class="tag is-light is-pulled-right">Alienware</span></h6>                    
                        <p>Higher barrier to entry but can provide a superior gaming experience in terms of graphics and controls. PCs can be many times more powerful than a console, but can be very expensive. The mouse and keyboard generally provide greater control over game mechanics.</p>
                        
                    </article>
                </div>
            </div>

            <next-slide slot="foot"></next-slide>            
        </slide> -->

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
