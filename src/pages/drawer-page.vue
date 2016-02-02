<template>
    <div class="buttons-page">
        <page-base>
            <h1 class="display-1" slot="title">Drawer Example</h1>
            <drawer>
                <ul class="box-list">
                    <li><a href="#"><i class="fa fa-search"></i><span>SEARCH</span></a>
                    </li>
                    <li><a href="#"><i class="fa fa-user"></i><span>mypage</span></a>
                    </li>
                    <li><a href="#"><i class="fa fa-sign-out"></i><span>logout</span></a>
                    </li>
                    <li><a href="#"><i class="fa fa-info"></i><span>ABOUT</span></a>
                    </li>
                    <li><a href="#"><i class="fa fa-question"></i><span>HELP</span></a>
                    </li>
                </ul>
            </drawer>
        </page-base>
    </div>
</template>
<style scoped>
    h1 {
        line-height: 72px;
    }

    .box-list li {
        list-style: none;
    }

    .box-list a {
        color : white;
        text-decoration: none;
        text-transform: uppercase;
    }

    .box-list a .fa {
        margin-right: 10px;
        width: 2em;
        text-align: center;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        components : {
            "page-base" : require("./page-base.vue"),
            "drawer" : require("../../components/drawer.vue")
        }
    }
</script>
