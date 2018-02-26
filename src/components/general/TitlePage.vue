<template>
    <section class="hero is-info is-fullheight is-bold">
        <div class="hero-head">
            <banner></banner>
            <tabs :selected="pid"></tabs>          
        </div>
        <div class="hero-body">
            <div class="container">
                <h1 class="title" v-text="title"></h1>
                <h2 class="subtitle">
                    <slot></slot>
                </h2>
                <a class="button is-dark is-medium animated bounceIn" href="#step1" v-smooth-scroll>Continue</a>            
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'pid']
}
</script>

<style>

</style>
