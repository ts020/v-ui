<template>
<div class="buttons-page">
    <page-base>
        <h1 slot="title" class="display-1">Buttons EXAMPLE</h1>
        <button>ボタン</button>
        <button>ボタン2</button>
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
            "page-base" : require("./page-base.vue")
        }
    }
</script>
