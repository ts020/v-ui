<style scoped>
    .slider {
        height: 100%;
        min-height: 200px;
        display: block;
        position: relative;
        overflow: hidden;
    }

    .container {
        position: absolute;
        height: 100%;
        transition-property: transform;
    }

    .legends {
        position: absolute;
        bottom: 10px;
        text-align: center;
        width: 100%;
    }

    .legends i {
        color : white;
        margin-right: 10px;
    }

    .legends i:last-child {
        margin-right: 0;
    }

	.circle {
		width: 12px;
		height: 12px;
		margin-right: 6px;
		border-radius: 12px;
		border: 2px solid white;
		background-color: white;
		display: inline-block;
	}

	.circle.o {
		background-color: transparent;
	}

	.circle:last-child {
		margin-right: 0;
	}
</style>
<template>
    <div class="slider">
        <div class="container" v-el:container>
            <slot></slot>
        </div>
        <div class="legends" v-if="itemList.length > 1">
			<span class="circle"
					v-for="(index, item) in itemList"
					:class="{'o':!isCurrent(index)}"
					@click="move(index)"
			></span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6" lang="babel">
    export default {
        data() {
            return {
                itemList : []
            };
        },
        props : ["slideIndex", "autoheight"],
        attached () {
            this.slideIndex = 0;
            this.left = 0;
            var w  = this.width = this.$el.offsetWidth;
            var h = this.$el.offsetHeight;
            var children = this.$els.container.children;
            if(this.autoheight){
                for(var i=0; i < children.length; i++) {
                    var child = children[i];
                    h = Math.max(h, child.offsetHeight)
                }
            }

            var list = [];
            for(var i=0; i < children.length; i++) {
                var d = children[i];
                d.style.width = w + "px";
                d.style.height = h + "px";
                d.style.position = "absolute";
                d.style.top = "0px";
                d.style.left = i * w + "px";
                list.push(i)
            }
            this.$el.style.height = h + "px";
            this.itemList = list;
            this.initTouchEvent();
        },

        methods : {
            isCurrent(index) {
                return index == this.slideIndex
            },

            initTouchEvent() {
                var _this = this;
                var lastDir = 0;
                var lastX = 0;
                this.currentX = 0;
                this.isMoving = false;
                this.$el.addEventListener("touchstart", function(e){
                    var pageX = e.targetTouches[0].pageX;
                    _this.startX = pageX;
                    _this.startY = document.body.scrollTop;
                    _this.isMoving = false;
                });


                this.$el.addEventListener("touchmove", function (e) {
                    var pageX = e.targetTouches[0].pageX;
                    var moveX =  pageX - _this.startX;
                    if(Math.abs(moveX) >80) {
                        _this.isMoving = true;
                    }else{
                        return
                    }
                    lastDir = lastX - pageX;
                    lastX = pageX;
                    _this.$els.container.setAttribute("style","-webkit-transform:translate3d("+(_this.currentX + moveX)+"px,0,0)");
                    if(_this.isMoving) {
                        e.preventDefault();
                    }
                });

                this.$el.addEventListener("touchend", function(e){
                    var pageX = e.changedTouches[0].pageX;
                    var moveX = pageX - _this.startX;
                    var oversize = 10;

                    var slideIndex = 0;


                    if(Math.abs(moveX) < oversize) {
                        return;
                    }

                    if (moveX > oversize) {
                        slideIndex = Math.max(_this.slideIndex - 1, 0);
                    }
                    else if (moveX < -oversize) {
                        slideIndex = Math.min(_this.slideIndex + 1, _this.$els.container.children.length - 1);
                    }
                    _this.move(slideIndex);

                })
            },

            move(index) {
                this.slideIndex = index;
                this.currentX = -this.slideIndex * this.width;
                this.$els.container.setAttribute("style","-webkit-transform:translate3d("+this.currentX+"px, 0,0);" +
                        "transition-duration:0.2s;" +
                        "transition-timing-function:cubic-bezier(0.250, 0.460, 0.450, 0.940)")
            }
        }
    }
</script>
