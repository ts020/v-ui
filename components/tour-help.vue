<template>
	<div class="tour-help" :style="position">
		<div class="flaticon-triangle-left"></div>
		<div class="subject">{{target.title}}</div>
		<div class="next-btn" @click="clicked()">
			<ico-arrow-right></ico-arrow-right>
		</div>
		<div class="content">{{target.message}}</div>
	</div>
</template>
<style scoped>
	.flaticon-triangle-left {
		position: absolute;
		left: -14px;
		top: 50%;
		margin-top: -.5em;
		line-height: 1em;
		color: #fff;
		font-size: 20px;
		width: 20px;
	}
    .tour-help {
		position: absolute;
		background-color: white;
		width: 260px;
		font-size: 90%;
		line-height: 1.7em;
		padding: 12px 24px;
		box-sizing: border-box;
		box-shadow: 0 0 8px rgba(0,0,0,0.2);
		transition-duration: 0.6s;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }

	.subject {
		margin-bottom: 4px;
		font-weight: 800;
	}

    .next-btn {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50px;
		right: -25px;
		margin-top: -25px;
		top: 50%;
		box-sizing: border-box;
		padding: 10px;
		box-shadow: 0 0 8px rgba(0,0,0,0.2);
		cursor: pointer;
		transition-duration: 0.3s;
		transition-property: all;
		transition-timing-function: ease;
		background-color: #45a6f0;
		border: 2px solid #45a6f0;
    }

	.next-btn .ico {
		fill : white;
	}

	.next-btn:hover {
		box-shadow: 0 0 6px rgba(0,0,0,0.4);
		background-color: white;
	}

	.next-btn:hover .ico {
		fill: #45a6f0;
	}

</style>
<script lang="babel">
    import Rect from "../lib/geom/Rect"
    export default {
        props : ["target"],
		created () {
			this.target = {};
		},
        methods : {
            clicked : function() {
                this.$dispatch("select");
            },

            getTargetRect() {
                return Rect.buildToBoundRect(this.target);
            }
        },

		computed : {
			position : function(){
				if(!this.target.rect) {
					return {
						left : -100+"px",
						top : -100+"px"
					};
				}
				return {
					left : Math.min(window.innerWidth-300, (this.target.rect.right + 15)) + "px",
					top : (this.target.rect.top + 30 - 60) + "px"
				}
			}
		},
		components : {
			"ico-arrow-right" : require("./icon/arrow-right.vue")
		}
    }
</script>