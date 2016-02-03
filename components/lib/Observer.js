
export default class Observer{

    getListener(type) {
        if(!this.listeners) {
            this.listeners = {};
        }
        if(!this.listeners[type])this.listeners[type] = []
        return this.listeners[type];
    }

    contain(type, handler) {
        return this.getListener(type).indexOf(handler) != -1;
    }

    on(type, handler){
        this.getListener(type).push(handler);
    }

    off(type, handler) {
        if(type && !handler) {
            this.listeners[type] = [];
            return;
        }

        if (!this.contain(type, handler)) {
            return;
        }

        var list = this.getListener(type);
        for (var i = 0; i < list.length; i++) {
            if (list[i] == handler) {
                list.splice(i, 1);
                return;
            }
        }
    }

    allOff() {
        this.listeners = {};
    }

    trigger(type, data) {
        var sender = {type: type, data: data};
        this.getListener(type).forEach(function (hanlder) {
            try {
                hanlder(sender);
            } catch (error) {
                if (window["console"]) {
                    console.error(error.stack);
                }
            }
        });
        this.calledTrigger(type, data);
    }

    calledTrigger(type, data) {

    }

}