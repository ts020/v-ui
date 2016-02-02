<style scoped>
    .box-select {
        background-repeat: no-repeat;
        background-size : cover;
        background-position: center center;
        position: relative;
        min-height: 150px;
        display: table;
        width: 100%;
    }

    .box-select:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.32);
        z-index: 1;
    }

    .box-select > .content {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        z-index: 2;
        position: relative;
        color:white;
    }
    .box-select > .content select {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid;
        color: white;
        border-radius: 0;
        font-weight: 800;
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 0 1.5em 2px 1em;
        text-transform: uppercase;
    }

    .box-select > .content select:focus {
        background-color:rgba(0,0,0,0.6)
    }


    .box-select > .content > i {
        margin-left: -1em;
        font-weight: 800;
    }
</style>
<template lang="jade">
.box-select(v-bind:style="{'background-image':'url(' + image + ')'}")
    .content
        slot
        i.fa.fa-angle-down
</template>
<script lang="babel" type="text/ecmascript-6">
    export default {
        props: ['image'],
        attached () {
            var select = this.$el.querySelector("select");
            this.image = select.options[select.selectedIndex].getAttribute("image");
            var _this = this;
            this.$el.querySelector("select").addEventListener("change",function(){
                _this.image = this.options[this.selectedIndex].getAttribute("image");
            });
        }
    }
</script>
