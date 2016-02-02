<template>
    <button class="btn submit-btn">
		<span class="progress-circle" v-if="isActive" :style="{'color':circleColor}"></span><span v-if="!isActive"><slot></slot></span>
    </button>
</template>
<style scoped>
	button {
		transition-property: all;
		transition-duration: 0.4s;
	}
	.progress-circle {
		width: 24px;
		height: 24px;
		border-width: 3px;
		border-style: solid;
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		-webkit-animation: left-spin 1333ms infinite ;
		animation: left-spin 800ms infinite ;
	}

	@-webkit-keyframes left-spin {
		from {
			-webkit-transform: rotate(0deg)
		}


		to {
			-webkit-transform: rotate(360deg)
		}
	}

	@keyframes left-spin {
		from {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg)
		}


		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg)
		}
	}
</style>
<script>
    export default{
		data () {
			return {
				circleColor : "white"
			}
		},
		props :["isActive"]
    }
</script>