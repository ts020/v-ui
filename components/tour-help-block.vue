<template>
	<div class="tour-help-block" :class="{open:isShow}">
		<svg>
			<g fill="none" fill-rule="evenodd">
				<path :d="pathD" fill="rgba(0,0,0,0.4)"></path>
			</g>
		</svg>
		<div class="help">
			<tour-help :target="currentRect" @select="next()"></tour-help>
		</div>
	</div>
</template>
<script lang="babel" type="text/ecmascript">
	import Path from "olibe/svg/Path"
	export default {
		props: ["isShow", "index", "rectList", "currentRect"],
		attached () {
			this.index = 0;
			document.body.appendChild(this.$el);
		},

		watch : {
			rectList : {
				handler :function(val, old){
					this.changeTour(0)
				},
				deep : true
			}
		},

		methods: {
			changeTour: function (index) {
				this.index = index;
				this.currentRect = this.rectList[this.index];
				this.isShow = true;
			},

			next() {
				this.index++;
				if (this.index >= this.rectList.length) {
					this.close();
					return;
				}

				this.changeTour(this.index);
			},

			close() {
				this.isShow = false;
			}
		},

		computed: {
			pathD: function () {
				var path = new Path();
				path.addRect({left:0, top:0, right:window.innerWidth, bottom:window.innerHeight});
				if (this.currentRect)
					path.addRect(this.currentRect.rect);
				return path.source;
			}
		},

		components: {
			"tour-help": require("./tour-help.vue")
		}
	}
</script>
<style scoped>

	.tour-help-block,
	.help,
	svg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.tour-help-block {
		position: absolute;
		z-index: 100;
		transition: all;
		transition-duration: 0.8s;
		transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
		left : -100%;
		opacity: 0;
	}

	.open {
		left : 0;
		opacity: 1;
	}


</style>
