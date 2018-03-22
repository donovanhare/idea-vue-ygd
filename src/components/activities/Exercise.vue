<template>
    <article class="message is-primary">
        <div class="message-header">
            Exercise
            <button class="delete" aria-label="delete" @click="show = !show"></button>
        </div>
        <div class="message-body" v-if="show">
            <slot></slot>            
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<style>

</style>
