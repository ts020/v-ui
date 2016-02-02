var request = require("superagent");
import Observer from "./Observer";
import Frame from "./Frame"
export default class QueLoader extends Observer {
    static get instance() {
        if(!QueLoader._instatnce){
            QueLoader._instatnce = new QueLoader();
        }
        return QueLoader._instatnce;
    }

    constructor() {
        super();
        this.queList = [];
        this.queHash = {};
        this.currentQue = null;
        this.loadedHandler = this.loaded.bind(this);
    }

    add(url, callback) {
        if(this.queHash[url]) {
            return;
        }
        var que = new LoadQue(url, callback);
        que.on("loaded", this.loadedHandler);

        this.queList.push(que);
        this.queHash[url] = que;

        if(!this.currentQue) {
            this.next();
        }
    }

    next() {
        if(this.queList.length == 0) {
            this.trigger("loadComplete");
            return;
        }
        this.trigger("loadStart");
        this.currentQue = this.queList.shift();
        delete this.queHash[this.currentQue.url];
        this.currentQue.load();
    }

    loaded(e){
        e.data.kill();
        this.next();
    }
}

export class LoadQue extends Observer {

    constructor(url, callBack) {
        super();
        this.url = url;
        this.callBack = callBack;
    }

    load() {
        var _this = this;
        request.get(this.url, function(err, res){
            _this.response = res;
            if (err) {
                _this.trigger("loaded", _this);
                console.error(err);
                return;
            }

            if(res.body.length == 0) {
                _this.trigger("loaded", _this);
                return;
            }
            _this.callBack(res);
            _this.trigger("loaded", _this);
        });
    }

    kill() {
        this.allOff();
        delete this.callBack;
    }
}