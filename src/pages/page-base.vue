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

    h3 {
        font-family: font-condensed;
        text-transform: uppercase;
        margin: 40px 0 0;
        font-weight: 100;
    }

</style>

<script lang="babel" type="text/ecmascript-6">
    export default {
        watch : {
            scriptSource : function(val, old){
                hljs.initHighlightingOnLoad();
            },
            templateSource : function(val, old) {
                hljs.initHighlightingOnLoad();
            }
        },
        attached () {
                hljs.initHighlightingOnLoad();

        },
        components : {
            "md-toolbar" : require("./../../components/md-toolbar.vue"),
            block : require("../../components/block.vue")
        }
    }
</script>
