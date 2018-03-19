<template>
    <section>
        <h5 class="title">Order these games according to sutiability for a target audience of 3-12 years old based off the design.</h5>
        <h5 class="subtitle">Order from most suiteable to least suitable for the 3-12 year age range. Now we know how design can infulence. </h5>
        <draggable class="columns" :options="{draggable:'.column'}" @start="drag=true" @end="drag=false">
            <div class="column" :class="{dragging:drag}">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="../../assets/imgs/sort/AssassinsCreed.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="level">
                            <div class="level-item">
                                <div class="content">
                                Assassins Creed
                                </div>
                            </div>

                            <div class="level-item">

                                <div class="field has-addons">
                                    <p class="control">
                                        <a class="button is-info is-outlined">
                                            <span>3+</span>
                                        </a>
                                    </p>
                                    <p class="control">
                                        <a class="button is-info is-outlined">
                                        <span>9+</span>
                                        </a>
                                    </p>
                                    <p class="control">
                                        <a class="button is-info is-outlined">
                                        <span>18+</span>
                                        </a>
                                    </p>
                                </div>

                            </div>
                        </div>
                        
                    </div>  
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="../../assets/imgs/sort/Sniper.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                        Sniper 2
                        </div>
                    </div>  
                </div>
            </div>
            <div class="column" >
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="../../assets/imgs/sort/TimTheFox.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                        Tim the fox
                        </div>
                    </div>
                </div>  
            </div>
        </draggable>
    </section>
</template>

<script>
export default {
    data() {
        return {
            drag: false,
            cards: [
                {name:''}
            ]
        }
    }
}
</script>

<style>
.card {
    cursor: grab;
}
.dragging {
    background-color: greenyellow;
}
</style>
