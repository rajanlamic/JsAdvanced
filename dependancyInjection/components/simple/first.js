function firstComponent(name) {
    
    function getSerice() {
        return name;
    }
    
    return {
        get: getSerice
    };
}