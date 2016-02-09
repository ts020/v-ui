<template>
<div class="buttons-page">
    <page-base>
        <h1 slot="title" class="display-1">Buttons EXAMPLE</h1>
        <simple-button>ボタン</simple-button>
        <simple-button>Submit</simple-button>
    </page-base>
</div>
</template>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue"),
            "simple-button" : require("../../components/buttons/simple-button.vue")
        }
    }
</script>