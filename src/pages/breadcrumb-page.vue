<template>
    <page-base>
        <h1 slot="title" class="display-1">breadcrumb</h1>
        <breadcrumb :path="'階層1/階層2/階層3'">
            <div class="breadcrumb-item"><a href="/">HOME</a></div>
            <div class="breadcrumb-item current"><a>breadcrumb</a></div>
        </breadcrumb>
    </page-base>
</template>
<script lang="babel" type="text/ecmascript-6">
    export default{
        components:{
            "page-base" : require("./page-base.vue"),
            'breadcrumb': require("../../components/breadcrumb.vue")
        }
    }
</script>