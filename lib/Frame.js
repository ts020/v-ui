import Observer from "./Observer";
export default class Frame extends Observer {
    static _getInstance() {
        if(!Frame.__instance__) {
            Frame.__instance__ = new Frame();
        }

        return Frame.__instance__;
    }

    static next( handler) {
        Frame._getInstance().on("next", handler);
    }

    static lazy(frame, handler) {
        Frame._getInstance().lazy(frame, handler)
    }

    constructor() {
        super();
        this.layzyList = [];
        this.startEnterFrame();
    }

    startEnterFrame(){
        var enterFrame = EnterFrameFactory.create();
        enterFrame(()=>{
            this.trigger("next");
            this.off("next");
            if(this.layzyList.length > 0) {
                var lazy = this.layzyList.shift();
                if(lazy) {
                    lazy.forEach(function(d){
                        d();
                    })
                }

            }

            this.trigger("enter");

        })
    }

    lazy(frame, handler) {
        if(!this.layzyList[frame]) {
            this.layzyList[frame] = [];
        }
        this.layzyList[frame].push(handler);
    }
}

class EnterFrameFactory {
    static create() {
        if(window.requestAnimationFrame) {
            return _requestAnimationFrame();
        }
        return _setInterval;
    }


}

function _requestAnimationFrame() {
    var d = function(handler){
        window.requestAnimationFrame(function () {
            handler();
            d(handler);
        });

    };
    return d;
}

function _setInterval() {
    return function(_handler){
        setInterval(function(){
            _handler(_handler);
        },1000 / 60);
    }
}

