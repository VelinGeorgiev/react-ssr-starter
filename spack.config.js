const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    main: __dirname + "/src/client/main.js",
    bundle2: __dirname + "/src/client/bundle2.js",
  },
  output: {
    path: __dirname + "/dist/public",
  },
  options: {
    minify: true,
    jsc: {
      "parser": {
        "jsx": true,
        "syntax": "ecmascript"
      },
      "transform": {
        "react": {
            "runtime": "automatic",
            "pragma": "React.createElement",
            "pragmaFrag": "React.Fragment",
            "throwIfNamespace": true,
            "development": true,
            "useBuiltins": false
        },
        "optimizer": {
            "globals": {
                "vars": {
                    "__DEBUG__": "true"
                }
            }
        }
    },
      //,
      // minify: {
      //   compress: {
      //     unused: true
      //   },
      //   mangle: true
      // }
    }
  },
  // "module": {
  //   "type": "commonjs"
  // }
})