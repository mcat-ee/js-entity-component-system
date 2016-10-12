var ComponentSystem = {
	componentSystemNames: null,
	componentDirectoryPath: "./Components/",
	components: { },

	loadRequiredProperties: function (newProperties) {
		this.requiredProperties = newProperties;
	},

	loadComponentList: function (newComponentList) {
		this.componentSystemNames = newComponentList;
	},

	setComponentDirectoryPath: function (newPath) {
		//TODO: Check permissions for newPath
		this.componentDirectoryPath = newPath;
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
	run: function() { },
};


module.exports = ComponentSystem;
