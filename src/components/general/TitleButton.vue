<template>
    <div>
        <br>
        <a class="button is-dark is-medium animated bounceIn" :href="link" @click.once="nextStep"><slot></slot></a>            
    </div>
</template>

<script>
export default {
    props: ['link']
}
</script>

<style>

</style>
