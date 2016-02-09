<template>
    <div class="buttons-page">
        <page-base>
            <h1 slot="title" class="display-1">Slider EXAMPLE</h1>
            <fit-image src="http://health.yellow-goose.com/wp/wp-content/uploads/2014/04/Momiji.jpg" >
                <a href="http://www.yahoo.co.jp/">link caption bottom</a>
            </fit-image>
            <br />
            <fit-image valign="middle" src="http://www.malebranche.co.jp/swf/randomSweets/movieEnd.jpg" >caption middle</fit-image>
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
            "fit-image" : require("../../components/fit-image.vue")
        }
    }
</script>
