<template>
    <section class="hero is-info is-fullheight is-bold" id="step1" v-if="currentSlide(sid)">
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

</style>
