<template>
    <div class="menu" :style="style" v-show="isShow"><slot></slot></div>
</template>
<style scoped>
    .menu {
        position: absolute;
        box-shadow: 0 0 3px rgba(0,0,0,0.4);
        padding: 8px;
        border-radius: 8px;
    }
</style>
<script lang="babel">
    import Rect from "olibe/geom/Rect"
    export default{
        props : ["target", "isShow"],
        data () {
            return {
                style : {},
                closeHandler : function(){
                    this.hide();
                }.bind(this)
            }
        },

        attached() {
            document.body.appendChild(this.$el);
            var _this = this;
        },

        methods : {
            show : function(){
                this.isShow = true;
                var _this = this;
                this.$nextTick(function(){
                    _this.setupStyle();
                    document.body.addEventListener("mousedown",_this.closeHandler);
                })
            },

            hide : function(){
                this.isShow = false;
                document.body.removeEventListener("mousedown", this.closeHandler);
            },

            setupStyle : function() {
                if(!this.target) return{};
                var rect;
                if(this.target.$el) {
                    rect = Rect.vueToGlobal(this.target);
                }else {
                    rect = Rect.domToGlobal(this.target);
                }

                var currentRect = Rect.vueToGlobal(this);
                var left = Math.min(rect.center - currentRect.width/2, window.innerWidth-10);
                left = Math.max(10, left);

                var top = Math.min(rect.bottom + 10, window.innerHeight-10);
                top = Math.max(10, top);

                this.style= {
                    left : left + "px",
                    top : top + "px"
                }
            }
        }

    }
</script>