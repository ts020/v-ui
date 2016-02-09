<template>
	<div class="app">
		<block class="main-menu">
			<a v-link="{ path: '/' }">
				<img class="logo" src="http://jp.vuejs.org/images/logo.png" />
				<h1 class="title">Vue Material</h1>
			</a>
			<a v-link="{ path: '/buttons' }">buttons</a>
			<a v-link="{ path: '/typo' }">typo</a>
			<a v-link="{ path: '/fit-image' }">fit image</a>
			<a v-link="{ path: '/slider' }">slider</a>
			<a v-link="{ path: '/drawer' }">drawer</a>
			<a v-link="{ path: '/tour-help' }">tour-help</a>
			<a v-link="{ path: '/context-box' }">context-box</a>
			<a v-link="{ path: '/remote-service' }">remote-service</a>
			<a v-link="{ path: '/breadcrumb' }">breadcrumb</a>
			<a v-link="{ path: '/notification' }">notification</a>
		</block>
		<div class="main-content"><router-view></router-view></div>
	</div>
</template>
<script lang="babel" type="text/ecmascript-6">
    export default {
        created () {
            var _this = this;
            window.initMap = function(){
              _this.$broadcast("initMap");
            }
        },
        components : {
            "block" : require("../components/block.vue")
        }
    }
</script>
<style lang="stylus" >
	@import "../style/_typo.styl";
	input,
	body {
		font-family: Open Sans, sans-serif;
		font-size: 16px;
	}

	body {
		margin: 0;
		width: 100%;
		height: 100%;
	}

	body .main-menu {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 210px;
		overflow-y: scroll;
		padding: 16px 0 0 16px;
		box-sizing: border-box;
		margin: 0;
		list-style: none;
		background-color: #FFEB3B;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
		z-index: 2;
	}

	body .main-menu .logo {
		width: 100px;
		display: block;
		margin: 24px auto 0;
	}

	body .main-menu * {
		line-height: 48px;
	}

	body .main-menu a {
		font-family: Open Sans Condensed, sans-serif;
		text-decoration: none;
		text-transform: uppercase;
		display: block;
		font-size: 14px;
		font-weight: 800;
		color: black;
	}

	body .main-menu .title {
		text-align: center;
		line-height: 1.2em;
		margin-bottom: 24px;
	}

	.main-content {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 210px;
		right:0;
		overflow-y:scroll;
	}

	body a.v-link-active {
		color : rgba(0,0,0,0.6)
	}

	section {
		position: relative;
	}

</style>
