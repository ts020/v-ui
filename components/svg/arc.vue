<template>
    <svg>
        <path :d="d" />
    </svg>
</template>
<script lang="babel" type="text/ecmascript-6">
    import Point from "olibe/geom/Point"
    export default {
        props : ["x", "y", "deg"],
    }
</script>