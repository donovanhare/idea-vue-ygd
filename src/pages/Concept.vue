<template>
    <div>
        <section class="hero is-info is-fullheight is-bold">
            <div class="hero-head">
                <banner></banner>
                <tabs selected="1"></tabs>          
            </div>
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    Concept
                </h1>
                <h2 class="subtitle">
                    In this section we will learn about the importance of concepting a game.<br><br>
                    Step 1/6
                </h2>
                    <a class="button is-dark is-medium animated bounceIn" href="#step1" v-smooth-scroll>Continue</a>            
                </div>
            </div>
        </section>


        <section class="hero is-info is-fullheight is-bold" id="step1">
            <div class="hero-body">
                <div class="container">

                    <section class="container">
                        <div class="columns">
                            <div class="column">
                                <h1 class="title">
                                What is a game?
                                </h1>
                                <h2 class="content">
                                    <p>A game is something that people do for fun. It is different from work. In many games, people play against other people.</p>

                                <p>There are different kinds of games. For example, in video games, people often use controllers to control what happens on a screen, such as a television screens. 
                                    In board games, players often move pieces on a flat surface called a board. In card games, players use playing cards.</p>
                                </h2>
                            </div>
                            <div class="column">
                            <img src="https://allaboutonline.co.uk/wp-content/uploads/2016/06/AllAbout_ic_Game-Dev.png" alt="">
                            </div>
                        </div>    
                    </section>

                    <section class="container">
                        <div class="columns">
                            <div class="column">
                                <img src="https://i.imgur.com/109OdMg.png" alt="">
                            </div>
                            <div class="column">
                                <h1 class="title">
                                    What makes a good game?
                                </h1>
                                <h2 class="content">        
                                    <p>There are different kinds of games. For example, in video games, people often use controllers to control what happens on a screen, such as a television screens. 
                                    In board games, players often move pieces on a flat surface called a board. In card games, players use playing cards.</p>
                                </h2>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="hero-foot">

                <div class="has-text-centered">
                    <a class="button is-large is-dark animated bounceIn" href="#step1-2" v-smooth-scroll>
                        <span class="icon is-medium">
                            <i class="fas fa-angle-down fa-2x"></i>
                        </span>
                    </a>
                </div>

            </div>
        </section>

        <quiz :qid=1 onCompleted="/gcr"></quiz>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
