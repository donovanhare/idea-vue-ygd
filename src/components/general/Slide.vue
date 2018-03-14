<template>
    <section class="hero is-info is-fullheight is-bold" v-if="currentSlide(sid)">
        <div class="hero-head">
            <slot name="head"></slot>
        </div>        
        <div class="hero-body">
            <div class="container">
                <slot></slot>
            </div>
        </div>
        <div class="hero-foot">
            <slot name="foot"></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        sid: {
            type: Number,
            default: 0
        }
    }

}
</script>

<style>
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE Polyfill for hero footer */
    .is-fullheight {
        height: 100vh;
    }

    .hero-content {
        align-items: center;
    }
     
}
</style>
