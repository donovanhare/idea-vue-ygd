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
                'Getting Started',
                'Concept',
                'Design',
                'Systems',
                'Sound & Motion',
                'Marketing & Community',
                'Finish'
            ]
        }
    }
}
</script>

<style>
.is-active {
    border-radius: 0px;
}
</style>
