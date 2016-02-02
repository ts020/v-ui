<template>
    <div class="md-toolbar">
        <div class="left"><slot name="md-left"></slot></div>
        <div class="content"><slot></slot></div>
        <div class="right"><slot name="md-right"></slot></div>
    </div>
</template>
<!--suppress CssInvalidPropertyValue -->
<style lang="stylus" type="text/stylus" scoped>
    @import "../../style/_val.styl";
    .md-toolbar {
        background-color: gray-color;
        overflow: hidden;
        padding: 0 margin-def;
        box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);
    }

    .left, .content {
        float: left;
    }

    .right {
        float: right;
    }

</style>