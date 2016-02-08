<template>
    <page-base>
        <h1 slot="title" class="display-1">Context-Box</h1>
        <button v-el:button @click="openContext()">ボタン</button>
        <button @click="focus()">fff</button>
        <context-box v-ref:context><span class="context-ico">A</span><span class="context-ico">B</span><span class="context-ico">C</span></context-box>
    </page-base>
</template>
<style scoped>
    .context-ico {
        display: inline-block;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        border-radius: 16px;
        background-color: black;
        color:white;
        font-size: 10px;
        margin-right: 2px;
        margin-bottom: 5px;
    }

    .context-ico:last-child {
        margin-right: 0;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default{
        methods : {
            openContext() {
                var rect = this.$els.button.getBoundingClientRect();
                this.$refs.context.open({left:(rect.left + rect.right)/2, top:rect.top});
            }
        },
        components:{
            "page-base" : require("./page-base.vue"),
            'context-box': require("../../components/context-box.vue")
        }
    }
</script>