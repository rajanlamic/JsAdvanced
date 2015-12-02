function Pubsub() {
    this._storage = {};
}

Pubsub.prototype = {
    on: function (event, factory) {
        if ('string' === typeof event && 'function' === typeof factory) {
            this._storage.event.push({factory: factory});
        }
    },
    trigger: function (event, params) {
        if ('string' === typeof event && (params instanceof Array || 'undefined' === typeof params)) {
            var i, len = this._storage.length, registered = this._storage;
            for (i = 0; i < len; i++) {
                if (registered[i].event === event) {
                    return registered[i].factory.apply(this, params);
                }
            }
        }
    }
};