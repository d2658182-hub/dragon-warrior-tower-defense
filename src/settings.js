window._CCSettings = {
	platform: "web-mobile",
	groupList: ["default", "UI", "Game", "Monsetr", "Role", "Neutrality", "Bullet", "Goods", "Wall", "", "", "", "", ""],
	collisionMatrix: [
		[false],
		[false, false],
		[false, false, false],
		[false, false, false, false, false, true, true, null, true, true],
		[false, false, false, false, false, true, true, true, true],
		[false, false, false, true, true, false, null, true, null, true],
		[false, false, false, true, true, false, false, null, true, false],
		[false, false, false, false, true, true, false, true, true],
		[false, false, false, true, true, false, true, true, false, true, false, false, false, false],
		[false, false, false, true, false, true, false, false, true, false],
		[false, false, false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false, false, false, false, false, false]
	],
	hasResourcesBundle: true,
	hasStartSceneBundle: false,
	remoteBundles: [],
	subpackages: [],
	launchScene: "db://assets/scene/Launcher.fire",
	orientation: "portrait",
	jsList: ["assets/_plugs/scripts/extension/cc_extension.js"]
};