<template>
    <div @mouseout="timerStart" @mouseover="timerReset" :class="{open:isOpen}" class="context-box" :style="style">
            <slot></slot>
    </div>
</template>
<style scoped>
    .context-box {
        position: absolute;
        opacity:0;
        margin-top: 20px;
        z-index: -10;
        transition: opacity, margin-top, z-index;
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
        pointer-events: none;
    }

    .context-box.open {
        opacity: 1;
        margin-top: 0;
        z-index: 1000;
        pointer-events:auto;
    }

</style>
<script lang="babel">
    import Timer from "olibe/util/Timer"
    export default{
        data () {
            return {
                style : {},
                isOpen : false,
                timer : null
            };
        },

        attached () {
            this.timer = new Timer(2000, 1);
            this.timer.on("timerComplete", this.close.bind(this));
            document.body.appendChild(this.$el);
        },
        methods : {
            timerStart : function(){
                this.timer.start();
            },

            timerReset : function(){
                this.timer.stop();
            },

            open : function (position) {
                this.style = {
                    left : (position.left - this.$el.offsetWidth / 2) + "px",
                    top : (position.top - this.$el.offsetHeight)  + "px"
                };
                this.isOpen = true;
                this.timerStart();
            },

            close : function() {
                this.timer.stop();
                this.isOpen = false;
            }
        }
    }
</script>