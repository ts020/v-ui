<template>
    <div class="grid-layout">
        <slot></slot>
    </div>
</template>
<style>
    .grid-layout {
        position: relative;
        min-height: 200px;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        data () {
            return {
                row : 12,
                col : 12
            }
        },
        created () {
            console.log(this.$children);
        }
    }
</script>