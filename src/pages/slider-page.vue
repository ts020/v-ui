<template>
    <page-base class="slider-page">
        <h1 slot="title" class="display-1">Fit Image EXAMPLE</h1>
        <slider>
            <fit-image src="http://health.yellow-goose.com/wp/wp-content/uploads/2014/04/Momiji.jpg" valign="middle" >
                <a href="http://www.yahoo.co.jp/">link caption</a>
            </fit-image>
            <fit-image src="http://www.malebranche.co.jp/swf/randomSweets/movieEnd.jpg" valign="middle">caption</fit-image>
            <fit-image src="http://www.geocities.jp/tyohama/taki/sizuoka/banjyo/banjyo01.jpg" valign="middle"><div style="color: #00BCD4">change color caption</div></fit-image>
        </slider>
    </page-base>
</template>
<style scoped lang="stylus">
    h1 {
        line-height: 72px;
    }

    .fit-image {
        height: 300px;
    }
    .slider-page .slider {
        height : 400px
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue"),
            "fit-image" : require("../../components/fit-image.vue"),
            "slider" : require("../../components/slider.vue")
        }
    }
</script>
