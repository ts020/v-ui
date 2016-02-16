<template>
    <div class="date-picker">
        <div class="inner" @click="open=!open" v-if="!open">
            <ico-calender></ico-calender>
            <span class="date-label">{{year}}<span class="mini">年</span>{{month}}<span class="mini">月</span>{{date}}<span class="mini">日</span></span>
        </div>
        <div class="calendar" v-if="open">
            <div class="head">{{year}}<span class="mini">年</span>{{month}}<span class="mini">月</span></div>
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
                <tr v-for="week in weeks">
                    <td class="day"><calender-item @change="chenge" v-if="week[0]" :date="week[0]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="chenge" v-if="week[1]" :date="week[1]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="chenge" v-if="week[2]" :date="week[2]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="chenge" v-if="week[3]" :date="week[3]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="chenge" v-if="week[4]" :date="week[4]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="chenge" v-if="week[5]" :date="week[5]" :selected-date="selectedDate"></calender-item></td>
                    <td class="day"><calender-item @change="chenge" v-if="week[6]" :date="week[6]" :selected-date="selectedDate"></calender-item></td>
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
        transition-property: height;
        transition-duration: 0.15s;
        transition-timing-function: ease-in-out;
        position: relative;
    }

    th {
        font-size: 80%;
        line-height: 2em;
    }
    .inner {
        overflow: hidden;
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
        margin-bottom: 5px;
    }
</style>
<script lang="babel">
    import CalendarData from "olibe/data/CalendarData"
    import StringUtil from "olibe/util/StringUtil"
    export default {
        props: ["open", "selectedDate"],
        ready () {
            var date = new Date();
            this.selectedDate = this.selectedDate || new Date();
        },

        computed : {
            year : function() {
                return this.selectedDate.getFullYear();
            },
            month : function() {
                return StringUtil.addZero(this.selectedDate.getMonth() + 1);
            },
            date : function() {
                return StringUtil.addZero(this.selectedDate.getDate());
            },
            weeks : function() {
                var d = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1);
                var result = [d.getDay()];
                return new CalendarData(this.year, this.month).getWeeks();
            }
        },

        methods : {
            chenge : function(date) {
                this.selectedDate = date;
                this.open = false;
            }
        },

        components: {
            "ico-calender": require("../icon/calendar.vue"),
            "calender-item": require("./date-picker-calendar-item.vue")
        }
    }
</script>

