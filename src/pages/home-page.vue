<template>
    <page-base>
        <h1 class="display-1" slot="title">Introduction</h1>
    </page-base>
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
        }
    }
</script>