describe('Pubsub', function() {
    var pubsub;
    
    beforeEach(function() {
        pubsub = new Pubsub();
    });
    
    afterEach(function() {
        pubsub = null;
        delete pubsub;
    });
    
    it('shold be an object type', function() {
        expect(typeof pubsub).toBe('object');
    });
    
    it('should call on', function() {
        spyOn(pubsub, 'on');
        pubsub.on('test', function() {
            return 'test';
        });
        expect(pubsub.on).toHaveBeenCalled();
    });
    
    it('should call trigger', function() {
        spyOn(pubsub, 'trigger');
        pubsub.on('test', function() {
            return 'test';
        });
        pubsub.trigger('test');
        expect(pubsub.trigger).toHaveBeenCalled();
    });
    
    it('should subsribe event name be string type', function() {
        pubsub.on('test', function() {
            return 'test';
        });
        pubsub.on(123, function() {
            return 'test';
        });
        expect(typeof pubsub._storage[0].event).toBe('string');
        expect(pubsub._storage.length).toEqual(1);
    });
    
    it('should subsribe factory name be function type', function() {
        pubsub.on('test', function() {
            return 'test';
        });
        pubsub.on('testfurther', 'factory parameter');
        expect(typeof pubsub._storage[0].factory).toBe('function');
        expect(pubsub._storage.length).toEqual(1);
    });
    
    it('should trigger event name be string type', function() {
        pubsub.on('test', function() {
            return 'test';
        });
        
        expect(pubsub.trigger('test')).toBe('test');
        expect(pubsub.trigger(123)).not.toBe(123);
        expect(pubsub.trigger(123)).not.toBe('undefined');
    });
    
    it('should trigger params can be optional', function() {
        pubsub.on('test', function() {
            return 'optional';
        });
        
        expect(pubsub.trigger('test')).toBe('optional');
    });
    
    it('should trigger params should be array if its not optional', function() {
        pubsub.on('test', function(par1, par2) {
            return par1 + ' ' + par2;
        });
        
        expect(pubsub.trigger('test', ['first', 'second'])).toBe('first second');
        expect(pubsub.trigger('test', 'first')).not.toBe('first undefined');
    });
    
    it('should subscribe event with factory', function() {
        pubsub.on('start', function() {
            return 'factory';
        });
        
        expect(pubsub._storage[0].event).toBe('start');
        expect(typeof pubsub._storage[0].factory).toBe('function');
        
    });
    
    it('should sunscribe multiple events and factories', function() {
        pubsub.on('stage1', function() {
            return 'stage1';
        });
        pubsub.on('stage2', function() {
            return 'stage2';
        });
        
        expect(pubsub._storage.length).toEqual(2);
    });
    
    it('should trigger event without parameters', function() {
        pubsub.on('noParam', function() {
            return 'noParam';
        });
        expect(pubsub.trigger('noParam')).toBe('noParam');
    });
    
    it('should trigger event with single parameter', function() {
        pubsub.on('singleParam', function(singleParam) {
            return singleParam;
        });
        expect(pubsub.trigger('singleParam', ['singleParamValue'])).toBe('singleParamValue');
    });
    
    it('should trigger event with multiple parameters', function() {
        pubsub.on('multiParams', function(param1, param2) {
            return param1 + ' ' + param2;
        });
        expect(pubsub.trigger('multiParams', ['first', 'second'])).toBe('first second');
    });
    
});