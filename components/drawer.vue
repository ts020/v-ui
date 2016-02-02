<style scoped>
    .drawer {
        display: inline-block
    }

	.ico {
		cursor: pointer;
	}

	.close-ico {
		fill : white;
		width: 32px;
		height: 32px;
		float: right;
		margin-right: 10px;
		margin-top: 10px;
	}

    .content {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: left;
        background-color: #324249;
        color : #f2f7f9;
        z-index: 1000;
    }

    .content a {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 90%;
    }

    .content a i {
        margin-right: 5px;
    }

</style>

<template>
    <div class="drawer">
		<menu-ico @click="show()"></menu-ico>
        <div class="content" v-if="isShow">
            <close-ico @click="hide()"></close-ico>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="babel" type="text/ecmascript-6">
    export default {
        props: ['isShow'],
        methods : {
            show () {
                this.isShow = true;
            },
            hide() {
                this.isShow = false;
            }
        },
		components : {
			"menu-ico" : require("./icon/menu.vue"),
			"close-ico" : require("./icon/close.vue")
		}
    }
</script>
