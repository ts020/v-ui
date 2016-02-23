<template>
    <page-base>
        <h1 class="display-1" slot="title">ICON EXAMPLE</h1>
        <div class="icons">
            <div class="item"><ico-arrow-right></ico-arrow-right></div>
            <div class="item"><ico-chevron-left></ico-chevron-left></div>
            <div class="item"><ico-chevron-right></ico-chevron-right></div>
            <div class="item"><ico-calendar></ico-calendar></div>
            <div class="item"><ico-close></ico-close></div>
            <div class="item"><ico-menu></ico-menu></div>
            <div class="item"><ico-no-visible></ico-no-visible></div>
        </div>
    </page-base>
</template>
<style scoped lang="stylus">
    @import "../../style/_val.styl";
    .icons {
        overflow: hidden;
    }

    .item {
        width: 80px;
        height: 80px;
        border-radius: 80px;
        padding: 20px;
        background-color: main-color;
        box-sizing: border-box;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .ico {
        fill : white;
        width: 40px;
        height: 40px;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue"),
            "ico-arrow-right" : require("../../components/icon/arrow-right.vue"),
            "ico-chevron-left" : require("../../components/icon/chevron-left.vue"),
            "ico-chevron-right" : require("../../components/icon/chevron-right.vue"),
            "ico-calendar" : require("../../components/icon/calendar.vue"),
            "ico-close" : require("../../components/icon/close.vue"),
            "ico-menu" : require("../../components/icon/menu.vue"),
            "ico-no-visible" : require("../../components/icon/no-visible.vue"),

        }
    }
</script>