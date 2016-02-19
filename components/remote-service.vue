<script lang="babel">
    import request from 'superagent'
    export default{

        props : ["url", "response", "method", "header", "query", "type"],

        attached () {
            if(!this.method) {
                this.method = "GET";
            }
            var _this = this;
            setTimeout(function(){
                if(_this.url) {
                    _this.load();
                }
            },17)

        },


        methods : {
            load : function(url) {
                if(url) {
                    this.url = url;
                }
                if(!this.validate()) {
                    return;
                }
                var agent = this.build();
                if(this.query) {
                    if (this.type == "json") {
                        agent.query(JSON.stringify(this.query));
                    } else {
                        agent.query(this.query);
                    }
                }

                agent.send();

                var _this = this;
                agent.end(function(err, response){
                    if(err) {
                        console.error(err);
                    }

                    _this.response = response.body;
                    _this.$dispatch("complete", response.body);
                })
            },

            validate : function() {
                return (this.url && this.method);
            },

            build : function() {
                var agent = request(this.method, this.url);
                if(this.type) {
                    agent.type(this.type);
                }

                if(this.header) {
                    for(var prop in this.header) {
                        agent.set(prop, this.header[prop]);
                    }
                }

                return agent;
            }
        }
    }

</script>