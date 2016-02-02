<template>
<div class="typo-page">
    <page-base>
        <h1 slot="title" class="display-1">TYPO EXAMPLE</h1>
        <div class="display-4">Dispaly 4</div>
        <div class="display-3">Dispaly 3</div>
        <div class="display-2">Dispaly 2</div>
        <div class="display-1">Dispaly 1</div>
        <div class="title">title</div>
        <div class="sub-heading">sub heading</div>
        <div class="body-2">body-2</div>
        <div class="body-1">body-1</div>
        <div class="caption">caption</div>
        <div class="button">button</div>
    </page-base>
</div>
</template>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue")
        }
    }
</script>
