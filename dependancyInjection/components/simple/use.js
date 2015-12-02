var firstComponent = new firstComponent('first component');
var secondComponent = new secondComponent(firstComponent);

// firts compoment --> second service
var result1 = secondComponent.get('second 1 service');
var result2 = secondComponent.get('second 2 service');

document.writeln(result1 + '<br>');
document.writeln(result2);