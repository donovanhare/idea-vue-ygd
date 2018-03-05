<template>
    <section>
        <h5 class="title">Order these games according to sutiability for a target audience of 3-12 years old based off the design.</h5>
        <h5 class="subtitle">Order from most suiteable to least suitable for the 3-12 year age range. Now we know how design can infulence. </h5>
        <draggable class="columns" :options="{draggable:'.column'}" @start="drag=true" @end="drag=false">
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://ubistatic19-a.akamaihd.net/resource/en-au/game/news/assassins-creed/ac-origins/acr_keyart_1920x1080-logo_294484.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                        Assassins Creed
                        </div>
                    </div>  
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="http://cdn.miscellaneoushi.com/1920x1200/20121023/video%20games%20sniper%20elite%202%201920x1200%20wallpaper_www.miscellaneoushi.com_33.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                        Sniper 2
                        </div>
                    </div>  
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="http://www.vizz.co/wp-content/uploads/2014/12/Tim-the-Fox-Jigsaw-Puzzle-Game-for-Kids-805x450.jpg" alt="Placeholder image">
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

}
</script>

<style>

</style>
