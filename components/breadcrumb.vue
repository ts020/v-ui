<template>
    <div class="breadcrumb" v-ui><slot></slot></div>
</template>
<style>
    .breadcrumb[v-ui] {
        overflow: hidden;
        width: 100%;
        font-size: 80%;
    }

    .breadcrumb[v-ui] .breadcrumb-item{
        float: left;
        margin: 0 2em 0 0;
    }

    .breadcrumb[v-ui] a{
        padding: .7em 1em .7em 2em;
        float: left;
        text-decoration: none;
        color: #444;
        background: #ddd;
        position: relative;
        z-index: 1;
        text-shadow: 0 1px 0 rgba(255,255,255,.5);
        border-radius: .4em 0 0 .4em;
    }
    .breadcrumb[v-ui] .current a,
    .breadcrumb[v-ui] a:hover{
        background: #abe0ef;
    }

    .breadcrumb[v-ui] a::after{
        background: #ddd;
        content: "";
        height: 2.5em;
        margin-top: -1.25em;
        position: absolute;
        right: -1em;
        top: 50%;
        width: 2.5em;
        z-index: -1;
        transform: rotate(45deg);
        border-radius: .4em;
    }

    .breadcrumb[v-ui] .current a::after,
    .breadcrumb[v-ui] a:hover::after{
        background: #abe0ef;
    }

    .breadcrumb[v-ui] .current,
    .breadcrumb[v-ui] .current:hover{
        font-weight: bold;
        background: none;
    }

    .breadcrumb[v-ui] .current::after{
        content: normal;
    }
</style>
<script lang="babel">
    export default {
        props : ["path"],
        computed : {
            pathList : function(){
                return this.path.split("/");
            }
        },
        components : {
            "chevron-right" : require("./icon/chevron-right.vue")
        }
    }
</script>