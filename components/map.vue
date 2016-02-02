<template>
    <div class="map"></div>
</template>
<style scoped>
    .map {
        display: inline-block;
        width: 100%;
        height: 100%;
        min-height: 180px;
    }
</style>
<script lang="babel" type="text/ecmascript-6">
    export default {
        data : function(){
            return {
                scrollwheel : false,
                zoom : 18
            }
        },

        props : ["lat", "lng"],
        attached : function(){
            var _this = this;

            this.$watch("lat", function(){
                this.changedProperty()
            });
            this.$watch("lng", function(){
                this.changedProperty();
            });

            this.$watch("zoom", function(){
                this.changedProperty()
            });

            if(!window.google || !window.google.maps) {
                this.$on("initMap", function(){
                    _this.initMap();
                });
            }else {
                this.initMap();
            }
        },

        watch : {

        },

        methods : {
            initMap : function() {
                var latlng = {
                    lat : parseFloat(this.lat,10) || 20,
                    lng : parseFloat(this.lng, 10) || 122
                };
                this.map = new google.maps.Map(this.$el, {
                    center : latlng,
                    zoom: this.zoom,
                    scrollwheel : this.scrollwheel,
                    styles : [
                        {
                            "stylers": [
                                { "saturation": -48 },
                                { "hue": "#0088ff" }
                            ]
                        }
                    ]
                });

                this.marker = new google.maps.Marker({
                    map: this.map,
                    position: latlng,
                    title: 'Hello World!'
                });
            },

            changedProperty : function() {
                if(!this.map) return;
                console.log(this.lat, this.lng)
                if(!this.lat || !this.lng) {
                    return;
                }
                var position = new google.maps.LatLng(this.lat,this.lng);
                this.map.setCenter(position);
                this.map.setZoom(this.zoom);
                this.marker.setPosition(position);
            },

            setMarker : function(lat,lng){
                var position = new google.maps.LatLng(lat,lng);
                this.map.setCenter(position);
                this.marker.setPosition(position);
            }
        }
    }
</script>
