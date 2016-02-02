<template>
    <div class="grid-item" :class="rowCol"><slot></slot></div>
</template>
<style scoped>
    .grid-item {
        position: absolute;
    }

    .grid-item.row1 {
        width:calc(100% / 12)
    }

    .grid-item.row2 {
        width:calc(100% / 6)
    }

    .grid-item.row3 {
        width:calc(100% / 4)
    }

    .grid-item.row4 {
        width:calc(100% / 3)
    }

    .grid-item.row5 {
        width:calc(100% / 12 * 5)
    }

    .grid-item.row6 {
        width:calc(100% / 2)
    }

    .grid-item.row7 {
        width:calc(100% / 12 * 7)
    }

    .grid-item.row8 {
        width:calc(100% / 1.5)
    }

    .grid-item.row9 {
        width:calc(100% / 12 * 9)
    }

    .grid-item.row10 {
        width:calc(100% / 1.2)
    }

    .grid-item.row11 {
        width:calc(100% / 12 * 11)
    }

    .grid-item.row12 {
        width:100%
    }


    .grid-item.col1 {
       height:calc(100% / 12)
    }

    .grid-item.col2 {
       height:calc(100% / 6)
    }

    .grid-item.col3 {
       height:calc(100% / 4)
    }

    .grid-item.col4 {
       height:calc(100% / 3)
    }

    .grid-item.col5 {
       height:calc(100% / 12 * 5)
    }

    .grid-item.col6 {
       height:calc(100% / 2)
    }

    .grid-item.col7 {
       height:calc(100% / 12 * 7)
    }

    .grid-item.col8 {
       height:calc(100% / 1.5)
    }

    .grid-item.col9 {
       height:calc(100% / 12 * 9)
    }

    .grid-item.col10 {
       height:calc(100% / 1.2)
    }

    .grid-item.col11 {
       height:calc(100% / 12 * 11)
    }

    .grid-item.col12 {
        height:100%
    }

</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        props : ["row", "col"],
        computed : {
            "rowCol" : function(){
                var row = this.row || 12;
                var col = this.row || 12;
                return "row" + row + " col" + col
            }
        }
    }
</script>
