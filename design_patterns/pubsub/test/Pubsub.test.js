describe('Pubsub', function () {
    var pubsub;

    beforeEach(function () {
        pubsub = new Pubsub();
    });

    afterEach(function () {
        pubsub = null;
        delete pubsub;
    });

    it('shold be an object type', function () {
        expect(typeof pubsub).toBe('object');
    });

    it('should call on function', function () {
        spyOn(pubsub, 'on');
        pubsub.on('test', function () {
            return 'test';
        });
        expect(pubsub.on).toHaveBeenCalled();
    });

    it('should call trigger function', function () {
        spyOn(pubsub, 'trigger');
        pubsub.on('test', function () {
            return 'test';
        });
        pubsub.trigger('test');
        expect(pubsub.trigger).toHaveBeenCalled();
    });

    it('should subsribe event name to be string type', function () {
        pubsub.on('test', function () {
            return 'test';
        });
        pubsub.on(123, function () {
            return 'test';
        });
        expect(typeof pubsub._storage.events[0].event).toBe('string');
        expect(pubsub._storage.events.length).toEqual(1);
    });

    it('should subsribe factory name be function type', function () {
        pubsub.on('test', function () {
            return 'test';
        });
        pubsub.on('testfurther', 'factory parameter');
        expect(typeof pubsub._storage.events[0].factory).toBe('function');
        expect(pubsub._storage.events.length).toEqual(1);
    });

    it('should trigger event name be string type', function () {
        pubsub.on('test', function () {
            return 'test';
        });

        pubsub.trigger('test');
        expect(pubsub._storage.triggered[0].factory).toBe('test');

        pubsub.trigger(123);
        expect(pubsub._storage.triggered.length).toEqual(1);

    });

    it('should trigger params can be optional', function () {
        pubsub.on('test', function () {
            return 'optional';
        });

        pubsub.trigger('test');
        expect(pubsub._storage.triggered[0].factory).toBe('optional');
    });

    it('should trigger params should be array if its not optional', function () {
        pubsub.on('test', function (par1, par2) {
            return par1 + ' ' + par2;
        });

        pubsub.trigger('test', ['first', 'second']);
        expect(pubsub._storage.triggered[0].factory).toBe('first second');

        pubsub.trigger('test', 'first');
        expect(pubsub._storage.triggered.length).toEqual(1);

        pubsub.trigger('test', ['third', 'fourth']);
        expect(pubsub._storage.triggered.length).toEqual(2);

    });

    it('should subscribe event with factory', function () {
        pubsub.on('start', function () {
            return 'factory';
        });

        expect(pubsub._storage.events[0].event).toBe('start');
        expect(typeof pubsub._storage.events[0].factory).toBe('function');

    });

    it('should sunscribe multiple events and factories', function () {
        pubsub.on('stage1', function () {
            return 'stage1';
        });
        pubsub.on('stage2', function () {
            return 'stage2';
        });

        expect(pubsub._storage.events.length).toEqual(2);
    });

    it('should trigger event without parameters', function () {
        pubsub.on('noParam', function () {
            return 'noParam';
        });
        pubsub.trigger('noParam');
        expect(pubsub._storage.triggered[0].factory).toBe('noParam');
    });

    it('should trigger event with single parameter', function () {
        pubsub.on('singleParam', function (singleParam) {
            return singleParam;
        });

        pubsub.trigger('singleParam', ['singleParamValue']);
        expect(pubsub._storage.triggered[0].factory).toBe('singleParamValue');
    });

    it('should trigger event with multiple parameters', function () {
        pubsub.on('multiParams', function (param1, param2) {
            return param1 + ' ' + param2;
        });

        pubsub.trigger('multiParams', ['first', 'second']);
        expect(pubsub._storage.triggered[0].factory).toBe('first second');
    });

});