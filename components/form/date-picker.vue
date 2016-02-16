<template>
    <div class="date-picker" :class="{open:open}" @mouseleave="open=false">
        <div class="inner" @click="open=!open">
            <ico-calender></ico-calender>
            <span class="date-label">{{formatNum(selectedDate.getFullYear())}}<span class="mini">年</span>{{formatNum(selectedDate.getMonth()+1)}}<span class="mini">月</span>{{formatNum(selectedDate.getDate())}}<span class="mini">日</span></span>
        </div>
        <div class="calendar" v-show="open">
            <div class="head">
                <div class="prev-btn" @click="prev()"><ico-chevron-left></ico-chevron-left></div>
                {{formatNum(calender.year)}}<span class="mini">年</span>{{formatNum(calender.month+1)}}<span class="mini">月</span>
                <div class="next-btn" @click="next()"><ico-chevron-right></ico-chevron-right></div>
            </div>
            <table>
                <tr>
                    <th class="sun">日</th>
                    <th>月</th>
                    <th>火</th>
                    <th>水</th>
                    <th>木</th>
                    <th>金</th>
                    <th>土</th>
                </tr>
                <tr v-for="week in calender.getWeeks()">
                    <td class="day"><calender-item @change="change" v-if="week[0]" :date="week[0]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="change" v-if="week[1]" :date="week[1]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="change" v-if="week[2]" :date="week[2]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="change" v-if="week[3]" :date="week[3]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="change" v-if="week[4]" :date="week[4]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="change" v-if="week[5]" :date="week[5]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="change" v-if="week[6]" :date="week[6]" :selected-date="selectedDate"></calender-item></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<!--suppress CssInvalidPropertyValue -->
<style scoped lang="stylus" type="text/stylus">
    @import "../../style/_val.styl";

    .date-picker {
        padding: 10px 20px;
        margin: 0 10px;
        display: inline-block;
        border-radius: 30px;
        border: 2px solid main-color;
        color: main-color;
        background-color: white;
        line-height: 20px;
        font-size: 14px;
        cursor: pointer;
        font-family: font-condensed;
        overflow: hidden;
        transition-property: all;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out;
        position: relative;
        box-sizing: border-box;
        height: 45px;
        width: 160px;
    }

    .open {
        height: 325px;
        width: 300px;
    }

    th {
        font-size: 80%;
        line-height: 2em;
    }
    .inner {
        overflow: hidden;
        width: 120px;
        margin: auto;
        margin-bottom: 0px;
    }
    .date-label {
        float: left;
        font-weight: 800;
    }

    .ico-calendar {
        width: 18px;
        height: 18px;
        fill: main-color;
        margin-right: 10px;
        float: left;
    }

    .calendar {
        color : main-color;
        margin: 10px 0;
    }

    .chevron-left-ico,
    .chevron-right-ico,
    .prev-btn,
    .next-btn
    {
        transition-duration: .2s;
        transition-property: all;
        transition-timing-function: ease-in-out;
    }

    .chevron-left-ico,
    .chevron-right-ico {
        fill : main-color;
        width: 8px;
        height: 8px;
        stroke: main-color;
        stroke-width: 1.2px;
        position: absolute;
        top: calc(50% - 4px);
        left: calc(50% - 4px);
    }

    .prev-btn,
    .next-btn {
        margin: 0 10px;
        border-radius: 30px;
        display: inline-block;
        border: 2px solid main-color;
        width: 20px;
        height: 20px;
        position: relative;
        cursor: pointer;
    }

    .prev-btn:hover,
    .next-btn:hover {
        background-color: main-color;
    }

    .prev-btn:hover .ico,
    .next-btn:hover .ico {
        fill : white;
        stroke: white;
    }

    .sun {
        color: color-red;
    }

    .day.sun .date {
        background-color: color-red;
    }

    .mini {
        font-size: 60%;
    }

    .head {
        font-size: 180%;
        text-align: center;
    }
</style>
<script lang="babel">
    import CalendarData from "olibe/data/CalendarData"
    import StringUtil from "olibe/util/StringUtil"
    export default {
        data() {
            return {
                calDate : new Date(),
                calender : null
            }
        },
        props: ["open", "selectedDate"],
        created () {
            var date = new Date();
            this.selectedDate = this.selectedDate || new Date();
            this.calDate = new Date(this.selectedDate.getTime());
            this.calender = new CalendarData(this.calDate.getFullYear(), this.calDate.getMonth()+1);
        },

        methods : {
            prev: function() {
                this.calDate.setMonth(this.calDate.getMonth()-1);
                this.calender = new CalendarData(this.calDate.getFullYear(), this.calDate.getMonth()+1);
            },

            next: function() {
                this.calDate.setMonth(this.calDate.getMonth()+1);
                this.calender = new CalendarData(this.calDate.getFullYear(), this.calDate.getMonth()+1);
            },

            formatNum : function(val){
                return StringUtil.addZero(val);
            },

            change : function(date) {
                this.selectedDate = date;
                this.open = false;
            }
        },

        components: {
            "ico-calender": require("../icon/calendar.vue"),
            "calender-item": require("./date-picker-calendar-item.vue"),
            "ico-chevron-left": require("../icon/chevron-left.vue"),
            "ico-chevron-right": require("../icon/chevron-right.vue")
        }
    }
</script>

