function Pubsub() {
    this._storage = {
        events: [],
        triggered: []
    };
}

Pubsub.prototype = {
    on: function (event, factory) {
        if ('string' === typeof event && 'function' === typeof factory) {
            this._storage.events.push({event: event, factory: factory});
        }
    },
    trigger: function (event, params) {
        if ('string' === typeof event && (params instanceof Array || 'undefined' === typeof params)) {
            var i, len = this._storage.events.length, registered = this._storage.events;
            for (i = 0; i < len; i++) {
                if (registered[i].event === event) {
                    this._storage.triggered.push({event: event, factory: registered[i].factory.apply(this, params)});
                }
            }
        }
    }
};