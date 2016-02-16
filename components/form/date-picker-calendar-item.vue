<template>
    <div @click="clicked"
         class="date-picker-calender-item"
         :class="{sun:date.getDay()==0, selected:selected}"
    >{{formatDate}}</div>
</template>
<!--suppress CssInvalidPropertyValue -->
<style scoped lang="stylus">
    @import "../../style/_val.styl";
    .date-picker-calender-item {
        font-size: 80%;
        font-weight: 800;
        background-color: white;
        border-radius: 40px;
        width: 2.5em;
        height: 2.5em;
        margin: auto;
        line-height: 2.5em;
        color: main-color;
        text-align: center;
        position: relative;
        border: 2px solid main-color;
        transition-duration: .2s;
        transition-property: all;
        transition-timing-function: ease-in-out;
        cursor: pointer;
    }

    .date-picker-calender-item:hover {
        opacity: 0.6;
    }

    .selected {
        background-color: main-color;
        border-color: main-color;
        color : white;

    }

    .sun.selected {
        background-color: color-red;
        color : white;

    }

    .sun {
        border-color: color-red;
        color : color-red;
    }
</style>
<script lang="babel">
    import DateUtil from "olibe/util/DateUtil"
    import StringUtil from "olibe/util/StringUtil"
    export default {
        props:["date", "selectedDate"],
        computed : {
            formatDate : function(){
                return StringUtil.addZero(this.date.getDate());
            },
            selected : function(){
                return DateUtil.equalDate(this.date, this.selectedDate);
            }
        },
        methods : {
            clicked : function() {
                this.$dispatch("change", this.date);
            }
        }
    }
</script>