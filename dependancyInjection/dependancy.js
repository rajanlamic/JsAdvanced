function componentCreator(outParam) {
 
  function getComponentService() {
    return outParam;
  }
  
  return {
    get: getComponentService
  }
}


function creatorComponent(componet) {

  function getSericeN(currentN) {
   return componet.get() + ' ' + currentN;
  }
  
  return {
    get: getSericeN
    
  }
}

// first component
var firstComponent = new componentCreator('first Out');
var firstComponentVariation1 = new componentCreator('variation 1');

// second component, pass first componnet as dedepndacy injection
var secondComponent = new creatorComponent(firstComponent);
secondComponent.get('second current');


// first out second current
// variaion 1 second current