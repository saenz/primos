const env = require('./env-config')

module.exports = {
	"presets": ["next/babel"],
  "plugins": [
  	["styled-components", { "ssr": true, "displayName": true, "preprocess": false } ],
		["inline-import", { "extensions": [".css"] } ],
		"transform-flow-strip-types",
    ["transform-imports", {
    	"reactstrap": {
      	"transform": "reactstrap/lib/${member}",
        "preventFullImport": true
      }
    }],
		["transform-define", env]
  ],
  "env": {
    "test": {
      "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]]
    }
  },
	"ignore": []
}
