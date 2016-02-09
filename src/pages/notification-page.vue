<template>
    <div class="buttons-page">
        <page-base>
            <h1 slot="title" class="display-1">Notification EXAMPLE</h1>

            <simple-button v-ref:btn @click="$refs.notification.isOpen=true">ボタン</simple-button>
            <div v-el:koko >koko</div>
            <notification v-ref:notification :element="$refs.btn">通知</notification>
        </page-base>
    </div>
</template>
<style scoped>
    h1 {
        line-height: 72px;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    import Rect from "olibe/geom/Rect"
    export default {
        data () {
            return {
                btnPosition : {}
            }
        },

        components : {
            "page-base" : require("./page-base.vue"),
            "simple-button" : require("../../components/buttons/simple-button.vue"),
            "notification" : require("../../components/notification.vue")
        }
    }
</script>