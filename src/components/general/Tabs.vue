<template>
    <nav class="tabs is-boxed is-fullwidth">
        <ul>
            <li v-for="(section, index) in sections" :key="index" :class="{'is-active': index == selected}"><a v-text="section"></a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['selected'],
    data() {
        return {
            sections: [
                'Introduction',
                'Concept',
                'Goals, Challenges & Rewards',
                'Progression',
                'User Expereience',
                'Art, Level & Sound Design',
                'Finish'
            ]
        }
    }
}
</script>

<style>

</style>
