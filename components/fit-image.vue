<style scoped>
    .fit-image {
        min-height: 80px;
        height: 100%;
        width: 100%;
        display: table;
        position: relative;
        background-repeat: no-repeat;
        background-size : cover;
        background-position: center center;
    }


    .fit-image.contain {
        background-size : contain;
    }

    .fit-image > .content {
        display: table-cell;
        vertical-align: bottom;
        padding-bottom: 20px;
        text-align: center;
        position: relative;
    }

    .fit-image > .content.middle {
        vertical-align: middle;
        padding: 0;
    }


</style>

<template>
    <div class="fit-image" :style="innerStyle">
        <div class="content" :class="valign">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6" lang="babel">
    export default {
        props :["src", "valign"],
        computed : {
            innerStyle : function(){
                return {
                    "background-image" : 'url(' + this.src + ')'
                }
            }
        }
    }
</script>
