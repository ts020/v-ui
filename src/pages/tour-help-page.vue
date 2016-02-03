<template>
    <div class="tour-help-page">
        <page-base>
            <h1 class="display-1" slot="title">Tour Help</h1>
            <h2 v-el:h2>見出し</h2>
            <p class="nnn" v-el:p>段落</p>
            <p v-el:p2>段落２</p>
            <tour-help-block v-ref:help-block :rect-list="rects"></tour-help-block>
        </page-base>
    </div>
</template>
<style scoped>
    .nnn {
        font-size: 230%;
        width: 300px;
        height: 300px;
    }
</style>

<script lang="babel">
    import Rect from "../../components/lib/geom/Rect"
    export default {
        props : ["rects"],
        attached (){
            this.rects = [
                {
                    rect : Rect.domToGlobal(this.$els.h2),
                    title : "見出しです",
                    message : "見出しの説明"
                },
                {
                    rect : Rect.domToGlobal(this.$els.p),
                    title : "段落です",
                    message : "段落の説明"
                },
                {
                    rect :Rect.domToGlobal(this.$els.p2),
                    title : "段落２個目",
                    message : "段落２個目の説明"
                }
            ];
            console.log(this.rects);
        },
        components : {
            "page-base" : require("./page-base.vue"),
            "tour-help-block" : require("../../components/tour-help-block.vue")
        }
    }
</script>
