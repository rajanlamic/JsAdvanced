function secondComponent(firstComponent) {
    
    function getService(name) {
        return firstComponent.get() + ' --> ' +  name;
    }
    return {
      get: getService  
    };
}