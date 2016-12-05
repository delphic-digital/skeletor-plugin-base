SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "local:": "jspm_packages/local/",
    "skeletor-plugin-base/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "skeletor-plugin-base": {
      "main": "skeletor-plugin-base.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "local:*.json"
  ],
  map: {
    "skeletor-core": "local:skeletor-core@3.0.0"
  },
  packages: {
    "local:skeletor-core@3.0.0": {
      "map": {
        "jquery": "npm:jquery@3.1.1"
      }
    }
  }
});
