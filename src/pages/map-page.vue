<template>
    <div class="grid-page">
        <page-base>
            <h1 slot="title" class="display-1">MAP Example</h1>
            <div>
                lat : <input type="text" v-model="lat" placeholder="lat" value="34.59688" />
                lng : <input type="text" v-model="lng" placeholder="lng" value="133.770086" />
            </div>
            <br />
            <div class="map-block">
                <map :lat="lat" :lng="lng"></map>
            </div>
        </page-base>
    </div>
</template>
<!--suppress CssInvalidPropertyValue -->
<style scoped>
    h1 {
        line-height: 72px;
    }

    .map-block {
        height: 400px;
    }

</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue"),
            "map" : require("../../components/map.vue")
        }
    }
</script>
