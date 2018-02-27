<template>
    <a class="button is-dark is-medium animated bounceIn" :href="link" v-smooth-scroll><slot></slot></a>            
</template>

<script>
export default {
    props: ['link']
}
</script>

<style>

</style>
