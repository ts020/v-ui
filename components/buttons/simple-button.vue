<template>
    <div class="simple-button"><slot></slot></div>
</template>
<!--suppress CssInvalidPropertyValue -->
<style scoped lang="stylus">
    @import "../../style/_val.styl";
    .simple-button {
        padding: 15px 30px;
        margin: 0 10px;
        display: inline-block;
        border-radius: 30px;
        border: 2px solid main-color;
        color: main-color;
        background-color: white;
        line-height: 1em;
        font-size: 14px;
        cursor: pointer;
        transition-property: all;
        transition-duration: 0.15s;
        transition-timing-function: ease-in-out;
    }

    .simple-button:hover {
        background-color: main-color;
        color : white;
        padding: 15px 40px;
        margin: 0 0;
    }
</style>