const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    main: __dirname + "/src/client/main.tsx",
    bundle2: __dirname + "/src/client/bundle2.ts",
  },
  output: {
    path: __dirname + "/dist/public",
  },
  options: {
    // minify: true,
    jsc: {
      "parser": {
        "tsx": true,
        "syntax": "typescript"
      },
      "transform": {
        "react": {
          "runtime": "automatic"
        }
      }
      // "transform": {
      //   "react": {
      //     "pragma": "React.createElement",
      //     "pragmaFrag": "React.Fragment"
      //   }
      // },
      //   "transform": {
      //     "react": {
      //         "runtime": "automatic",
      //         "pragma": "React.createElement",
      //         "pragmaFrag": "React.Fragment",
      //         "throwIfNamespace": true,
      //         "development": false,
      //         "useBuiltins": false
      //     },
      //     "optimizer": {
      //         "globals": {
      //             "vars": {
      //                 "__DEBUG__": "true"
      //             }
      //         }
      //     }
      // },
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
  //   "type": "esm"
  // }
})