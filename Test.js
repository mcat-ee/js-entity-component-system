//This is a testing harness
const assert = require('assert');

var errorRaised = false;
try {
	var system = require('./Loader.js');
	var requiredProperties = [ "setup", "subscribe", "update", "isActive" ];
	var componentList = [ 'derp' ];

	system.loadRequiredProperties(requiredProperties);
	system.loadComponentList(componentList);

	system.build();

} catch (error) {
	console.log(error);
	errorRaised = true;
}
assert(errorRaised === true)


