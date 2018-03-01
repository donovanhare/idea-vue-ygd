<template>
    <div>
        <title-page title="Getting Started" :pid=0>
            <p>First we will get you up to speed with games.</p>
            <title-button>Continue</title-button>                        
        </title-page>

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
                    </div>
                </div>    
            </section>

            <section class="container">
                <div class="columns">
                    <div class="column">
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

            <next-slide slot="foot"></next-slide>                
        </slide>

            <div class="columns">
                <div class="column is-6">
                    <h1 class="title">
                    Idea
                    </h1>
                    <h2 class="content">
                        <p>Before diving into the creation of a game, it is important to come up with a unique idea. Without a unique idea it is increadebly hard to stand out from the crowd!</p>
                        <p>See if you can come up with a unique idea for a game! <span class="is-hidden-touch">Try using the idea generator! Once you have come up with an idea, you are ready to move on to the next section!</span></p>
                    </h2>
                </div>
                <div class="column is-6">
                    <idea-generator></idea-generator><!-- Maybe their idea character on mobile? -->
                </div>
            </div>  

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
