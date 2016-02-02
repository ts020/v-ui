<template>
<div class="grid-page">
    <page-base>
        <h1 slot="title" class="display-1">GRID LAYOUT</h1>
        <grid-layout>
            <grid-item row="6" col="12" style="background-color: #5d99f1">1</grid-item>
            <grid-item row="3" col="3" style="background-color:#ffff4f">2</grid-item>
            <grid-item row="1" col="6" style="background-color: #40a070">3</grid-item>
            <grid-item row="4" col="9" style="background-color: #ff0000">4</grid-item>
            <grid-item row="2" col="3" style="background-color: #bf616a">5</grid-item>
        </grid-layout>
    </page-base>
</div>
</template>
<style scoped>
    h1 {
        line-height: 72px;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue"),
            "grid-layout" : require("../../components/grid-layout.vue"),
            "grid-item" : require("../../components/grid-item.vue")
        }
    }
</script>
