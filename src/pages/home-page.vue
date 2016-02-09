<template>
    <page-base>
        <h1 class="display-1" slot="title">Introduction</h1>
        <div class="repository">
            <h6>github</h6>
            <a href="https://github.com/ts020/v-ui">https://github.com/ts020/v-ui/</a>
        </div>
    </page-base>
</template>
<style scoped>
    h1 {
        line-height: 72px;
    }

    .repository {
        text-align: center;
        font-size: 110%;
        margin: 30px auto;
        text-transform: uppercase;
    }

    .repository a {
        text-decoration: none;
        color: #00BCD4;
    }
    h6 {
        font-family: Open Sans Condensed, sans-serif;
        margin: auto;
        font-weight: 800;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue")
        }
    }
</script>