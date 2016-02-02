<style scoped>
    .collapsible {
        background-color: white;
        position: relative;
        border: 1px solid rgba(32, 42, 49, 0.1);
        padding: 20px;
        font-weight: 400;
        text-align: left;
        display: block;
        margin-bottom: 1em;
    }

    .collapsible > .fa-angle-down {
        position: absolute;
        left: 50%;
        bottom: -0.75em;
        margin-left: -0.75em;
        font-weight: 100;
        border: 1px solid #91c0d4;
        background-color: white;
        width: 1.5em;
        line-height: 1.5em;
        text-align: center;
        border-radius: 1.5em;
    }

    .collapsible > .title {
        font-weight: 800;
        text-align: center;
        text-transform: uppercase;
    }

    .collapsible > .title > i {
        margin-left: 5px;
    }

    .collapsible > .content {
        padding-top: 10px;
        display: none;
    }

    .collapsible.open > .content {
        display: block;
    }

    .collapsible:last-child {
        margin-bottom: 0
    }

    .collapsible.no-icon:after {
        display: none;
    }
</style>

<template lang="jade" type="text/jade">
.collapsible(v-class="open:isShow")
    .title(v-on="click: isShow = !isShow") {{title}}
        i.fa(v-class="fa-angle-down:!isShow, fa-angle-up:isShow")
    .content
        content
</template>
<script lang="babel" type="text/ecmascript-6">
    export default {
        props: ['isShow', 'title']
    }
</script>
