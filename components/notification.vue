<template>
    <div :class="{open:isOpen}" class="notification" :style="style">
        <div><slot></slot></div>
    </div>
</template>
<!--suppress CssInvalidPropertyValue -->
<style scoped lang="stylus">
    @import "../style/_val.styl";
    .notification {
        position: absolute;
        opacity:0;
        margin-top: 20px;
        z-index: -10;
        transition: opacity, margin-top, z-index;
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
        pointer-events: none;
    }
    .notification.open {
        opacity: 1;
        margin-top: -10px;
        z-index: 1000;
        pointer-events:auto;
    }

    .notification > div {
        position: relative;
        padding: 10px 40px;
        background-color: main-color;
        color: white;
        font-size: 14px;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0, 0.2);
    }

    .notification:after {
        content: '';
        display: block;
        position: absolute;
        height: 8px;
        width: 8px;
        bottom: -4px;
        left: calc(50% - 4px);
        background: main-color;
        -webkit-transform: rotate(90deg);
        transform: rotate(45deg);
        z-index: 1;
    }

</style>
<script lang="babel">
    import Timer from "olibe/util/Timer"
    export default{
        data () {
            return {
                style : {},
                timer : null
            };
        },

        props: ["isOpen", "element"],

        ready () {
            this.timer = new Timer(2000, 1);
            this.timer.on("timerComplete", this.close.bind(this));
            document.body.appendChild(this.$el);
        },

        watch : {
            isOpen : function(val, old) {
                if(val == old) return;
                if(val) {
                    this.open();
                }else {
                    this.close();
                }
            }
        },

        methods : {
            open : function (position) {
                var rect;
                if(this.element instanceof HTMLElement) {
                    rect = this.element.getBoundingClientRect();
                }else {
                    rect = this.element.$el.getBoundingClientRect();
                }
                this.style = {
                    left : ((rect.left + rect.right - this.$el.offsetWidth) / 2) + "px",
                    top : (rect.top - this.$el.offsetHeight)  + "px"
                };
                this.isOpen = true;
                this.timer.start();
            },

            close : function() {
                this.isOpen = false;
                this.timer.stop();
            }
        }
    }
</script>