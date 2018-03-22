<template>
  <div>
        <title-page title="Recap & Enter the Competition!" :tabid=6>
            <div class="content">
                <p>Congratulations! You have taken an idea right from its very beginning and worked it into an exciting new game proposal.</p>
                
                <title-button>Continue</title-button>                        
                
            </div>
        </title-page>
        <slide :sid=1>
            <div class="content is-medium">
                <p class="title">Review</p>
                <p>
                    This is already a fantastic achievement and it does not stop here. Think about all the new things you have learned on your journey with this particular project. 
                    What might you do different the next time you get a great Game idea? You might want to continue working on this idea further or you might want to start a brand new adventure and explore a different design.
                </p>
                <p>Let’s review your game design process from start to finish:
                    <ul>
                        <li>What did you find easy/difficult?</li>
                        <li>Could you improve further on your final design if you had more time?</li>
                        <li>What new skills have you developed? </li>
                        <li>What would you do differently when working on a new game design?</li>
                    </ul>
                </p>
            </div>
            <next-slide slot="foot"></next-slide>                            
        </slide>

        <slide :sid=2>

            <title-button>Claim points on iDEA</title-button>
        </slide>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('page', 10);
        this.$store.dispatch('postResult', 'pass');                
    }
}
</script>

<style>

</style>
