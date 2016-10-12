var ComponentSystem = {
	componentDirectoryPath: "./Components/",
	components: { },
	componentSystemNames: null,
	systemProperties: {
		verbosity: "full",			//TODO: Make verbosity value changes affect actual verbosity
	},

	build: function() {
			this.componentSystemNames.forEach((current, index,arrayRef) => {
				let candidateComponent = require(this.componentDirectoryPath+current+".js");
				console.log("Loaded '",candidateComponent.name,"'");
				
				let missingComponents = this.requiredProperties.filter(prop => candidateComponent[prop] === undefined);
	
				if ( missingComponents.length > 0 ) {
					console.error("Missing component implementations");
					console.log(missingComponents);
					throw "Missing component property implementations for '" + current + "': " + missingComponents;
				}
			});
	},

	loadComponentList: function (newComponentList) {
		//TODO: Check each property is a non-null string
		this.componentSystemNames = newComponentList;
	},

	loadRequiredProperties: function (newProperties) {
		//TODO: Check each property is a non-null string
		this.requiredProperties = newProperties;
	},

	rebuild: function() {
		//TODO: Clear system data before calling this.build()

		this.build();
	},

	run: function() { 
		//TODO: Run single ticks
	},
	
	setComponentDirectoryPath: function (newPath) {
		//TODO: Check permissions for newPath
		this.componentDirectoryPath = newPath;
	},

	setSystemProperty: function(propertyName, newPropertyValue) {
		systemProperties[propertyName] = newPropertyValue;
	},
};

module.exports = ComponentSystem;
