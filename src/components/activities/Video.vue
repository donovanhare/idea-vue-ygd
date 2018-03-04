<template>
    <div>
        <h1 class="title" v-text="title"></h1>
        <h2 class="subtitle">
            <slot></slot>
        </h2>
        <iframe width="100%" height="600" :src="generateYtLink" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>

</template>

<script>
export default {
    props: {
        youtubeId: {
            default: '',
            type: String
        },
        title: {
            default: 'TITLE',
            type: String
        }
    },
    computed: {
        generateYtLink() {
            return "https://www.youtube.com/embed/"+ this.youtubeId +"?rel=0&amp;showinfo=0";
        }
    }
}
</script>

