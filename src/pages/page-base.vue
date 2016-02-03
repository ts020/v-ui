<template>
    <div class="page-base">
        <md-toolbar>
            <slot name="left"></slot>
            <slot name="title"></slot>
            <slot name="right"></slot>
        </md-toolbar>
        <block>
            <slot></slot>
        </block>
    </div>
</template>

<!--suppress CssInvalidPropertyValue -->
<style scoped lang="stylus">
    @import "../../style/_val.styl";
    .block {
        padding-top: margin-def;
        width: 100%;

    }
</style>

<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "md-toolbar" : require("./../../components/md-toolbar.vue"),
            block : require("../../components/block.vue")
        }
    }
</script>
