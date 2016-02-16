<template>
    <div class="buttons-page">
        <page-base>
            <h1 slot="title" class="display-1">Form EXAMPLE</h1>
            <date-picker></date-picker>
        </page-base>
    </div>
</template>
<style scoped lang="stylus">
    .fit-image {
        height: 200px;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue"),
            "date-picker" : require("../../components/form/date-picker.vue")
        }
    }
</script>
