<template>
    <page-base>
        <h1 slot="title" class="display-1">Remote Service</h1>
        <label>url
        <input type="text" value="/json-example/wather.json" v-model="url" /></label>
        <label>zip
            <input type="text" v-model="cityCode" value="400040" />
        </label>
        <button @click="$refs.service.load()">送信</button>
        <textarea>{{$refs.service.response | json 4}}</textarea>
        <remote-service v-ref:service :url="url" :query="{city:cityCode}"></remote-service>
    </page-base>
</template>
<style scoped>
    textarea {
        width: 100%;
        height: 400px;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default{
        props : ["url","cityCode"],
        components:{
            "page-base" : require("./page-base.vue"),
            'remote-service': require("../../components/remote-service.vue")
        }
    }
</script>