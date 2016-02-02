<style scoped lang="stylus">
    a.box-link {
        background-repeat: no-repeat;
        background-size : cover;
        background-position: center center;
        position: relative;
        min-height: 150px;
        display: table;
        width: 100%;
    }

    a.box-link:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.32);
        z-index: 2;
    }

    a.box-link > .container {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        z-index: 1;
    }

    a.box-link > .container > .content {
        color : white;
        border: 2px solid;
        padding: 10px 15px;
        display: inline-block;
        position: relative;
        z-index: 3;
        text-transform: uppercase;
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: 800;
        font-size: 150%;
    }
</style>

<template lang="jade">
a.box-link(href="{{href}}", :style="{'background-image': 'url(' + image + ')'}")
    .container
        .content
            slot
</template>

<script lang="babel" type="text/ecmascript-6">
    export default {
        props: ['image', 'href']
    }
</script>
