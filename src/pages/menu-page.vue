<template>
    <div class="buttons-page">
        <page-base>
            <h1 slot="title" class="display-1">menu EXAMPLE</h1>
            <simple-button v-ref:btn @click="$refs.menu.show()">メニュー開くよ</simple-button>
            <menu :target="$refs.btn" v-ref:menu>
                <ul>
                    <li>メニュー項目</li>
                    <li>メニュー項目２</li>
                    <li>メニュー項目３</li>
                </ul>
            </menu>
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
            "simple-button" : require("../../components/buttons/simple-button.vue"),
            "menu" : require("../../components/menu.vue")
        }
    }
</script>
